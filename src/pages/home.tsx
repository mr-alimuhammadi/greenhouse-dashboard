import { subDays } from "date-fns";
import DeviceOverview from "../components/device-overview/device-overview";
import NewsSlider from "../components/news-slider/news-slider";
import { DeviceData } from "../types/device-data";
import extractChartData from "../utils/extract-chart-data";
import styles from "./home.module.scss";

interface Props {
  devicesData: DeviceData[];
}
export default function Home(props: Props) {
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
      <NewsSlider className={styles.newsSlider} />
      <h2 className={styles.title}>Devices Overview</h2>
      {props.devicesData.map((device, i) => (
        <DeviceOverview
          key={i}
          deviceName={device.deviceName}
          deviceZone={device.deviceZone}
          deviceData={extractChartData(
            device.deviceData,
            subDays(new Date(), 1),
            new Date()
          )}
        />
      ))}
    </div>
  );
}
