import React from 'react'
import styles from "./styles.module.css"
import Head1 from "../Head1"
import Seperator from "../Seperator"
const index = () => {
  return (
    <div id="about" className={styles.container}>
      <Head1 text="About Me" />

      <div className={styles.imgNDesc}>
        <img
          src="https://i.ibb.co/hBvkVkx/profile-removebg-preview.png"
          alt="profile"
        />
        <div>
          <h2 className={styles.head2}>Hi! I'm Dipanshu Singh.</h2>
          <p className={styles.intro}>
            <span className={styles.position}>Full Stack Web Developer</span>{" "}
            with proficiency in working with interdisciplinary teams and
            executing goal-oriented projects. Demonstrated expertise in writing
            production-ready code using React for frontend development, as well
            as Node.js and Express for backend implementation. Skilled in
            Generative AI and Prompt Engineering, with a strong passion for
            coding and a keen interest in contributing to a progressive
            organization.
          </p>
        </div>
      </div>
      <Seperator />
    </div>
  );
}

export default index