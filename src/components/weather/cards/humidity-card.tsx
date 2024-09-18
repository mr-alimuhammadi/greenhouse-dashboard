import styles from "./card.module.scss";

export default function HumidityCard() {
  return (
    <div className={styles.card}>
      <div className={styles.right}>
        <div>
          <div className={styles.measure}>رطوبت</div>
          <div className={styles.title}>14%</div>
        </div>
      </div>
      <div className={styles.left}>
        <i className="bi bi-droplet-half"></i>
      </div>
    </div>
  );
}
