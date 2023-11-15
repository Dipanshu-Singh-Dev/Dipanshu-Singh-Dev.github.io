import React from 'react'
import styles from "./styles.module.css"
import Head1 from "../Head1/Head1"
import Seperator from "../Separator/Separator"
import BlackButton from '../Button/black'
import WhiteButton from "../Button/white";
const index = () => {
  return (
    <div id="about" className={`${styles.container} about section`}>
      <Head1 text="About Me" />
      <div className={styles.imgNDesc}>
        <img
          className="home-img"
          src="https://i.ibb.co/hBvkVkx/profile-removebg-preview.png"
          alt="profile"
        />
        <div id={styles.aboutDetails}>
          <h2 id="user-detail-name" className={styles.head2}>
            Hi! I'm Dipanshu Singh.
          </h2>
          <p id="user-detail-intro" className={styles.intro}>
            <span className={styles.position}>Full Stack Web Developer</span>{" "}
            with proficiency in executing goal-oriented projects. Demonstrated
            expertise in writing production-ready code using MERN Stack.
          </p>
          <div id={styles.buttonContainer}>
            <BlackButton text="Github" external />
            <WhiteButton external text="Resume" />
          </div>
        </div>
      </div>
      <Seperator />
    </div>
  );
}

export default index