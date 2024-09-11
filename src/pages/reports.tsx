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
        <h1 className={styles.title}>Reports</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          amet animi voluptas quis tempora ratione eius sunt, rerum
          reprehenderit facilis totam consectetur provident vel nulla! Ipsa sed
          eos ea ab est, illum quae ut natus unde officiis architecto at nam
          facilis, beatae rem. Consectetur, a incidunt sapiente accusamus
          voluptatum ab.
        </p>
      </div>
      <h2 className={styles.title}>Filter</h2>
      <FilterBox
        devicesData={props.devicesInfo}
        setChartData={setChartData}
        devicesInfoStatus={props.devicesInfoStatus}
        chartDataStatus={chartDataStatus}
        setChartDataStatus={setChartDataStatus}
      />
      <h2>Termperature and Humidty measures</h2>
      <LoadingMask
        loading={chartDataStatus !== "succeeded"}
        maskZIndex={10}
        message={
          chartDataStatus === "loading"
            ? "Loading chart data"
            : chartDataStatus === "failed"
            ? "something went wrong... can not load chart data!"
            : "Select a device to load chart data"
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
