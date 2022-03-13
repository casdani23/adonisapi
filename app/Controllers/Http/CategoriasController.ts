// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Categoria from "App/Models/Categoria"

export default class CategoriasController {
  public async mostrarCategorias()
  {
    const categoria= await Database.query().from('categorias').select('*').orderBy('id')
    return categoria
  }

  public async crearCategoria({request,response})
  {
    const nombre=request.input(['nom_categoria'])

    const categoria=new Categoria()
    categoria.nom_categoria=nombre

    await categoria.save()
    response.json({categoria})

  }
}
