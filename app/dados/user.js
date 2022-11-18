class UserController {
  constructor() {
    this.users = [
      {
        name: 'Gabriel'
      }
    ];

    this.registerUser = (user) => {
      this.users.push(user)
    }

    this.getUsers = (user) => {
      return this.users
    }


  }

}

module.exports = UserController
