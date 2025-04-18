import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.Home}>
      <div className={styles.HomeContainer}>
        <h2>Welcome to the shopping App!</h2>
        <p>Go to our product section to start buying new stuff!</p>
      </div>
    </main>
  );
}
