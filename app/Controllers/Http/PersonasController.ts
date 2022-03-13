// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Persona from "App/Models/Persona"

export default class PersonasController {
  public async crearPersona({request,response}){
    const nombre=request.input(['nombre'])
    const edad=request.input(['edad'])
    const tel=request.input(['telefono'])
    const correo=request.input(['correo'])

    const persona=new Persona()

    persona.nombre=nombre
    persona.edad=edad
    persona.telefono=tel
    persona.correo=correo

    persona.save()
    return response.json({persona})

  }
}
