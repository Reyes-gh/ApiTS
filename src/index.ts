import express from 'express' // ESModules
import routes from './routes/routes'
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json
const PORT = 3000
app.use(routes) // Pasamos por parámetro de uso a la app los enlaces '/' para las acciones de la API

app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
})
