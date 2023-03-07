/* eslint-disable @typescript-eslint/restrict-template-expressions */
/**
 * Clase SQL donde conectaremos con la base de datos en la cual realizaremos las querys.
 *
 * @author AlexRG
 */
import mysql=require('mysql')
import GameMethods from '../game/methods/gameMethods'
import Game from '../game/types/game'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'usuario',
  database: 'apits',
  port: 3306
})

connection.connect()

// la clase Sql exporta los siguientes métodos:
export default class Sql implements GameMethods {
  /**
   * El método addGame se encarga de añadir un juego y devuelve true si lo ha conseguido. En caso contrario devuelve el error recibido
   * @param id
   * @param name
   * @param genre
   * @returns Boolean
   */
  async addGame (id: Number, name: String, genre: String): Promise<Boolean> {
    return await new Promise<Boolean>((resolve, reject) => {
      connection.query('INSERT INTO games VALUES (?,?,?)', [id, name, genre], function (error) {
        if (error != null) {
          reject(error)
          console.log('Ha ocurrido un error, revisa la inserción')
        } else {
          resolve(true)
        }
      })
    })
  }

  /**
   *  El método getGame se encarga de buscar un juego por la ID introducida por el usuario, al no dar error devuelve
   *  un nuevo objeto de tipo Game con las características de lo conseguido en SQL
   * @param id
   * @returns Game
   */
  async getGame (id: Number): Promise<Game> {
    return await new Promise<Game>((resolve, reject) => {
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
  }

  /**
   * Este método se encarga de borrar un juego con una ID concreta introducida por el usuario
   * @param id
   * @returns Boolean
   */
  async delGame (id: Number): Promise<Boolean> {
    return await new Promise<Boolean>((resolve, reject) => {
      connection.query('DELETE FROM games WHERE games.id=(?)', [id], function (error) {
        if (error != null) {
          reject(error)
          console.log('No se ha podido borrar el elemento')
        }
        resolve(true)
      })
    })
  }

  /**
   * El método getGames se encarga de recorrer todos y cada uno de los resultados de la base de datos y añadirlos como
   * Game a un array de juegos (Game[]) así podemos mostrarlo independientemente de si son uno o varios.
   * @returns Game[]
   */
  async getGames (): Promise<Game[]> {
    return await new Promise<Game[]>((resolve, reject) => {
      connection.query('SELECT * FROM games', function (error, results) {
        if (error != null) {
          reject(error)
          console.log('No se han podido cargar los juegos')
        }
        const games: Game[] = []
        results.forEach((gm: any) => {
          games.push({
            id: gm.id,
            name: gm.name,
            genre: gm.genre
          })
        })
        resolve(games)
      })
    })
  }

  /**
   * Este método se encarga de cambiar el nombre y el género de un juego ya introducido en la tabla, y para acceder a ese
   * juego pasamos por parámetro la ID. Devuelve true si no hay errores
   * @param id
   * @param newName
   * @param newGenre
   * @returns Boolean
   */
  async updateGame (id: Number, newName: String, newGenre: String): Promise<Boolean> {
    return await new Promise<Boolean>((resolve, reject) => {
      connection.query('UPDATE games SET name=(?), genre=(?) WHERE id=(?)', [newName, newGenre, id], function (error) {
        if (error != null) {
          reject(error)
          console.log('Ha fallado el update, comprueba el JSON')
        } else {
          resolve(true)
        }
      })
    })
  }

  /**
   * Devuelve un array de juegos que cumplan con las características pedidas, ya sea recoger todos los juegos que compartan género con la tabla
   * géneros.
   * @param genre
   * @returns Game[]
   */
  async getDTO (genre: String): Promise<Game[]> {
    return await new Promise<Game[]>((resolve, reject) => {
      connection.query('SELECT * FROM games g INNER JOIN genres ge ON g.genre=ge.genre WHERE g.genre=(?)', [genre], function (error, results) {
        if (error != null) {
          reject(error)
          console.log('Algo ha fallado! No se han podido extraer los juegos de dicha categoría')
        }
        const games: Game[] = []
        results.forEach((game: any) => {
          games.push({
            id: game.id,
            name: game.name,
            genre: game.genre
          })
        })
        console.log(games)
        resolve(games)
      })
    })
  }
}
