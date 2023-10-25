import styles from "./Skills.module.css"
import Head1 from "../Head1/Head1"
import Seperator from "../Seperator"
import SkillContainer from "./SkillContainer/SkillContainer";
import {
  FirebaseSVG,
  ReactSVG,
  JavascriptSVG,
  NodeJSSVG,
  Html5SVG,
  Css3SVG,
  MongoDBSVG,
  ExpressJSSVG,
} from "../SVGs";
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