

import { CardType } from '../models/card.interface'
import { Deck } from '../models/deck.interface'

const DeckOfCards = ({ gameDeck, setGameDeck, player1Hand, setPlayer1Hand, cpu1Hand, setCpu1Hand }: Deck) => {

  const allSuits:Array<string> = [
    "hearts",
    "spades",
    "clubs",
    "diamonds"
  ]
  
  const allValues:Array<string> = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king"
  ]
  
  let deck: Array<CardType> = []

  const createDeck = () => {
    deck = []
    allValues.forEach((value) => {
      allSuits.forEach((suit) => {
        const newCard:CardType = {
          value: value,
          suit: suit,
          img: `/images/PNG-cards-1.3/${value}_of_${suit}.png`
        }
        deck.push(newCard)
      })
    })
    deck.forEach(card => {
      let j = Math.floor(Math.random() * deck.length);
      let temp = card;
      card = deck[j];
      deck[j] = temp;
    })
    console.log("deck", deck)
    setGameDeck(deck)
  }

  const dealHand = () => {
    setPlayer1Hand(gameDeck.slice(0, 5));
    gameDeck.splice(0, 5);
    setCpu1Hand(gameDeck.slice(0,5))
    gameDeck.splice(0, 5);
    console.log("My Hand", player1Hand);
    console.log("Cpu1 Hand", cpu1Hand);
    console.log("Remaining:", gameDeck);
  }

  const drawCard = () => {
    const topDraw = [...gameDeck.splice(0, 1)][0];
    setPlayer1Hand([...player1Hand, topDraw])
    console.log("top card", topDraw);
    console.log("Remaining", gameDeck);
    matchCard();
  }

  const matchCard = () => {
    allValues.forEach((value) => {
      const filteredArray = player1Hand.filter(card => card.value == value)
      if (filteredArray.length == 4) {
        const groupCards = player1Hand.filter(card => card.value != value)
        setPlayer1Hand(groupCards)
        console.log("grouped!")
      }
    })
  }
 

  return (
    <div>
      <div className="thisIsDeck">
        Hi This Deck~ Remaining: {gameDeck.length}
      </div>
      <button onClick={()=>createDeck()}>
        Create Deck
      </button>
      <button onClick={()=>dealHand()}>
        Deal Hands
      </button>
      <button onClick={()=>drawCard()}>
        Draw Card
      </button>
    </div>
  )
}

export default DeckOfCards;