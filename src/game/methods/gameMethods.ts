import Game from '../types/game'

export default interface GameMethods {

  addGame: (id: Number, name: String, genre: String) => Promise<Boolean>
  getGame: (id: Number) => Promise<Game>
  getGames: () => Promise<Game[]>
  delGame: (id: Number) => Promise<Boolean>
  updateGame: (id: Number, newName: String, newGenre: String) => Promise<Boolean>

}
