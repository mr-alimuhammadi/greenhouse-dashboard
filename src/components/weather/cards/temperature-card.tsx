import styles from "./card.module.scss";

export default function TemperatureCard() {
  return (
    <div className={styles.card}>
      <div className={styles.right}>
        <div>
          <div className={styles.measure}>دما</div>
          <div className={styles.title}>27C</div>
        </div>
      </div>
      <div className={styles.left}>
        <i className="bi bi-thermometer-half"></i>
      </div>
    </div>
  );
}
