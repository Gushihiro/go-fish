import Image from 'next/image'

import styles from '../styles/Home.module.css'

import { CardType } from '../models/card.interface'

const Card = ( { value, suit, img }: CardType) => {

  return (
    <div className={styles.oneCard}>
      <Image 
        priority={true} 
        src={img} 
        alt={`${value} of ${suit}`}
        width={140}
        height={200}
      />
    </div>
  )
}

export default Card