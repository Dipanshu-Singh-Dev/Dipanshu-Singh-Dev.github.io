import styles from "./Navbar.module.css"
import WhiteButton from "../Button/white"
import BlackButton from "../Button/black"
import { Hamburger } from "../SVGs";
const Navbar = () => {
  const handleCLick = ()=>console.log("clicked")
  return (
    <nav id="nav-menu" className={styles.navbar}>
      <Hamburger handleCLick={handleCLick} />
      <div id={styles.options}>
        <a className="nav-link home" href="#home">
          Home
        </a>
        <a className="nav-link about" href="#about">
          About
        </a>
        <a className="nav-link skills" href="#skills">
          Skills
        </a>
        <a className="nav-link projects" href="#projects">
          Projects
        </a>
        <a className="nav-link contact" href="#contact">
          Contact
        </a>
      </div>
      <div className={styles.buttonsContainer}>
        <WhiteButton
          external
          id="resume-button-1"
          className="nav-link resume"
          text="Resume"
        />
        <BlackButton external text="Github" />
      </div>
    </nav>
  );
};

export default Navbar;
