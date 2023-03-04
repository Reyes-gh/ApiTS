import express from 'express'
import * as gameServices from '../services/gameServices'
import toNewGameEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(gameServices.getGamesNoTipo())
})

router.get('/:id', (req, res) => {
  const gameWithId = gameServices.findId(+req.params.id)

  return (gameWithId != null)
    ? res.send(gameWithId)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newGameEntry = toNewGameEntry(req.body)

    const addedGameEntry = gameServices.addGame(newGameEntry)
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
