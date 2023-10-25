import styles from "./Hamburger.module.css";
const Hamburger = ({handleClick}) => {
  return (
    <svg
    onClick={handleClick}
    id={styles.svg}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20 7L4 7"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M20 12L4 12"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M20 17L4 17"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
}

export default Hamburger
