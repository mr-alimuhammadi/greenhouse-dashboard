import styles from "./message-box.module.scss";

export default function MessageBox() {
  return (
    <div className={styles.messageBox}>
      <div className={styles.title}>
        <div className={styles.grad}></div>
        نگهدار رشد <span className={styles.green}>گیاهان سبز</span> خودت باش!
      </div>
      <div className={styles.subtitle}>سلامتی گیاهانت در دستان توست</div>
    </div>
  );
}
