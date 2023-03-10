'use strict'
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * El método addGameC recibirá por parámetro una id, nombre y género para así poder crear un nuevo objeto Game
 * @param methods
 * @returns Boolean
 */
const addGameC = (methods) => (id, name, genre) => __awaiter(void 0, void 0, void 0, function * () {
  return yield methods.addGame(id, name, genre)
})
exports.default = addGameC
