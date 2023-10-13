import React from 'react'
import styles from "./black.module.css"
const black = ({text}) => {
  return (
    <button className={styles.vercel_button}>{text}</button>
  )
}

export default black