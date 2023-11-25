import React from 'react'
import styles from "./styles.module.css"
import Head1 from "../Head1/Head1"
import Seperator from "../Separator/Separator"
import BlackButton from '../Button/black'
import WhiteButton from "../Button/white";
const index = () => {
  const downloadHandle = () => {
    const link = document.createElement("a");
    link.download = "Dipanshu-Singh-Resume.pdf";
    link.href = "Dipanshu-Singh-Resume.pdf";
    link.click();
    window.open(
      "https://drive.google.com/file/d/bc1qs8x6caxpkns9szm37d8csd6ej4nr67qx3hk732/view?usp=drive_link",
      "_blank"
    );
  };
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
            <BlackButton
              event={() => {
                window.open("https://github.com/Dipanshu-Singh-Dev", "_blank");
              }}
              text="Github"
              external
              childId="github-button-2"
            />
            <WhiteButton
              event={downloadHandle}
              external
              text="Resume"
              childId="resume-button-2"
            />
          </div>
        </div>
      </div>
      <Seperator />
    </div>
  );
}

export default index