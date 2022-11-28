class GamesController {
  constructor() {
    this.games = [
    ];

    this.mediumGames = [
    ]

    this.filterGame = ({ name, category }) => {
      const filteredGames = this.games.filter(game => game.name === name || game.category === category)

      if (filteredGames.length > 0) {
        return filteredGames
      }

      return []
    }

    this.registerGame = (games) => {
      this.games.push(games)
    }

    this.registerGameMediumGames = (games) => {
      this.mediumGames.push(games)
    }

    this.getMediumGames = () => {
      return this.mediumGames
    }

    this.getGames = () => {
      return this.games
    }


    this.getUniqueGame = (gameId) => {
      return this.games.filter(game => game.id === gameId)
    }

    this.updateGame = (authorGame, games) => {
      const game = {}
      this.games = this.games.map(game => {
        if (game.author === authorGame) {
          game = { ...game, ...games }
          return {
            ...game,
            ...games,

          }

        }

        return {
          ...game
        }
      })

      return game

    }

    this.deleteGame = (author) => {
      const findGame = this.games.filter(game => game.author === author)

      if (findGame.length) {
        this.games = this.games.filter(game => game.author !== author)
        return true
      }

      return false
    }


  }

}

module.exports = GamesController
