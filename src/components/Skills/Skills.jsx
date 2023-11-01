import styles from "./Skills.module.css"
import Head1 from "../Head1/Head1"
import Seperator from "../Separator/Separator"
import SkillContainer from "./SkillContainer/SkillContainer";
import FirebaseSVG from "../SVGs/FirebaseSVG/FirebaseSVG"
import ReactSVG from "../SVGs/ReactSVG/ReactSVG"
import JavascriptSVG from "../SVGs/JavascriptSVG/JavascriptSVG"
import NodeJSSVG from "../SVGs/NodeJSSVG/NodeJSSVG"
import Html5SVG from "../SVGs/HTML5SVG/HTML5SVG"
import Css3SVG from "../SVGs/Css3SVG/Css3SVG"
import MongoDBSVG from "../SVGs/MongoDBSVG/MongoDBSVG"
import ExpressJSSVG from "../SVGs/ExpressJSSVG/ExpressJSSVG"

const index = () => {
  const skillsArr = [
    {
      icon: <ReactSVG />,
      name: "React",
    },
    {
      icon: <NodeJSSVG />,
      name: "NodeJS",
    },
    {
      icon: <MongoDBSVG />,
      name: "MongoDB",
    },
    {
      icon: <ExpressJSSVG />,
      name: "ExpressJS",
    },
    {
      icon: <JavascriptSVG />,
      name: "JavaScript",
    },
    {
      icon: <Html5SVG />,
      name: "HTML5",
    },
    {
      icon: <Css3SVG />,
      name: "CSS3",
    },
    {
      icon: <FirebaseSVG />,
      name: "Firebase",
    },
  ];
  return (
    <div id="skills" className={styles.container}>
      <Head1 text="Skills" />
      <div id={styles.skillsContainer}>
        {skillsArr.map((el) => (<SkillContainer key={el.name} el={el} />))}
      </div>
      <Seperator />
    </div>
  );
}

export default index