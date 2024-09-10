import { useState } from "react";
import FilterBox from "../components/filter-box/filter-box";
import TemperatureAndHumidityChart from "../components/temperature-and-humidity-chart/temperature-and-humidity-chart";
import { DeviceData } from "../types/device-data";
import styles from "./reports.module.scss";
import { subMonths } from "date-fns";
import extractChartData from "../utils/extract-chart-data";

interface Props {
  devicesData: DeviceData[];
}
export default function Reports(props: Props) {
  const [deviceId, setDeviceId] = useState(-1);

  const today = new Date();
  const aMonthAgo = subMonths(today, 1);
  const [fromDateTime, setFromDateTime] = useState(aMonthAgo);
  const [toDateTime, setToDateTime] = useState(today);

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
        devicesData={props.devicesData}
        deviceId={deviceId}
        setDeviceId={setDeviceId}
        fromDateTime={fromDateTime}
        setFromDateTime={setFromDateTime}
        toDateTime={toDateTime}
        setToDateTime={setToDateTime}
      />
      <h2>Termperature and Humidty measures</h2>
      <TemperatureAndHumidityChart
        data={extractChartData(
          props.devicesData.find((d) => d.deviceId === deviceId)?.deviceData ??
            [],
          fromDateTime,
          toDateTime
        )}
      />
    </div>
  );
}
