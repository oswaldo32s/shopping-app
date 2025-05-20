import styles from "./Button.module.css";

export default function Button({ children, handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}
