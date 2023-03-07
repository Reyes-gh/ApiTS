
import methods from '../methods/gameMethods'

/**
 * El método addGameC recibirá por parámetro una id, nombre y género para así poder crear un nuevo objeto Game
 * @param methods
 * @returns Boolean
 */
const addGameC = (methods: methods) => async (id: Number, name: String, genre: String): Promise<Boolean> => {
  return await methods.addGame(id, name, genre)
}

export default addGameC
