import methods from '../methods/gameMethods'
import Game from '../types/game'

/**
 * Importamos el objeto juego y los métodos para crear el nuevo método que pasaremos a la clase compressor.ts
 * @param methods
 * @returns Game
 */

const getGameC = (methods: methods) => async (id: Number): Promise<Game> => {
  return await methods.getGame(id)
}

export default getGameC
