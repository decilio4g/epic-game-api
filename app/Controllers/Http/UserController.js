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

  registerNewUser({ request, response }) {
    const { name, lastname, displayName, age, phone, email, password, confirmPassword } = request.body
    User.registerUser({ name, lastname, displayName, age, phone, email, password, confirmPassword })


    return response.json({ status: 201, message: 'Usuário cadastrado com sucesso!' })
  }

  getAllUsers({ request, response }) {
    const listUser = User.getUsers();

    if (listUser.length > 0) {
      return response.json({ status: 200, message: 'Retornado com sucesso', data: listUser })
    }


    return response.json({ status: 200, message: 'Não existe nenhum usuário', data: 'Users' })

  }

  deleteUser({ request, response }) {
    const { name } = request.params;

    const listUser = User.getUsers();
    const userFiltered = listUser.filter(user => user.name === name)
    if (userFiltered.length > 0) {
      User.deleteUser(name)
      return response.json({ status: 200, message: 'Usuário deletado com sucesso', data: userFiltered })
    }
    return response.json({ status: 400, message: 'Usuário não encontrado', data: null })
  }

  updateUser({ request, response }) {
    const { nameUser } = request.params;
    const { name, lastName } = request.body;

    const listUser = User.getUsers();
    const userFiltered = listUser.filter(user => user.name == nameUser)
    const data = { name, lastName }

    if (userFiltered.length > 0) {
      const userUpdated = User.updateUser(nameUser, data)
      return response.json({ status: 200, message: 'Usuário alterado com sucesso', data: userUpdated })

    }
    return response.json({
      status: 400, message: 'Usuário não encontrado', data: null
    })
  }
}

module.exports = UserController
