import { useEffect, useState } from "react";
import styles from "./device-overivew.module.scss";
import variables from "../../styles/variables.module.scss";
import TemperatureAndHumidityChart from "../temperature-and-humidity-chart/temperature-and-humidity-chart";
import axios from "axios";
import { ChartData } from "../../types/chart-data";
import LoadingMask from "../loading-mask/loading-mask";
import { ClipLoader } from "react-spinners";
import { Status } from "../../types/status";

interface Props {
  deviceId: number;
}
export default function DeviceOverview(props: Props) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartDataStatus, setChartDataStatus] = useState<Status>("idle");

  useEffect(() => {
    if (props.deviceId !== -1) {
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
  }, [props.deviceId]);

  return (
    <div className={styles.decviceOverview}>
      <LoadingMask
        loading={
          chartDataStatus === "loading" ||
          chartDataStatus === "failed" ||
          props.deviceId === -1
        }
        maskZIndex={2}
        message={
          props.deviceId === -1
            ? "ابتدا یک دستگاه را انتخاب کنید"
            : chartDataStatus === "loading"
            ? "بارگیری داده های نمودار"
            : "مشکلی در ارتباط پیش امد... نمی توان داده ها را بارگیری کرد!"
        }
        messageBoxClassName={
          props.deviceId === -1
            ? styles.notSelectedMaskMessageBox
            : chartDataStatus === "loading"
            ? styles.loadingMaskMessageBox
            : styles.errorMaskMessageBox
        }
        spinner={
          <ClipLoader
            color={variables.primaryColor}
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
