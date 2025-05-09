import styles from "./RoundButton.module.css";

export default function RoundButton({ children, handleClick = () => {} }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}
