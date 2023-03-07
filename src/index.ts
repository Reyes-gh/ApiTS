
import express from 'express' // ESModules
import routes from './routes/routes' // Importamos las rutas

/**
 * Para compilar el programa debermos ejecutar npm run start en la línea de comandos.
 * Si queremos ejecutarlo y actualizarlo en tiempo real deberemos acceder al script dev mediante npm run dev.
 * Este a su vez ejecutará ESLint, que ayuda a complementar el código de diversas maneras.
 */

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json
const PORT = 3000
app.use(routes) // Pasamos por parámetro de uso a la app las rutas '/' para las acciones de la API

app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
})
