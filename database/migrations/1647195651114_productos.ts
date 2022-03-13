import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Productos extends BaseSchema {
  protected tableName = 'productos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_producto')
      table.string('nom_producto')
      table.double('precio')
      table.integer('cantidad')
      table.integer('categoria').unsigned().references('id_categoria').inTable('categorias')
      table.integer('guiso').unsigned().references('id_guiso').inTable('guisos')
      table.integer('disponibilidad').unsigned().references('id').inTable('disponibles')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { precision: 6 }).nullable()
      table.timestamp('updated_at', { precision: 6 }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
