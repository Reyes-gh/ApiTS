'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express')) // ESModules
const games_1 = __importDefault(require('./routes/games'))
const app = (0, express_1.default)()
app.use(express_1.default.json()) // middleware que transforma la req.body a un json
const PORT = 3000
app.get('/ping', (_req, res) => {
  console.log('Treméndolo ping manin, a las ' + new Date().toLocaleDateString())
  res.send('pong')
})
app.use('/api/games', games_1.default)
app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
})
