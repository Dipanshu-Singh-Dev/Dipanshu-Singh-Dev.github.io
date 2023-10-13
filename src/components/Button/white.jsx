import styles from "./white.module.css"
const index = ({text,className,icon}) => {
  return (
    <button id={styles.vercel_button} className={className}>
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  );
}

export default index