import Game from '../types/game'

/**
 *Aquí se organizan todos los métodos referidos a los juegos y lo que devuelven (Promise)
 */

export default interface GameMethods {

  addGame: (id: Number, name: String, genre: String) => Promise<Boolean>
  getGame: (id: Number) => Promise<Game>
  getGames: () => Promise<Game[]>
  delGame: (id: Number) => Promise<Boolean>
  updateGame: (id: Number, newName: String, newGenre: String) => Promise<Boolean>
  getDTO: (newGenre: String) => Promise<Game[]>

}
