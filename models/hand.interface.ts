import { CardType } from './card.interface'

export interface Hand {
  player1Hand: Array<CardType>,
  setPlayer1Hand: (val:Array<CardType>)=>void,
  cpu1Hand: Array<CardType>,
  setCpu1Hand: (val:Array<CardType>)=>void
}