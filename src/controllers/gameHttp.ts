import * as actions from '../game/compressor/compressor'
import { Request, Response } from 'express'

/**
 * addGameWeb se encarga de recoger en el parámetro req las características del juego y usarlo en el método addGame, esperando o un OK (200)
 * o un error (404)
 * @param req
 * @param res
 * @returns null
 */

export const addGameWeb = (req: Request, res: Response): null => {
  actions.addGame(req.body.id, req.body.name, req.body.genre).then(() => res.send(200).send()).catch(() => res.status(404).send)
  return null
}

/**
 * getGameWeb recoge la id que pasamos por parámetro en la url utilizando req, y utiliza el método getGame para pasar esa misma
 * id por parámetro, devolviendo OK (200) si lo consigue o devolviendo un error (404) en caso contrario.
 * @param req
 * @param res
 * @returns null
 */

export const getGameWeb = (req: Request, res: Response): null => {
  actions.getGame(+req.params.id).then((resp) => res.json(resp)).catch(() => res.status(404).send())
  return null
}

/**
 * Al no necesitar el Request, ponemos la variable req con un "_". getGamesWeb se encarga de llamar al método getGames y responder
 * acorde si recibe lo solicitado (200 si todo bien y 404 si ocurre un error)
 * @param _req
 * @param res
 * @returns null
 */

export const getGamesWeb = (_req: Request, res: Response): null => {
  actions.getGames().then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}

/**
 * delGameWeb recoge al igual que getGameWeb la id pasada por la url y la utiliza como parámetro en delGame para borrar el juego.
 * @param req
 * @param res
 * @returns null
 */

export const delGameWeb = (req: Request, res: Response): null => {
  actions.delGame(+req.params.id).then(() => res.status(200).send()).catch(() => res.status(404).send())
  return null
}

/**
 * updateGameWeb se encarga de recoger las propiedades del JSON que pasemos en el body de la request (utilizará la id para localizar
 * el juego que se desea editar y las otras características para sustituirlas)
 * @param req
 * @param res
 * @returns null
 */
export const updateGameWeb = (req: Request, res: Response): null => {
  actions.updateGame(req.body.id, req.body.name, req.body.genre).then(() => res.status(200).send()).catch(() => res.status(404).send)
  return null
}

/**
 * getDTOWeb recoge por parámetro el género del juego con el que queramos comparar la tabla géneros (dicho parámetro pasado por url)
 * @param req
 * @param res
 * @returns null
 */
export const getDTOWeb = (req: Request, res: Response): null => {
  actions.getDTO(req.params.dto).then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
