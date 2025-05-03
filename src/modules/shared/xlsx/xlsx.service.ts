import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

import { UtilsService } from '~modules/shared/utils';
import { TCovertToJsonOptions } from '~modules/shared/xlsx/types';

@Injectable()
export class XlsxService {
    constructor(private readonly utilsService: UtilsService) {}

    /**
     *
     * @throws {Error}
     */
    public convertExcelToJson<T extends Record<string, unknown>, K extends keyof T & string>(
        file: Buffer,
        options?: TCovertToJsonOptions<K>,
    ): Array<T> {
        const workbook = XLSX.read(file, { type: 'array' });

        const sheetName = this.utilsService.first(workbook.SheetNames);

        if (!sheetName) {
            return [];
        }

        const sheet = workbook.Sheets[sheetName];

        const validationOptions = this.utilsService.safePick(options ?? {}, [
            'requiredHeaders',
            'validHeaders',
        ]);

        if (!this.utilsService.isEmptyObject(validationOptions)) {
            this.validateHeaderRow(this.extractHeaderRowFromSheet(sheet), validationOptions);
        }

        const jsonData = XLSX.utils.sheet_to_json<T>(sheet, { header: 0 });

        return jsonData;
    }

    /**
     *
     * @throws {Error}
     */
    private validateHeaderRow(
        headerRow: Array<unknown>,
        rules: Pick<TCovertToJsonOptions<string>, 'requiredHeaders' | 'validHeaders'>,
    ): void {
        const { requiredHeaders, validHeaders } = rules;

        if (requiredHeaders) {
            const intersection = this.utilsService.intersection(requiredHeaders, headerRow);
            if (intersection.length !== requiredHeaders.length) {
                throw new Error('Required columns not found');
            }
        }

        if (validHeaders) {
            const isValid = headerRow.every(
                (subject) => typeof subject === 'string' && validHeaders.includes(subject),
            );
            if (!isValid) {
                throw new Error('Invalid columns provided');
            }
        }
    }

    private extractHeaderRowFromSheet(sheet: XLSX.WorkSheet): Array<string | number> {
        const range = XLSX.utils.decode_range(sheet['!ref']!);
        const headers: Array<string | number> = [];

        for (let col = range.s.c; col <= range.e.c; ++col) {
            const cellAddress = { c: col, r: range.s.r };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            const cell = sheet[cellRef];

            if (!this.utilsService.isNil(cell?.v)) {
                headers.push(cell.v);
            }
        }

        return headers;
    }
}
