
const Route = use('Route')


Route.post('login', 'UserController.login')

Route.post('register', 'UserController.registerNewUser')

Route.get('listGames', 'GamesController.getGames')
Route.get('getUsers', 'UserController.getAllUsers')

Route.delete('delete/:name', 'UserController.deleteUser')
Route.put('update/:nameUser', 'UserController.updateUser')

Route.post('registerNewGame', 'GameController.registerNewGame')
Route.put('updateGame/:authorGame', 'GameController.updateGame')
Route.get('getGames', 'GameController.getAllGames')
Route.delete('deleteGame/:author', 'GameController.deleteGame')
