/* eslint-disable no-void */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateGame = exports.delGame = exports.getGames = exports.getGame = exports.addGame = void 0
const addGame_1 = __importDefault(require('./addGame'))
const getGame_1 = __importDefault(require('./getGame'))
const getGames_1 = __importDefault(require('./getGames'))
const delGame_1 = __importDefault(require('./delGame'))
const updateGame_1 = __importDefault(require('./updateGame'))
const sql_1 = __importDefault(require('../../sql/sql'))
const gameMethods = new sql_1.default()
exports.addGame = (0, addGame_1.default)(gameMethods)
exports.getGame = (0, getGame_1.default)(gameMethods)
exports.getGames = (0, getGames_1.default)(gameMethods)
exports.delGame = (0, delGame_1.default)(gameMethods)
exports.updateGame = (0, updateGame_1.default)(gameMethods)
