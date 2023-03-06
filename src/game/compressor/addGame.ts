
import methods from '../methods/gameMethods'

const addGameC = (methods: methods) => async (id: Number, name: String, genre: String): Promise<Boolean> => {
  return await methods.addGame(id, name, genre)
}

export default addGameC
