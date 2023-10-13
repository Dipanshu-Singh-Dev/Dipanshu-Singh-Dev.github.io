import styles from "./white.module.css"
const index = ({text,className}) => {
  return (
    <button id={styles.vercel_button} className={className}>
      {text}
    </button>
  );
}

export default index