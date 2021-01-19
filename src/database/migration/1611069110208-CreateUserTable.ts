import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1611069110208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: `users`,
        columns: [{
          name: `id`,
          type: `integer`,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: `increment`
        }, {
          name: `name`,
          type: `text`,
          isNullable: false
        }, {
          name: `email`,
          type: `text`,
          isNullable: false,
          isUnique: true
        }, {
          name: `password`,
          type: `text`,
          isNullable: false
        }, {
          name: `registered_date`,
          type: `timestamp`,
          isNullable: false,
          default: `now()`
        }]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(`users`);
    }

}
