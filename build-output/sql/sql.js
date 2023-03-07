/* eslint-disable no-void */
'use strict'
/* eslint-disable @typescript-eslint/restrict-template-expressions */
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
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'usuario',
  database: 'apits',
  port: 3306
})
connection.connect()
class Sql {
  addGame (id, name, genre) {
    return __awaiter(this, void 0, void 0, function * () {
      return yield new Promise((resolve, reject) => {
        connection.query('INSERT INTO games VALUES (?,?,?)', [id, name, genre], function (error) {
          if (error != null) {
            reject(error)
            console.log('Ha ocurrido un error, revisa la inserción')
          } else {
            resolve(true)
          }
        })
      })
    })
  }

  getGame (id) {
    return __awaiter(this, void 0, void 0, function * () {
      return yield new Promise((resolve, reject) => {
        connection.query('SELECT * FROM games WHERE id=(?)', [id], function (error, results) {
          if (error != null) {
            reject(error)
            console.log('Ha ocurrido un error, no se ha podido borrar el objeto')
          }
          resolve({
            id: results[0].id,
            name: results[0].name,
            genre: results[0].genre
          })
        })
      })
    })
  }

  delGame (id) {
    return __awaiter(this, void 0, void 0, function * () {
      return yield new Promise((resolve, reject) => {
        connection.query('DELETE FROM games WHERE id=(?)', [id], function (error) {
          if (error != null) {
            reject(error)
            console.log('No se ha podido borrar el elemento')
          }
          resolve(true)
        })
      })
    })
  }

  getGames () {
    return __awaiter(this, void 0, void 0, function * () {
      return yield new Promise((resolve, reject) => {
        connection.query('SELECT * FROM games', function (error, results) {
          if (error != null) {
            reject(error)
            console.log('No se han podido cargar los juegos')
          }
          const games = []
          results.forEach((gm) => {
            games.push({
              id: gm.id,
              name: gm.name,
              genre: gm.genre
            })
          })
          resolve(games)
        })
      })
    })
  }

  updateGame (id, newName, newGenre) {
    return __awaiter(this, void 0, void 0, function * () {
      return yield new Promise((resolve, reject) => {
        console.log('hola, he llegado al SQL!')
        console.log('con estos valores:')
        console.log(newName, id, newGenre)
        connection.query('UPDATE games SET name=(?), genre=(?) WHERE id=(?)', [newName, newGenre, id], function (error) {
          if (error != null) {
            reject(error)
            console.log('Ha fallado el update... qué ha podido pasar?')
          } else {
            resolve(true)
          }
        })
      })
    })
  }
}
exports.default = Sql
