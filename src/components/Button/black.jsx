import styles from "./black.module.css"
const black = ({text,className,icon,id}) => {
return (
  <div id={styles.vercel_button}>
    <button id={id} className={className}>
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  </div>
);
}

export default black