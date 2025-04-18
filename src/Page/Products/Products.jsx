import { useOutletContext } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function Products() {
  const [products] = useOutletContext();

  return (
    <main>
      <div>
        <h2>Start Shopping!</h2>
        <section>
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
