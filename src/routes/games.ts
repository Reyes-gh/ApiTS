import express from 'express'
import gameData from '../services/games.json'
import * as gameServices from '../services/gameServices'
import toNewGameEntry from '../utils'
import * as sql from '../../sql'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(gameServices.getGames())
})

router.get('/:id', (req, res) => {
  const gameWithId = gameServices.findId(+req.params.id)

  return (gameWithId != null)
    ? res.send(gameWithId)
    : res.sendStatus(404)
})

router.delete('/:id', (req, res) => {
  const gameWithId = gameServices.findId(+req.params.id)

  sql.delGameFromDB(gameWithId)

  gameData.splice(gameData.findIndex(d => d.id === +req.params.id), 1)

  res.send('Eliminado correctamente')
})

router.post('/', (req, res) => {
  try {
    const newGameEntry = toNewGameEntry(req.body)
    const addedGameEntry = gameServices.addGame(newGameEntry)
    sql.addGameToDB(newGameEntry)
    res.json(addedGameEntry)
    res.send('Saving videogame...')
  } catch (e) {
    res.status(400)
    if (e instanceof Error) {
      res.send(e.message)
    }
  }
})

export default router
