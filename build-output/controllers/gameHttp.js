/* eslint-disable no-void */
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
exports.updateGameWeb = exports.delGameWeb = exports.getGamesWeb = exports.getGameWeb = exports.addGameWeb = void 0
const actions = __importStar(require('../game/compressor/compressor'))
const addGameWeb = (req, res) => {
  actions.addGame(req.body.id, req.body.name, req.body.genre).then(() => res.send(200).send()).catch(() => res.status(404).send)
  return null
}
exports.addGameWeb = addGameWeb
const getGameWeb = (req, res) => {
  actions.getGame(+req.params.id).then((resp) => res.json(resp)).catch(() => res.status(404).send())
  return null
}
exports.getGameWeb = getGameWeb
const getGamesWeb = (_req, res) => {
  actions.getGames().then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
exports.getGamesWeb = getGamesWeb
const delGameWeb = (req, res) => {
  actions.delGame(req.body.id).then((resp) => res.json(resp)).catch(() => res.status(404).send)
  return null
}
exports.delGameWeb = delGameWeb
const updateGameWeb = (req, res) => {
  actions.updateGame(req.body.id, req.body.name, req.body.genre).then(() => res.status(200).send()).catch(() => res.status(404).send)
  return null
}
exports.updateGameWeb = updateGameWeb
