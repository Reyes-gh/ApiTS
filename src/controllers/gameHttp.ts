import * as actions from '../game/compressor/compressor'
import { Request, Response } from 'express'

export const addGameWeb = (req: Request, res: Response): null => {
  actions.addGame(req.body.id, req.body.name, req.body.genre).then(() => res.send(200).send()).catch(() => res.status(404).send)
  return null
}

export const getGameWeb = (req: Request, res: Response): null => {
  actions.getGame(+req.params.id).then((resp) => res.json(resp)).catch(() => res.status(404).send())
  return null
}

export const getGamesWeb = (_req: Request, res: Response): null => {
  actions.getGames().then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}

export const delGameWeb = (req: Request, res: Response): null => {
  actions.delGame(req.body.id).then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}

export const updateGameWeb = (req: Request, res: Response): null => {
  actions.updateGame(req.body.id, req.body.name, req.body.genre).then(() => res.status(200).send()).catch(() => res.status(404).send)
  return null
}

export const getDTOWeb = (req: Request, res: Response): null => {
  actions.getDTO(req.params.dto).then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
