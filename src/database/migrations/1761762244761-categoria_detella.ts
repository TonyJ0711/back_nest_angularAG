import { MigrationInterface, QueryRunner } from "typeorm";

export class CategoriaDetella1761762244761 implements MigrationInterface {
    name = 'CategoriaDetella1761762244761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
    }

}
