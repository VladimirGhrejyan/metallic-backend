import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
    public compareSync(data: string, encrypted: string): boolean {
        return bcrypt.compareSync(data, encrypted);
    }

    public async hash(data: string, salt: string | number): Promise<string> {
        return bcrypt.hash(data, salt);
    }
}
