import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductoTabla41761847402916 implements MigrationInterface {
    name = 'ProductoTabla41761847402916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" ADD "categoriaId" integer`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_6465b0476dcfd393c4808d53b95" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_6465b0476dcfd393c4808d53b95"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "categoriaId"`);
    }

}
