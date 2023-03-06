import methods from '../methods/gameMethods'
import Game from '../types/game'

const getGamesC = (methods: methods) => async (): Promise<Game[]> => {
  return await methods.getGames()
}

export default getGamesC
