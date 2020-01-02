/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/user', 'UserController.store');
Route.post('/sessions', 'SessionController.store');
Route.post('/tools', 'ToolController.store');
Route.delete('/tools/:id', 'ToolController.destroy');
