
import methods from '../methods/gameMethods'
import Game from '../types/game'

/**
 * Importamos el objeto juego y los métodos para utilizar el que queremos, en este caso el DTO, al que le pasamos por parámetro
 * el género que la clase Sql usará con el INNER JOIN
 * @param methods
 * @returns Game[]
 */
const getDTOC = (methods: methods) => async (genre: String): Promise<Game[]> => {
  return await methods.getDTO(genre)
}

export default getDTOC
