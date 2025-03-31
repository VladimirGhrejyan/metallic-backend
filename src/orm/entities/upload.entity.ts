import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IUpload } from '~common/interfaces';

@Entity()
export class Upload implements IUpload {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    path: string;

    @Column()
    mimeType: string;
}
