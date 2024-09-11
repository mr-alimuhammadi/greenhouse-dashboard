import DeviceOverview from "../components/device-overview/device-overview";
import NewsSlider from "../components/news-slider/news-slider";
import styles from "./home.module.scss";
import { DeviceInfo } from "../types/device-info";
import { Status } from "../types/status";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  devicesInfo: DeviceInfo[];
  devicesInfoStatus: Status;
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
      {props.devicesInfoStatus === "succeeded" ? (
        props.devicesInfo.map((device, i) => (
          <DeviceOverview
            key={i}
            deviceId={device.deviceId}
            deviceName={device.deviceName}
            deviceZone={device.deviceZone}
          />
        ))
      ) : props.devicesInfoStatus === "loading" ? (
        <SkeletonTheme baseColor="#c4dbff" highlightColor="#0d6efd20">
          <Skeleton
            borderRadius={16}
            height={5 * 16}
            className={styles.skeleton}
            count={3}
          />
        </SkeletonTheme>
      ) : (
        <div className={styles.failed}>
          something went wrong... can not get devices data!
        </div>
      )}
    </div>
  );
}
