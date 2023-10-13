import React from 'react'
import styles from "./black.module.css"
const black = ({text,className,icon}) => {
return (
  <button className={className} id={styles.vercel_button}>
    {icon && <img src={icon} alt="icon" />}
    {text}
  </button>
);
}

export default black