import { useOutletContext } from "react-router";
import Button from "../../components/Button/Button";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
  const [{ cartItems }] = useOutletContext();
  console.log(cartItems);
  const total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Time to checkout?</h2>
        <section className={styles.itemsContainer}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </section>
        <section className={styles.checkOut}>
          <h3 className={styles.title}>Total: ${total.toLocaleString()}</h3>
          <Button>Check Out</Button>
        </section>
      </div>
    </main>
  );
}
