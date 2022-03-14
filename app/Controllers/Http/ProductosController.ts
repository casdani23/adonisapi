import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Producto from "App/Models/Producto"

export default class ProductosController {
  public async traerProductos()
  {
    const producto= await Database.query().from('productos').select('*').orderBy('id_producto')
    return producto

  }
  public async crearProducto({request,response}){
    const nombre=request.input(['nom_producto'])
    const precio=request.input(['precio'])
    const cantidad=request.input(['cantidad'])
    const categoria=request.input(['categoria'])


    const producto=new Producto()

    producto.nom_producto=nombre
    producto.precio=precio
    producto.cantidad=cantidad
    producto.categoria=categoria

    await producto.save()
    response.json({producto})


  }
  public async modificarProducto({request,response,params})
   {
     const precio=request.input(['precio'])

     const producto=await Producto.findOrFail(params.id)
     producto.precio=precio

     await producto.save()
     response.json(producto)
   }
   public async eliminarProducto({params,response}:HttpContextContract)
   {
     const producto= await Producto.findOrFail(params.id)
     await producto.delete()

    return response.json(producto)
   }
}
