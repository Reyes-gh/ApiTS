
import methods from '../methods/gameMethods'

const delGameC = (methods: methods) => async (id: Number): Promise<Boolean> => {
  return await methods.delGame(id)
}

export default delGameC
