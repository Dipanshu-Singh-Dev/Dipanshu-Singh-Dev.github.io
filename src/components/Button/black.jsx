import React from 'react'
import styles from "./black.module.css"
const black = ({text,className}) => {
  return (
    <button className={className} id={styles.vercel_button}>
      {text}
    </button>
  );
}

export default black