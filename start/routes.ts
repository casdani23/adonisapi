/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
//Usuarios
Route.post('register','UsuariosController.register')
Route.post('login','UsuariosController.login')
Route.post('dashboard','UsuariosController.traerID')

//Productos
Route.get('consulta1','ProductosController.traerProductos')
Route.post('crear','ProductosController.crearProducto')

//Categorias
Route.get('consultacategorias','CategoriasController.mostrarCategorias')
Route.post('crearcategoria','CategoriasController.crearCategoria')

//Personas
Route.post('crearpersona','PersonasController.crearPersona')

