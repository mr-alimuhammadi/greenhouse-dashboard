import { useEffect, useState } from "react";
import CollapseBox from "../collapse-box/collapse-box";
import styles from "./device-overivew.module.scss";
import TemperatureAndHumidityChart from "../temperature-and-humidity-chart/temperature-and-humidity-chart";
import axios from "axios";
import { ChartData } from "../../types/chart-data";
import LoadingMask from "../loading-mask/loading-mask";
import { ClipLoader } from "react-spinners";
import { Status } from "../../types/status";

interface Props {
  deviceId: number;
  deviceName: string;
  deviceZone: string;
}
export default function DeviceOverview(props: Props) {
  const [collapse, setCollapse] = useState(true);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartDataStatus, setChartDataStatus] = useState<Status>("idle");

  useEffect(() => {
    if (chartDataStatus === "idle") {
      setChartDataStatus("loading");
      axios
        .get(import.meta.env.VITE_API_URL + "/chart-data/" + props.deviceId)
        .then((response) => {
          if (response.status === 200) {
            setChartData(response.data as ChartData[]);
            setChartDataStatus("succeeded");
          } else {
            console.error(
              "something went wrong... can not get devices data!",
              response
            );
            setChartDataStatus("failed");
          }
        });
    }
  }, [props.deviceId, chartDataStatus]);

  return (
    <div className={styles.decviceOverview}>
      <div className={styles.deviceCard}>
        <img
          src="/static/images/ARM micro.png"
          alt="arm micro"
          className={styles.deviceImage}
        />
        <div className={styles.deviceInfo}>
          <div className={styles.deviceName}>{props.deviceName}</div>
          <div className={styles.deviceZone}>{props.deviceZone}</div>
        </div>
        <button
          type="button"
          className={styles.collapseToggleButton}
          onClick={() => setCollapse((collapse) => !collapse)}
        >
          <i className={`bi bi-chevron-${collapse ? "down" : "up"}`}></i>
        </button>
      </div>
      <CollapseBox collapse={collapse} className={styles.collapseCard}>
        <h3>Termperature and Humidty measures</h3>
        <LoadingMask
          loading={
            chartDataStatus === "loading" || chartDataStatus === "failed"
          }
          maskZIndex={10}
          message={
            chartDataStatus === "loading"
              ? "Loading chart data"
              : "something went wrong... can not load chart data!"
          }
          messageBoxClassName={
            chartDataStatus === "loading"
              ? styles.loadingMaskMessageBox
              : styles.errorMaskMessageBox
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
      </CollapseBox>
    </div>
  );
}
