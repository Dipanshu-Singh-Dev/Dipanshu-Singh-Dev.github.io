import styles from "./SkillContainer.module.css"
const SkillContainer = ({el:{icon,name}}) => {
  return (
    <div className={styles.container} title={name}>{icon}<p>{name}</p></div>
  );
}

export default SkillContainer