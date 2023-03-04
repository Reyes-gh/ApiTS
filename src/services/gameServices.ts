import { GameEntry, GameNoTipo, NewGameEntry } from '../types'
import gameData from './games.json'

// Constante games es un array de tipo <GameEntry>, se debe especificar en el constructor también.
const games: GameEntry[] = gameData as GameEntry[]

export const getGames = (): GameEntry[] => games
export const getGamesNoId = (): NewGameEntry[] => games

export const findId = (id: number): GameEntry | undefined => {
  const entry = games.find(d => d.id === id)

  if (entry != null) {
    return entry
  }
  return undefined
}

export const getGamesNoTipo = (): GameNoTipo[] => {
  return games.map(({ id, nombre, img }) => {
    return {
      id,
      nombre,
      img
    }
  })
}

export const addGame = (newGameEntry: NewGameEntry): GameEntry => {
  const newGame = {
    // id: games.length + 1,
    id: Math.max(...games.map(d => d.id)) + 1,
    ...newGameEntry
  }
  games.push(newGame)
  return newGame
}
