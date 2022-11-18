
const Route = use('Route')


Route.post('login', 'UserController.login')

Route.post('register', 'UserController.register')

Route.get('listGames', 'GamesController.getGames')
Route.get('getUsers', 'UserController.getUsers')
