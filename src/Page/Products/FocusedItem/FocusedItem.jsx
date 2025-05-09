import styles from "./FocusedItem.module.css";
import Button from "../../../components/Button/Button";

export default function FocusedItem({
  id,
  title,
  description,
  price,
  category,
  handleClick,
  image,
}) {
  return (
    <article className={styles.focused} id={id}>
      <div className={styles.left}>
        <img src={image} alt={description} className={styles.img} />
      </div>
      <div className={styles.right}>
        <button className={styles.close} onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className={styles.title}>{title}</h2>
        <span>${price.toFixed(2)}</span>
        <p className={styles.description}>{description}</p>
        <Button>
          Add
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
    </article>
  );
}
