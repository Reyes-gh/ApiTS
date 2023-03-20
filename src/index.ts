/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import express from 'express'
// import routes from './routes/routes'

import * as web from './controllers/gameHttp' // Importamos las rutas
/**
 * Para compilar el programa debermos ejecutar npm run start en la línea de comandos.
 * Si queremos ejecutarlo y actualizarlo en tiempo real deberemos acceder al script dev mediante npm run dev.
 * Este a su vez ejecutará ESLint, que ayuda a complementar el código de diversas maneras.
 */

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`)
})
app.use(express.json()) // middleware que transforma la req.body a un json

const session = require('express-session')
// app.use(routes)

app.set('view engine', 'ejs')

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}))

const secured = (req: any, res: any, next: any) => {
  if (req.user) {
    return next()
  }
  req.session.returnTo = req.originalUrl
  res.redirect('/googleauth')
}

app.get('/googleauth', function (_req, res) {
  res.render('../views/pages/auth.ejs')
})
const passport = require('passport')
let userProfile: any

app.use(passport.initialize())

app.use(passport.session())

app.get('/success', secured, (_req, res) => {
  res.render('../views/pages/success.ejs', { user: userProfile })
})
app.get('/error', (_req, res) => res.send('error logging in'))

passport.serializeUser(function (user: any, cb: (arg0: null, arg1: any) => void) {
  cb(null, user)
})

passport.deserializeUser(function (obj: any, cb: (arg0: null, arg1: any) => void) {
  cb(null, obj)
})

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const GOOGLE_CLIENT_ID = '1055791708735-bkgr6b6n55t6v7ktieg5boq96ectqd2s.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
function (_accessToken: any, _refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) {
  userProfile = profile
  return done(null, userProfile)
}
))

// Apartado 1 (Devolverá todos los juegos)
app.get('/games', secured, web.getGamesWeb)

// Apartado 2 (Devolverá un juego por su ID)
app.get('/games/:id', secured, web.getGameWeb)

// Apartado 3 (Devolverá juegos mediante DTO (los que compartan mismo género por ejemplo))
app.get('/games/genre/:dto', secured, web.getDTOWeb)

// Apartado 4 (Añadirá un nuevo juego pasándole un JSON en el body)
app.post('/games', secured, web.addGameWeb)

// Apartado 5 (Actualizará un juego)
app.put('/games', secured, web.updateGameWeb)

// Apartado 6 (Borrará un juego por su id)
app.delete('/games/:id', secured, web.delGameWeb)

/*

//Si utilizamos este app.use todas las URL de la API REST llamarán al autentificador de google.
//Sin embargo, al intentar conseguir un get mediante /games también llamará a la auth de google,
//entrando en un bucle infinito.

app.use('/',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

  */

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function (_req, res) {
    res.redirect('/success')
  })

export default app
