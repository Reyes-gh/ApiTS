import express from 'express' // ESModules
import gameRoutes from './routes/games'
import * as sql from '../sql'
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Treméndolo ping manin, a las ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/games', gameRoutes)

app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
  sql.updateDB()
})
