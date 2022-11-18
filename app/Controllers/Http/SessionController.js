'use strict'
const User = require('../../call')

class SessionController {
  login({ request, response }) {

    console.log(User())
    // const user = {
    //   email: 'vitorhonorio@gmail.com',
    //   password: '123456'
    // }

    // const { email, password } = request.body

    // if (email === user.email && password === user.password) {
    //   return response.json({ status: 200, message: 'Usuário logado', token: 'rash' })
    // }

    return response.json({ status: 401, message: 'Você não tem permissão de login' })

  }
}

module.exports = SessionController
