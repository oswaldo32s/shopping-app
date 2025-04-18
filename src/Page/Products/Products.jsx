import { useOutletContext } from "react-router-dom";
import ProductItem from "./ProductItem";
import styles from "./Product.module.css";

export default function Products() {
  const [products] = useOutletContext();

  return (
    <main className={styles.main}>
      <div className={styles.Container}>
        <h2 className={styles.title}>Start Shopping!</h2>
        <section className={styles.productContainer}>
          {products.map((product) => (
            <ProductItem
              id={product.id}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
