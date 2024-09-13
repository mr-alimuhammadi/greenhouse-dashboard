import { useState } from "react";
import FilterBox from "../components/filter-box/filter-box";
import TemperatureAndHumidityChart from "../components/temperature-and-humidity-chart/temperature-and-humidity-chart";
import { ChartData } from "../types/chart-data";
import styles from "./reports.module.scss";
import { DeviceInfo } from "../types/device-info";
import { Status } from "../types/status";
import LoadingMask from "../components/loading-mask/loading-mask";
import { ClipLoader } from "react-spinners";
interface Props {
  devicesInfo: DeviceInfo[];
  devicesInfoStatus: Status;
}
export default function Reports(props: Props) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartDataStatus, setChartDataStatus] = useState<Status>("idle");

  return (
    <div className={styles.reports}>
      <div className={styles.head}>
        <h1 className={styles.title}>گزارشات</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه
        </p>
      </div>
      <h2 className={styles.title}>فیلتر</h2>
      <FilterBox
        devicesData={props.devicesInfo}
        setChartData={setChartData}
        devicesInfoStatus={props.devicesInfoStatus}
        chartDataStatus={chartDataStatus}
        setChartDataStatus={setChartDataStatus}
      />
      <h2>میزان دما و رطوبت</h2>
      <LoadingMask
        loading={chartDataStatus !== "succeeded"}
        maskZIndex={10}
        message={
          chartDataStatus === "loading"
            ? "بارگیری داده های نمودار"
            : chartDataStatus === "failed"
            ? "اشکالی در ارتباط پیش امده... نمی توان داده ها را بارگزاری کرد!"
            : "ابتدا یک دستگاه را انتخاب کنید"
        }
        messageBoxClassName={
          chartDataStatus === "failed"
            ? styles.errorMaskMessageBox
            : styles.loadingMaskMessageBox
        }
        spinner={
          <ClipLoader
            color={"#0d6efd"}
            loading={chartDataStatus === "loading"}
            size={20}
          />
        }
      >
        <TemperatureAndHumidityChart data={chartData} />
      </LoadingMask>
    </div>
  );
}
