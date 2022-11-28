class UserController {
  constructor() {
    this.users = [

    ];

    this.registerUser = (user) => {
      this.users.push(user)
    }

    this.getUsers = (user) => {
      return this.users
    }

    this.deleteUser = (userId) => {
      this.users = this.users.filter(user => user.name !== userId)

    }

    this.updateUser = (userId, userUpdate) => {
      const user = {}
      this.users = this.users.map(user => {
        if (user.name === userId) {
          user = { ...user, ...userUpdate }
          return {
            ...user,
            ...userUpdate
          }
        }
        return {
          ...user
        }
      })
      return user
    }

  }

}

module.exports = UserController
