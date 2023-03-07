/* eslint-disable camelcase */
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
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const web = __importStar(require('../controllers/gameHttp'))
const route = express_1.default.Router()
// Apartado 1 (Devolverá todos los juegos)
route.get('/games', web.getGamesWeb)
// Apartado 2 (Devolverá un juego por su ID)
route.get('/games/:id', web.getGameWeb)
// Apartado 3 (Devolverá juegos mediante DTO (los que compartan mismo género por ejemplo))
route.get('/games/dto')
// Apartado 4 (Añadirá un nuevo juego pasándole un JSON en el body)
route.post('/games', web.addGameWeb)
// Apartado 5 (Actualizará un juego)
route.put('/games', web.updateGameWeb)
// Apartado 6 (Borrará un juego por su id)
route.delete('/games/:id', web.delGameWeb)
exports.default = route
