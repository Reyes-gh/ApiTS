import addGameC from './addGame'
import getGameC from './getGame'
import getGamesC from './getGames'
import delGameC from './delGame'
import updateGameC from './updateGame'
import Sql from '../../sql/sql'

const gameMethods = new Sql()
export const addGame = addGameC(gameMethods)
export const getGame = getGameC(gameMethods)
export const getGames = getGamesC(gameMethods)
export const delGame = delGameC(gameMethods)
export const updateGame = updateGameC(gameMethods)
