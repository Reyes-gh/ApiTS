import mysql=require('mysql')
import * as gameServices from './src/services/gameServices'
import { GameEntry, NewGameEntry } from './src/types'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'apits'
})

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
connection.connect

export const addGameToDB = (newGameEntry: NewGameEntry | undefined): void => {
  const newGame = {
    id: Math.max(gameServices.getGames.length + 1),
    ...newGameEntry
  }

  if (newGameEntry !== undefined) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    connection.query('INSERT INTO games VALUES (' + newGame.id + ', "' + newGame.nombre + '", "' + newGame.tipo + '", "' + newGame.img + '")')
  } else {
    console.log('No puedes introducir eso en la DB, no es un juego!')
  }
}

export const delGameFromDB = (gameEntry: GameEntry | undefined): void => {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  if (gameEntry !== undefined) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    connection.query('DELETE FROM games WHERE id = ' + gameEntry.id + '')
  } else {
    console.log('No se ha borrado el objeto, no has introducido uno válido!')
  }
}

export const updateDB = (): void => {
  connection.query('TRUNCATE TABLE games')
  for (let i = 1; i < gameServices.getGames().length + 1; i++) {
    console.log(gameServices.getGames().length)
    addGameToDB(gameServices.findId(i))
  }
}
