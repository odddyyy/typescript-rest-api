import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTodoTable1611136182289 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: `todos`,
      columns: [{
        name: `id`,
        type: `integer`,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: `increment`
      }, {
        name: `title`,
        type: `text`,
        isNullable: false
      }, {
        name: `description`,
        type: `text`,
        isNullable: false
      }, {
        name: `status`,
        type: `boolean`,
        default: false
      }, {
        name: `user_id`,
        type: `integer`,
        isNullable: false
      }, {
        name: `created_at`,
        type: `timestamp`,
        isNullable: false,
        default: `now()`
      }]
    }));

    /** Define FK to users table */
    await queryRunner.createForeignKey(`todos`, new TableForeignKey({
      columnNames: [`user_id`],
      referencedColumnNames: [`id`],
      referencedTableName: `users`,
      onDelete: `CASCADE`
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`todos`);
    const table = await queryRunner.getTable(`users`);
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") !== -1);
    await queryRunner.dropForeignKey(`todos`, foreignKey);
  }

}
