import styles from "./white.module.css"
import ExternalLinkSVG from "../SVGs/ExternalLinkSVG/ExternalLinkSVG";
const index = ({text,icon,id,external}) => {
  return (
    <div id={styles.vercel_button}>
      <button id={id}>
        {icon && <img src={icon} alt="icon" />}
        {text}
        {external && <ExternalLinkSVG stroke="black" />}
      </button>
    </div>
  );
}

export default index