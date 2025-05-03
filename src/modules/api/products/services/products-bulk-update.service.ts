import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';

import { UtilsService } from '~modules/shared/utils';
import { XlsxService } from '~modules/shared/xlsx';

import { IProduct } from '~common/interfaces';
import { PartialExpect } from '~common/types';

import { UpdateProductDto, UpdateProductSchema } from '../common/dto';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class ProductsBulkUpdateService {
    constructor(
        private readonly productsRepository: ProductsRepository,

        private readonly xlsxService: XlsxService,

        private readonly utilsService: UtilsService,
    ) {}

    private readonly VALID_FILE_TYPES: string[] = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
    ];

    private readonly REQUIRED_FIELDS: Array<keyof IProduct> = ['code'];

    private readonly VALID_FIELDS: Array<keyof IProduct> = [
        'code',
        'costPrice',
        'markup',
        'quantityAvailable',
        'title',
        'description',
    ];

    /**
     *
     * @throws {BadRequestException}
     */
    private validateFileType(mimeType?: string): void {
        if (!mimeType || !this.VALID_FILE_TYPES.includes(mimeType)) {
            throw new BadRequestException('File type should be xls or xlsx');
        }
    }

    /**
     *
     * @throws {UnprocessableEntityException}
     */
    private parseFile(file: Express.Multer.File): Array<PartialExpect<IProduct, 'code'>> {
        try {
            return this.xlsxService.convertExcelToJson<
                PartialExpect<IProduct, 'code'>,
                keyof IProduct
            >(file.buffer, {
                requiredHeaders: this.REQUIRED_FIELDS,
                validHeaders: this.VALID_FIELDS,
            });
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error && error.message ? error?.message : 'Something went wrong';

            throw new UnprocessableEntityException(errorMessage);
        }
    }

    private prepareItemsForUpdate(
        items: Array<PartialExpect<IProduct, 'code'>>,
    ): UpdateProductDto[] {
        return this.utilsService.mapAndFilterNonNil(items, (item) => {
            const validationResult = UpdateProductSchema.safeParse(item);
            return validationResult.success ? validationResult.data : null;
        });
    }

    public async bulkUpdate(file: Express.Multer.File): Promise<void> {
        this.validateFileType(file.mimetype);

        const parsedContent = this.parseFile(file);

        const validItems = this.prepareItemsForUpdate(parsedContent);

        console.log(validItems, 'VALID ITEMS');

        await this.productsRepository.bulkUpdate(validItems);
    }
}
