import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import GameDeck from '../components/DeckOfCards'
import MyHand from '../components/User'

import { CardType } from '../models/card.interface'
import { Deck } from '../models/deck.interface'

const GoFish: NextPage = () => {

  const [gameDeck, setGameDeck] = useState<CardType[]>([])
  const [playerTurn, setPlayerTurn] = useState<number>(0)
  const [player1Hand, setPlayer1Hand] = useState<CardType[]>([])
  const [cpu1Hand, setCpu1Hand] = useState<CardType[]>([])

  return (
    <div className={styles.container}>
      <Head>
        <title>FUTUREcity-Parlor: Go-Fish</title>
        <meta name="description" content="Zoomer Go-Fish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GameDeck
          gameDeck={gameDeck} 
          setGameDeck={setGameDeck}
          player1Hand={player1Hand}
          setPlayer1Hand={setPlayer1Hand}
          cpu1Hand={cpu1Hand}
          setCpu1Hand={setCpu1Hand}
        />
        <MyHand 
          player1Hand={player1Hand}
          setPlayer1Hand={setPlayer1Hand}
          cpu1Hand={cpu1Hand}
          setCpu1Hand={setCpu1Hand}
        />
      </main>
    </div>
  )
}

export default GoFish
