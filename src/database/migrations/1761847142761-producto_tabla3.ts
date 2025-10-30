import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductoTabla31761847142761 implements MigrationInterface {
    name = 'ProductoTabla31761847142761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_551ede1f9ac73b4e8f18495c6d" UNIQUE ("userId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "sku"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "categoria_id"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "producto_pkey"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "stock" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "imagen" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "descripcion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "estado" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "nombre" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "PK_5be023b11909fe103e24c740c7d"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "producto_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "producto_pkey" PRIMARY KEY ("producto_id")`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "categoria_id" integer`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "sku" character varying(30)`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }

}
