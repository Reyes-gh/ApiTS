'use strict'
const __createBinding = (this && this.__createBinding) || (Object.create
  ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    let desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function () { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
  }
  : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
  })
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create
  ? function (o, v) {
    Object.defineProperty(o, 'default', { enumerable: true, value: v })
  }
  : function (o, v) {
    o.default = v
  })
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod
  const result = {}
  if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
  __setModuleDefault(result, mod)
  return result
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getDTOWeb = exports.updateGameWeb = exports.delGameWeb = exports.getGamesWeb = exports.getGameWeb = exports.addGameWeb = void 0
const actions = __importStar(require('../game/compressor/compressor'))
/**
 * addGameWeb se encarga de recoger en el parámetro req las características del juego y usarlo en el método addGame, esperando o un OK (200)
 * o un error (404)
 * @param req
 * @param res
 * @returns null
 */
const addGameWeb = (req, res) => {
  actions.addGame(req.body.id, req.body.name, req.body.genre).then(() => res.send(200).send()).catch(() => res.status(404).send)
  return null
}
exports.addGameWeb = addGameWeb
/**
 * getGameWeb recoge la id que pasamos por parámetro en la url utilizando req, y utiliza el método getGame para pasar esa misma
 * id por parámetro, devolviendo OK (200) si lo consigue o devolviendo un error (404) en caso contrario.
 * @param req
 * @param res
 * @returns null
 */
const getGameWeb = (req, res) => {
  actions.getGame(+req.params.id).then((resp) => res.json(resp)).catch(() => res.status(404).send())
  return null
}
exports.getGameWeb = getGameWeb
/**
 * Al no necesitar el Request, ponemos la variable req con un "_". getGamesWeb se encarga de llamar al método getGames y responder
 * acorde si recibe lo solicitado (200 si todo bien y 404 si ocurre un error)
 * @param _req
 * @param res
 * @returns null
 */
const getGamesWeb = (_req, res) => {
  actions.getGames().then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
exports.getGamesWeb = getGamesWeb
/**
 * delGameWeb recoge al igual que getGameWeb la id pasada por la url y la utiliza como parámetro en delGame para borrar el juego.
 * @param req
 * @param res
 * @returns null
 */
const delGameWeb = (req, res) => {
  actions.delGame(+req.params.id).then(() => res.status(200).send()).catch(() => res.status(404).send())
  return null
}
exports.delGameWeb = delGameWeb
/**
 * updateGameWeb se encarga de recoger las propiedades del JSON que pasemos en el body de la request (utilizará la id para localizar
 * el juego que se desea editar y las otras características para sustituirlas)
 * @param req
 * @param res
 * @returns null
 */
const updateGameWeb = (req, res) => {
  actions.updateGame(req.body.id, req.body.name, req.body.genre).then(() => res.status(200).send()).catch(() => res.status(404).send)
  return null
}
exports.updateGameWeb = updateGameWeb
/**
 * getDTOWeb recoge por parámetro el género del juego con el que queramos comparar la tabla géneros (dicho parámetro pasado por url)
 * @param req
 * @param res
 * @returns null
 */
const getDTOWeb = (req, res) => {
  actions.getDTO(req.params.dto).then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
exports.getDTOWeb = getDTOWeb
