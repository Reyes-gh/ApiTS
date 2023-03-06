
import methods from '../methods/gameMethods'

const updateGameC = (methods: methods) => async (id: Number, newName: String, newGenre: String): Promise<Boolean> => {
  return await methods.updateGame(id, newName, newGenre)
}

export default updateGameC
