import React from 'react'
import styles from './cardforward.module.css'

const cardforward = (props) => {
  return (
    <div className={styles.card}>
        <div className={styles.circle}></div>
        <div className={styles.designCircle}></div>
        <div className={styles.numberStyle}>
          <label className={styles.number}>{props.number}</label>
        </div>
        
        <label className={styles.name}>{props.name}</label>
        <label className={styles.expiry}>{props.month}/{props.year}</label>
    </div>
  )
}

export default cardforward
