import styles from "./styles.module.css"
import WhiteButton from "../Button/white"
import BlackButton from "../Button/black"
const Navbar = () => {
  return (
    <nav id="nav-menu" className={styles.navbar}>
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
      <div className={styles.buttonsContainer}>
        <WhiteButton className="nav-link resume" text="Resume" />
        <BlackButton text="Github" />
      </div>
    </nav>
  );
};

export default Navbar;
