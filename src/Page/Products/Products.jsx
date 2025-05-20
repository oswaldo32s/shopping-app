import { ProductFilters } from "./ProductFilters/ProductFilters";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./Product.module.css";
import { useProducts } from "../../hooks/useProducts";

export default function Products() {
  const { filteredProducts } = useProducts();
  return (
    <main className={styles.main}>
      <div className={styles.Container}>
        <h2 className={styles.title}>Start Shopping!</h2>
        <ProductFilters />
        <section className={styles.productContainer}>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
