'use strict'

const GameDados = require('../../dados/game')
const Game = new GameDados()

class GameController {
  constructor() {
    this.listOfGames = [];
  }

  getFilterGames({ request, response }) {
    const { name, category } = request.params
    return response.json({ status: 200, message: listOfGames })
  }

  getAllGames({ request, response }) {
    const allGames = Game.getGames()

    if (allGames.length > 0) {
      return response.json({ status: 200, message: 'Jogos retornados com sucesso!', data: allGames });
    }

    return response.json({ status: 400, message: 'Não há jogos para serem listados', data: null });
  }

  getMediumGames({ request, response }) {
    const allGames = Game.getMediumGames()

    if (allGames.length > 0) {
      return response.json({ status: 200, message: 'Jogos retornados com sucesso!', data: allGames });
    }

    return response.json({ status: 400, message: 'Não há jogos para serem listados', data: null });
  }

  registerNewMediumGame({ request, response }) {
    const { description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu } = request.body

    Game.registerGameMediumGames({ description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu })

    return response.json({ status: 200, message: 'Jogo criado com sucesso' })

  }

  registerNewGame({ request, response }) {
    const { description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu } = request.body

    Game.registerGame({ description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu })

    return response.json({ status: 200, message: 'Jogo criado com sucesso' })

  }

  updateGame({ request, response }) {
    const { authorGame } = request.params
    const { description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu } = request.body;

    const games = {
      description, picture, size, plataform, author, date, location, preSale, gameFeatures, gender, details, value, descont, minSystem, minProcessor, minMemory, minStorage, minDirectX, minGpu, maxSystem, maxProcessor, maxMemory, maxStorage, maxDirectX, maxGpu
    }

    const listGames = Game.getGames()
    const userFiltered = listGames.filter(game => game.author == authorGame)

    if (userFiltered.length > 0) {
      const userUpdated = Game.updateGame(authorGame, games)
      return response.json({ status: 200, message: 'Jogo alterado com sucesso', data: userUpdated })
    }

    return response.json({ status: 400, message: 'Jogo não encontrado' })
  }

  deleteGame({ request, response }) {
    const { author } = request.params
    const listGame = Game.getGames();
    const gameFiltered = listGame.filter(game => game.author === author)
    if (gameFiltered.length > 0) {
      Game.deleteGame(author)
      return response.json({ status: 200, message: 'Usuário deletado com sucesso', data: gameFiltered })
    }
    return response.json({ status: 400, message: 'Usuário não encontrado', data: null })
  }

}

module.exports = GameController
