
import methods from '../methods/gameMethods'

/**
 *  Importamos los métodos de la clase gameMethods y creamos el método que actualizará el juego, el cual utilizaremos en la clase
 * compressor para pasarle por parámetro el objeto Sql
 * @param methods
 * @returns Boolean
 */

const updateGameC = (methods: methods) => async (id: Number, newName: String, newGenre: String): Promise<Boolean> => {
  return await methods.updateGame(id, newName, newGenre)
}

export default updateGameC
