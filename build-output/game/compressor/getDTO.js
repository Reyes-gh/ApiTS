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
 * Importamos el objeto juego y los métodos para utilizar el que queremos, en este caso el DTO, al que le pasamos por parámetro
 * el género que la clase Sql usará con el INNER JOIN
 * @param methods
 * @returns Game[]
 */
const getDTOC = (methods) => (genre) => __awaiter(void 0, void 0, void 0, function * () {
  return yield methods.getDTO(genre)
})
exports.default = getDTOC
