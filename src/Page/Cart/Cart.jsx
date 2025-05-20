import Button from "../../components/Button/Button";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Time to checkout?</h2>
        <section className={styles.itemsContainer}>
          {cart.map((item) => {
            return <CartItem key={item.id} cart={item} />;
          })}
        </section>
        <section className={styles.checkOut}>
          <h3 className={styles.title}>Total: ${total.toLocaleString()}</h3>
          <Button handleClick={clearCart}>Check Out</Button>
        </section>
      </div>
    </main>
  );
}
