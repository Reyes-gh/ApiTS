export enum Tipo {
  RPG = 'RPG',
  Accion = 'Acción',
  Plataformas = 'Plataformas',
  Puzles = 'Puzles',
  Drama = 'Drama',
  Historia = 'Historia',
  FPS = 'FPS',
  Aventura = 'Aventura'
}

export interface GameEntry {
  id: number
  nombre: string
  tipo: Tipo
  img: string
}

// export type NoGenreGame = Pick<Game, 'id' | 'nombre' | 'img'>
export type GameNoTipo = Omit<GameEntry, 'tipo'>
export type NewGameEntry = Omit<GameEntry, 'id'>
