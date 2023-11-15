import ExternalLinkSVG from "../SVGs/ExternalLinkSVG/ExternalLinkSVG";
import styles from "./black.module.css"
const black = ({ text, icon, id, external, childClass,childId,event }) => {
  return (
    <div id={childId} className={`${childClass} ${styles.vercel_button}`}>
      <button onClick={event} id={id}>
        {icon && <img src={icon} alt="icon" />}
        {text}
        {external && <ExternalLinkSVG />}
      </button>
    </div>
  );
};

export default black