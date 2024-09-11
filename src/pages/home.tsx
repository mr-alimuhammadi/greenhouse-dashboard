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
        <h1 className={styles.title}>سیستم مدیریت گلخونه</h1>
        <p className={styles.subtitle}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>

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
