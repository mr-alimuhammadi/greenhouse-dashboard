import DeviceOverview from "../components/device-overview/device-overview";
import NewsSlider from "../components/news-slider/news-slider";
import generateGreenhouseData from "../utils/generate-greenhouse-data";
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
      <NewsSlider className={styles.newsSlider} />
      <h2 className={styles.title}>Devices Overview</h2>
      <DeviceOverview
        deviceName="device #22001"
        deviceZone="Greenhouse zone A"
        deviceData={generateChartData()}
      />
      <DeviceOverview
        deviceName="device #22002"
        deviceZone="Greenhouse zone B"
        deviceData={generateChartData()}
      />
      <DeviceOverview
        deviceName="device #22003"
        deviceZone="Greenhouse zone C"
        deviceData={generateChartData()}
      />
      <DeviceOverview
        deviceName="device #22004"
        deviceZone="Greenhouse zone D"
        deviceData={generateChartData()}
      />
      <DeviceOverview
        deviceName="device #22005"
        deviceZone="Greenhouse zone E"
        deviceData={generateChartData()}
      />
    </div>
  );

  function generateChartData() {
    const today = new Date();
    today.setMilliseconds(0);
    today.setSeconds(0);
    if (today.getMinutes() >= 45) today.setMinutes(45);
    else if (today.getMinutes() >= 30) today.setMinutes(30);
    else if (today.getMinutes() >= 15) today.setMinutes(15);
    else if (today.getMinutes() >= 0) today.setMinutes(0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const data = generateGreenhouseData(yesterday, today, 15);

    const chartData = data.map((e) => ({
      datetime: `${
        e.datetime.getDay() == new Date().getDay() ? "T" : "Y"
      }:${e.datetime.getHours()}:${e.datetime.getMinutes()}`,
      temperature: e.temperature,
      humidity: e.humidity,
    }));

    return chartData;
  }
}
