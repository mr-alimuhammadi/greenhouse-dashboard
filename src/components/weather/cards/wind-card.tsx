import styles from "./card.module.scss";

export default function WindCard() {
  return (
    <div className={styles.card}>
      <div className={styles.right}>
        <div>
          <div className={styles.measure}>وزش باد</div>
          <div className={styles.title}>18KMPH</div>
        </div>
      </div>
      <div className={styles.left}>
        <i className="bi bi-wind"></i>
      </div>
    </div>
  );
}
