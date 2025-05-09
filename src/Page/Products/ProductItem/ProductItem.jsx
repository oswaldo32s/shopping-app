import styles from "./ProductItem.module.css";
import Button from "../../../components/Button/Button";
import FocusedItem from "../FocusedItem/FocusedItem";
import { useState } from "react";

export default function ProductItem({ productDetails, addCartItem }) {
  const { id, title, description, price, category, image } = productDetails;
  const [isFocused, setIsFocused] = useState(false);

  return isFocused ? (
    <FocusedItem
      id={id}
      title={title}
      description={description}
      price={price}
      category={category}
      image={image}
      handleClick={() => {
        setIsFocused(!isFocused);
      }}
    />
  ) : (
    <article
      className={styles.itemContainer}
      id={id}
      onClick={() => {
        setIsFocused(!isFocused);
      }}
    >
      <div className={styles.imgContainer}>
        <img src={image} alt={description} className={styles.img} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.pricenCategory}>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <span className={styles.category}>{category}</span>
      </div>
      <Button handleClick={addCartItem}>
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
    </article>
  );
}
