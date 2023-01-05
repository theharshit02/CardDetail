import React from 'react'
import styles from './cardbackward.module.css'

const cardbackward = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.black}></div>
      <div className={styles.grey}>
        <label className={styles.cvc}>{props.cvc}</label>
      </div>
    </div>
  )
}

export default cardbackward
