import styles from "./white.module.css"
import { ExternalLinkSVG } from "../SVGs";
const index = ({text,className,icon,id,external}) => {
  return (
    <div id={styles.vercel_button}>
      <button id={id} className={className}>
        {icon && <img src={icon} alt="icon" />}
        {text}
        {external && <ExternalLinkSVG stroke="black" />}
      </button>
    </div>
  );
}

export default index