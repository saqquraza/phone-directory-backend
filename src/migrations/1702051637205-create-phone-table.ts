import { MigrationInterface, QueryRunner } from "typeorm";

export class New1702051637205 implements MigrationInterface {
    name = 'New1702051637205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "phonedirectory" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "firstName" character varying NOT NULL,
                "lastName" character varying,
                "age" integer,
                "phone" integer NOT NULL,
                "createdAt" TIMESTAMP DEFAULT '"2023-12-08T16:07:20.360Z"',
                "updatedAt" TIMESTAMP,
                CONSTRAINT "PK_cb7042ae6d1bc0fb6b0a468092f" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "phonedirectory"
        `);
    }

}
