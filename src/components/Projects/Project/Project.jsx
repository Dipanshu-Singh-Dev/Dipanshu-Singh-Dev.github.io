import React from 'react'
import styles from "./styles.module.css"
import BlackButton from "../../Button/black"
import WhiteButton from "../../Button/white";
const Index = ({ mockup,title,skills,description,github,demo }) => {
  return (
    <div className="project-card" id={styles.container}>
      <img src={mockup} />
      <div id={styles.details}>
        <h2 className="project-title">{title}</h2>
        <div id={styles.skillsUsed}>
          <p>Made with : </p>
          {skills}
        </div>
        <p className="project-description">{description}</p>
        <div id={styles.buttonContainer}>
          <BlackButton
            text="Github"
            external
            childClass="project-github-link"
          />
          <WhiteButton
            text="Demo"
            external
            childClass="project-deployed-link"
          />
        </div>
      </div>
    </div>
  );
};

export default Index