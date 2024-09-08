// import NewsSlider from "../components/news-slider/news-slider";
import NewsSlider from "../components/news-slider/news-slider";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.head}>
        <h1 className={styles.title}>Greenhouse Monitoring System</h1>
        <p className={styles.subtitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nostrum
          veritatis sequi accusamus nulla ab ullam velit pariatur quam laborum
          fugiat doloribus dicta deleniti, a quaerat repellat reprehenderit
          magnam incidunt omnis minima quas debitis vero mollitia. Quo autem
          aspernatur accusantium!
        </p>
      </div>

      <h2 className={styles.title}>News</h2>
      <NewsSlider />
    </div>
  );
}
