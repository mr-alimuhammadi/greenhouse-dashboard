import styles from "./card.module.scss";

export default function PHCard() {
  return (
    <div className={styles.card}>
      <div className={styles.right}>
        <div>
          <div className={styles.measure}>سطح ph</div>
          <div className={styles.title}>7.8</div>
        </div>
      </div>
      <div className={styles.left}>
        <i className="bi bi-eyedropper"></i>
      </div>
    </div>
  );
}
