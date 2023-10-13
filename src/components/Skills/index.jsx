import React from 'react'
import styles from "./styles.module.css"
import Head1 from "../Head1"
import Seperator from "../Seperator"
const index = () => {
  return (
    <div className={styles.container}>
      <Head1 text="Skills" />
      <Seperator/>
    </div>
  );
}

export default index