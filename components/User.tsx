import Image from 'next/image'

import Card from './Card'

import { Hand } from '../models/hand.interface'

import styles from '../styles/Home.module.css'

const CardsInHand = ({ player1Hand, setPlayer1Hand, cpu1Hand, setCpu1Hand }: Hand) => {

  const matchCard = () => {
    player1Hand.forEach((card) => {
      const handleMatch = player1Hand.filter(() => {
        card.value
      })
      if (handleMatch.length === 4) {
        const changeHand = player1Hand.filter(() => {
          !card.value
        })
        setPlayer1Hand(changeHand)
      }
    })
  }

  const handleFishForCard = (card: any) => {
    const fishedCards = cpu1Hand.filter(newCard=>newCard.value==card.value)
    console.log("Fished Cards", fishedCards)
    fishedCards.forEach(takenCard=>cpu1Hand.splice(cpu1Hand.indexOf(takenCard), 1))
    console.log(cpu1Hand)
    fishedCards.forEach(takenCard=>setPlayer1Hand([...player1Hand, takenCard]))
    console.log("Hand after taking", player1Hand)
    matchCard()
  }

  return (
    <div className={styles.cardsInHand}>
      {player1Hand.map((card, index)=>{
        return (
          <div 
            key={index}
            onClick={()=>handleFishForCard(card)}
          >
          <Card 
            value={card.value}
            suit={card.suit}
            img={card.img}
          />
          </div>
        )
      })}
    </div>
  )
}

export default CardsInHand