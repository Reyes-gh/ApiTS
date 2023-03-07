import methods from '../methods/gameMethods'
import Game from '../types/game'

/**
 * Importamos el objeto juego para trabajar con él, así como el método de la clase gameMethods que utilizaremos.
 * @param methods
 * @returns Game[]
 */

const getGamesC = (methods: methods) => async (): Promise<Game[]> => {
  return await methods.getGames()
}

export default getGamesC
