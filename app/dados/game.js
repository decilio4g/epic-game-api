class GamesController {
  constructor() {
    this.games = [
      {
        id: '1',
        name: 'Gabriel'
      },

    ];

    this.registerGame = (games) => {
      this.games.push(games)
    }

    this.getGames = (games) => {
      return this.games
    }


    this.getUniqueGame = (gameId) => {
      return this.games.filter(game => game.id === gameId)
    }

    this.updateGame = (gameId, games) => {
      this.games = this.games.map(game => {
        if (game.id === gameId) {
          return {
            ...item,
            ...games,

          }

        }
        return item
      })

    }

    this.deleteGame = (gameId) => {
      this.games = this.games.filter(game => game.id !== gameId)
    }


  }

}

module.exports = GamesController
