import { useState } from 'react'
import styles from "./styles.module.css"
const index = () => {
  document.body.onpointermove = event =>{
    const {clientX,clientY} = event
    setLeft(clientX)
    setTop(clientY)
  }
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  return (
    <>
      <div id={styles.backdrop}></div>
      {/* <div
        style={{
          position: "absolute",
          height: "100px",
          backgroundColor: "blue",
          aspectRatio: "1",
          zIndex: "1",
          left: `${left}px`,
          top: `${top}px`,
        }}
        id={styles.blob}
      ></div> */}
    </>
  );
}

export default index