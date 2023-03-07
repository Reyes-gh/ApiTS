'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express')) // ESModules
const routes_1 = __importDefault(require('./routes/routes')) // Importamos las rutas
/**
 * Para compilar el programa debermos ejecutar npm run start en la línea de comandos.
 * Si queremos ejecutarlo y actualizarlo en tiempo real deberemos acceder al script dev mediante npm run dev.
 * Este a su vez ejecutará ESLint, que ayuda a complementar el código de diversas maneras.
 */
const app = (0, express_1.default)()
app.use(express_1.default.json()) // middleware que transforma la req.body a un json
const PORT = 3000
app.use(routes_1.default) // Pasamos por parámetro de uso a la app las rutas '/' para las acciones de la API
app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
})
