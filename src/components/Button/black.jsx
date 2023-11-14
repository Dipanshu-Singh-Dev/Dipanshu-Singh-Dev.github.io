import ExternalLinkSVG from "../SVGs/ExternalLinkSVG/ExternalLinkSVG";
import styles from "./black.module.css"
const black = ({text,icon,id,external}) => {
return (
  <div id={styles.vercel_button}>
    <button id={id} >
      {icon && <img src={icon} alt="icon" />}
      {text}
      {external && <ExternalLinkSVG/>}
    </button>
  </div>
);
}

export default black