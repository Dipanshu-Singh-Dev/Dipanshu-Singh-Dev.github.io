import React from "react";
import styles from "./styles.module.css"
import WhiteButton from "../Button/white"
import BlackButton from "../Button/black"
const Navbar = () => {
  return (
    <nav id="nav-menu" className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <div className={styles.buttonsContainer}>
        <WhiteButton text="Resume" />
        <BlackButton text="Github" />
      </div>
    </nav>
  );
};

export default Navbar;
