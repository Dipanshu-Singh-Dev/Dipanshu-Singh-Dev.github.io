import ExternalLinkSVG from "../SVGs/ExternalLinkSVG/ExternalLinkSVG";
import styles from "./black.module.css"
const black = ({text,className,icon,id,external}) => {
return (
  <div id={styles.vercel_button}>
    <button id={id} className={className}>
      {icon && <img src={icon} alt="icon" />}
      {text}
      {external && <ExternalLinkSVG/>}
    </button>
  </div>
);
}

export default black