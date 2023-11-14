import Project from "./Project"
import styles from "./Projects.module.css";
import Head1 from "../Head1/Head1"
import ReactSVG from "../SVGs/ReactSVG"
import HTML5SVG from "../SVGs/HTML5SVG";
import Css3SVG from "../SVGs/Css3SVG";
import JavascriptSVG from "../SVGs/JavascriptSVG"
import Separator from "../Separator/Separator"
const Projects = () => {
  const arr = [
    {
      mockup: "./Projects/green_paradise.png",
      title: "Green Paradise",
      skills: [
        <ReactSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      description:
        "A fully functional e-commerce website, offers a wide variety of plants and gardening supplies.",
      github: "https://github.com/Dipanshu-Singh-Dev/Green-Paradise/",
      demo: "https://green-paradise-team.netlify.app/",
    },
    {
      mockup: "./Projects/nykaa.png",
      title: "Nykaa Clone",
      skills: [
        <JavascriptSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      description:
        "Online beauty and wellness destination, Offering a comprehensive selection of beauty and wellness products.",
      github: "https://github.com/Dipanshu-Singh-Dev/Nyka",
      demo: "https://enolc-nykaa.netlify.app/",
    },
    {
      mockup: "./Projects/SAWS.png",
      title: "SAWS",
      skills: [
        <ReactSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      description:
        "Built with cutting-edge technologies like HTML, CSS, and JavaScript, This website offers a seamless shopping experience.",
      github: "https://github.com/Dipanshu-Singh-Dev/Nyka",
      demo: "https://enolc-nykaa.netlify.app/",
    },
    {
      mockup: "./Projects/goggol.png",
      title: "Google Clone",
      skills: [
        <ReactSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      description:
        "A google clone with extensive functionality with an full fledged shopping section, a videos section wtih video player and more.",
      github: "https://github.com/Dipanshu-Singh-Dev/google_clone",
      demo: "https://goggol.netlify.app/",
    },
  ];
  return (
    <div id={styles.container}>
      <Head1 text="Projects" />
      {arr.map((el) => (
        <Project
          key={el.mockup}
          mockup={el.mockup}
          title={el.title}
          skills={el.skills}
          description={el.description}
          github={el.github}
          demo={el.demo}
        />
      ))}
      <Separator />
    </div>
  );
}

export default Projects