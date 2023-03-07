
import methods from '../methods/gameMethods'
import Game from '../types/game'

const getDTOC = (methods: methods) => async (genre: String): Promise<Game[]> => {
  return await methods.getDTO(genre)
}

export default getDTOC
