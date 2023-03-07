
import methods from '../methods/gameMethods'

/**
 * Creamos un método al que le pasamos por parámetro una ID, que servirá para borrar el juego elegido.
 * @param methods
 * @returns Boolean
 */

const delGameC = (methods: methods) => async (id: Number): Promise<Boolean> => {
  return await methods.delGame(id)
}

export default delGameC
