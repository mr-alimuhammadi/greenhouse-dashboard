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
      <h2 className={styles.title}>اخبار</h2>
      <NewsSlider className={styles.newsSlider} />
      <h2 className={styles.title}>دستگاه های من</h2>
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
          مشکلی در ارتباط پیش امده... نمی توان داده های دستگاه ها را بارگیری
          کرد!
        </div>
      )}
    </div>
  );
}
