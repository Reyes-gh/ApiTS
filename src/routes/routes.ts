/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import express from 'express'
import * as web from '../controllers/gameHttp'
const route = express.Router()

// Apartado 1 (Devolverá todos los juegos)
route.get('/games', web.getGamesWeb)

// Apartado 2 (Devolverá un juego por su ID)
route.get('/games/:id', web.getGameWeb)

// Apartado 3 (Devolverá juegos mediante DTO (los que compartan mismo género por ejemplo))
route.get('/games/genre/:dto', web.getDTOWeb)

// Apartado 4 (Añadirá un nuevo juego pasándole un JSON en el body)
route.post('/games', web.addGameWeb)

// Apartado 5 (Actualizará un juego)
route.put('/games', web.updateGameWeb)

// Apartado 6 (Borrará un juego por su id)
route.delete('/games/:id', web.delGameWeb)

export default route
