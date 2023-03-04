import { NewGameEntry, Tipo } from './types'

const parseNombre = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error('Nombre incorrecto o nulo')
  }

  return nombreFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseFoto = (args: any): string => {
  if (!isURL(args)) {
    throw new Error('La URL que has pasado no contiene ninguna imagen!')
  }
  return args
}

const isURL = (url: string): boolean => {
  return Boolean(url.match(/^http[^\\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null)
}

const parseTipo = (usrTipo: any): Tipo => {
  if (!isString(usrTipo) || !isTipo(usrTipo)) {
    throw new Error('No has introducido un tipo válido!')
  }

  return usrTipo
}

const isTipo = (args: any): boolean => {
  return Boolean(Object.values(Tipo).includes(args))
}

const toNewGameEntry = (object: any): NewGameEntry => {
  const newEntry: NewGameEntry = {
    nombre: parseNombre(object.nombre),
    tipo: parseTipo(object.tipo),
    img: parseFoto(object.img)
  }

  return newEntry
}
export default toNewGameEntry
