import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Persona extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre

  @column()
  public edad

  @column()
  public telefono

  @column()
  public correo

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
