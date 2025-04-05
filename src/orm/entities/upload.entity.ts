import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IUpload } from '~common/interfaces';

@Entity()
export class Upload implements IUpload {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    path: string;

    @Column({ type: 'varchar', nullable: false })
    mimeType: string;

    @Column({ type: 'varchar', nullable: false })
    url: string;
}
