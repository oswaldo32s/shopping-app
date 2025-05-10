import { useOutletContext } from "react-router";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./Product.module.css";

export default function Products() {
  const [{ products, addCartItem, cartItems, deleteItem, removeOneItem }] =
    useOutletContext();

  return (
    <main className={styles.main}>
      <div className={styles.Container}>
        <h2 className={styles.title}>Start Shopping!</h2>
        <section className={styles.productContainer}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              productDetails={product}
              cartItems={cartItems}
              addCartItem={addCartItem}
              DeleteItem={deleteItem}
              RemoveOneItem={removeOneItem}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
