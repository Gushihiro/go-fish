import { CardType } from './card.interface'

export interface Deck {
  gameDeck: Array<CardType>,
  setGameDeck: (val:Array<CardType>)=>void,
  player1Hand: Array<CardType>,
  setPlayer1Hand: (val:Array<CardType>)=>void
  cpu1Hand: Array<CardType>,
  setCpu1Hand: (val:Array<CardType>)=>void
}