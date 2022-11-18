'use strict'
const UserDados = require('../../dados/user')
const User = new UserDados()

class UserController {

  login({ request, response }) {

    const userList = User.getUsers();
    const { email } = request.body

    const userFiltered = userList.filter(user => user.email === email);

    if (userFiltered.length > 0) {
      return response.json({ status: 201, message: 'Parabéns pelo login', data: userFiltered[0] })
    }

    return response.json({ status: 401, message: 'Você não tem permissão de login' })

  }

  register({ request, response }) {
    // const { name, lastname, displayName, age, phone, email, password, confirmPassword } = request.body
    const { name } = request.body
    User.registerUser({ name })


    return response.json({ status: 201, message: 'Usuário cadastrado com sucesso!' })
  }

  getUsers({ request, response }) {
    const listUser = User.getUsers();

    if (listUser.length > 0) {
      return response.json({ status: 200, message: 'Retornado com sucesso', data: listUser })
    }


    return response.json({ status: 200, message: 'Não existe nenhum usuário', data: 'Users' })

  }
}

module.exports = UserController
