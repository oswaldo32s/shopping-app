import styles from "./ProductItem.module.css";
import Button from "../../../components/Button/Button";
import RoundButton from "../../../components/RoundButton/Button/RoundButton";
import FocusedItem from "../FocusedItem/FocusedItem";
import { useState } from "react";

export default function ProductItem({
  productDetails,
  addCartItem,
  cartItems,
  deleteItem,
  removeOneItem,
}) {
  const { id, title, description, price, category, image } = productDetails;
  const [isFocused, setIsFocused] = useState(false);

  return isFocused ? (
    <FocusedItem
      product={productDetails}
      addToCart={addCartItem}
      removeOneItem={removeOneItem}
      deleteItem={deleteItem}
      cartItems={cartItems}
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
      {cartItems.findIndex((item) => item.id == id) == -1 ? (
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
      ) : (
        <div className={styles.buttonSection}>
          <RoundButton handleClick={removeOneItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.svg}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </RoundButton>
          <RoundButton handleClick={deleteItem}>
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </RoundButton>
          <RoundButton handleClick={addCartItem}>
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
          </RoundButton>
        </div>
      )}
    </article>
  );
}
