'use strict'

class GameController {
  constructor() {
    this.listOfGames = [];
  }

  getGames({ request, response }) {


    return response.json({ status: 200, message: listOfGames })

  }

  setGames({ request, response }) {


    return response.json({ status: 200, message: listOfGames })

  }

}

module.exports = GameController
