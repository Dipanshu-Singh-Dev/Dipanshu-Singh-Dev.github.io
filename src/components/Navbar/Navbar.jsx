import styles from "./Navbar.module.css"
import WhiteButton from "../Button/white"
import BlackButton from "../Button/black"
import Sidebar from "./Sidebar/Sidebar";
import CrossSVG from "../SVGs/CrossSVG/CrossSVG";
import Hamburger from "../SVGs/HamburgerSVG/Hamburger";
import { useState } from "react";
const Navbar = () => {
  const handleClick = () => setSidebaropen((prev) => !prev);
  const [sidebarOpen,setSidebaropen] = useState(false)
  return (
    <nav id="nav-menu" className={styles.navbar}>
      {sidebarOpen ? (
        <CrossSVG handleClick={handleClick} />
      ) : (
        <Hamburger handleClick={handleClick} />
      )}
      {sidebarOpen && <Sidebar sidebarOpen />}
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
        <BlackButton external text="Github" childClass="nav-link github" childId="github-button-1" />
        <WhiteButton
          external
          childId="resume-button-1"
          childClass="nav-link resume"
          text="Resume"
        />
      </div>
    </nav>
  );
};

export default Navbar;
