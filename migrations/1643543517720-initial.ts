import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1643543517720 implements MigrationInterface {
    name = 'initial1643543517720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255), CONSTRAINT "UQ_f068a15d416578e89d41189ca25" UNIQUE ("slug"), CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255), CONSTRAINT "UQ_420d9f679d41281f282f5bc7d09" UNIQUE ("slug"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255), "description" character varying(255) NOT NULL, "body" character varying(255) NOT NULL, "publishedAt" date, "authorId" uuid, CONSTRAINT "UQ_1123ff6815c5b8fec0ba9fec370" UNIQUE ("slug"), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles_categories_categories" ("articlesId" uuid NOT NULL, "categoriesId" uuid NOT NULL, CONSTRAINT "PK_d99e5b5140f980c6e7b63fc1f16" PRIMARY KEY ("articlesId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c28108e84d0948e9567d29e40" ON "articles_categories_categories" ("articlesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d69c4c523152c22941ed15738b" ON "articles_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "articles_categories_categories" ADD CONSTRAINT "FK_9c28108e84d0948e9567d29e400" FOREIGN KEY ("articlesId") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_categories_categories" ADD CONSTRAINT "FK_d69c4c523152c22941ed15738ba" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles_categories_categories" DROP CONSTRAINT "FK_d69c4c523152c22941ed15738ba"`);
        await queryRunner.query(`ALTER TABLE "articles_categories_categories" DROP CONSTRAINT "FK_9c28108e84d0948e9567d29e400"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d69c4c523152c22941ed15738b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c28108e84d0948e9567d29e40"`);
        await queryRunner.query(`DROP TABLE "articles_categories_categories"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
