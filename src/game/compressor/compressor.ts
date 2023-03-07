import addGameC from './addGame'
import getGameC from './getGame'
import getGamesC from './getGames'
import delGameC from './delGame'
import updateGameC from './updateGame'
import getDTOC from './getDTO'
import Sql from '../../sql/sql'

/**
 * Esta estructura ayuda a la organización de los métodos, pues separándolos cada uno en un archivo .typescript distinto y reimportándolos
 * ayuda a la legibilidad del proyecto y a separarlos de clases, además de optimizar la organización.
 */

/**
 * Aquí instanciamos la clase Sql y hacemos que todos los métodos exportados la tengan como parámetro principal.
 */
const gameMethods = new Sql()
export const addGame = addGameC(gameMethods)
export const getGame = getGameC(gameMethods)
export const getGames = getGamesC(gameMethods)
export const delGame = delGameC(gameMethods)
export const updateGame = updateGameC(gameMethods)
export const getDTO = getDTOC(gameMethods)
