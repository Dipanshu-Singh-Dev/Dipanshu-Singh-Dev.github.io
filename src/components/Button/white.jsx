import styles from "./white.module.css"
import ExternalLinkSVG from "../SVGs/ExternalLinkSVG/ExternalLinkSVG";
const index = ({ text, icon, id, external, childClass,childId }) => {
  return (
    <div id={childId} className={`${childClass} ${styles.vercel_button}`}>
      <button id={id}>
        {icon && <img src={icon} alt="icon" />}
        {text}
        {external && <ExternalLinkSVG stroke="black" />}
      </button>
    </div>
  );
};

export default index