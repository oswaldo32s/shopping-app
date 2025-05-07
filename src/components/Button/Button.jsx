import styles from "./Button.module.css";

export default function Button({ children, handleOnClick = () => {} }) {
  return (
    <button className={styles.button} onClick={handleOnClick}>
      {children}
    </button>
  );
}
