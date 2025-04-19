import styles from "./ProductItem.module.css";

export default function ProductItem({
  id,
  title,
  description,
  price,
  category,
  image,
}) {
  return (
    <article className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={description} className={styles.img} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.pricenCategory}>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <span className={styles.category}>{category}</span>
      </div>
      <button className={styles.button}>
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
      </button>
    </article>
  );
}
