import React from 'react'
import styles from "./styles.module.css"
import BlackButton from "../../Button/black"
import WhiteButton from "../../Button/white";
const Index = ({ mockup,title,skills,description,github,demo }) => {
  return (
    <div id={styles.container}>
      <img src={mockup} />
      <div id={styles.details}>
        <h2>{title}</h2>
        <div id={styles.skillsUsed}>
          <p>Made with : </p>
          {skills}
        </div>
        <p>{description}</p>
        <div id={styles.buttonContainer}>
          <BlackButton text="Github" external />
          <WhiteButton text="Demo" external />
        </div>
      </div>
    </div>
  );
};

export default Index