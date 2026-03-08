import { MigrationInterface, QueryRunner } from 'typeorm';

import { CLIENTS_TO_INSERT } from './data/clients-to-insert';

export class InsertClients1772977749650 implements MigrationInterface {
    name = 'InsertClients1772977749650';

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const c of CLIENTS_TO_INSERT) {
            const r = await queryRunner.query(
                `INSERT INTO "client" (
                    "name", "address", "price_adjustment", "taxpayer_registration_number",
                    "created_at", "updated_at", "deleted_at"
                ) VALUES ($1, $2, $3, $4, now(), now(), null)
                RETURNING "id"`,
                [c.name, c.address, c.priceAdjustment, c.taxpayerRegistrationNumber],
            );
            const row = Array.isArray(r) ? r[0] : (r as { rows?: unknown[] })?.rows?.[0];
            const clientId = row?.id as number | undefined;
            if (!clientId) continue;
            for (const { phone, name } of c.phones) {
                await queryRunner.query(
                    `INSERT INTO "client_phone" (
                        "client_id", "phone", "name",
                        "created_at", "updated_at", "deleted_at"
                    ) VALUES ($1, $2, $3, now(), now(), null)`,
                    [clientId, phone, name],
                );
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Seed data: delete only rows we inserted (by names from the constant).
        // If you need a full rollback of all clients, run manually.
        const names = CLIENTS_TO_INSERT.map((c) => c.name);
        if (names.length === 0) return;
        const placeholders = names.map((_, i) => `$${i + 1}`).join(', ');
        await queryRunner.query(
            `DELETE FROM "client_phone" WHERE "client_id" IN (SELECT "id" FROM "client" WHERE "name" IN (${placeholders}))`,
            names,
        );
        await queryRunner.query(`DELETE FROM "client" WHERE "name" IN (${placeholders})`, names);
    }
}
