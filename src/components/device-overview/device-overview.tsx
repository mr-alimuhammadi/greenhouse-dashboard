import { useState } from "react";
import CollapseBox from "../collapse-box/collapse-box";
import styles from "./device-overivew.module.scss";
import TemperatureAndHumidityChart from "../temperature-and-humidity-chart/temperature-and-humidity-chart";
import { ChartData } from "../../types/chart-data";

interface Props {
  deviceName: string;
  deviceZone: string;
  deviceData: ChartData[];
}
export default function DeviceOverview(props: Props) {
  const [collapse, setCollapse] = useState(true);

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
        <TemperatureAndHumidityChart data={props.deviceData} />
      </CollapseBox>
    </div>
  );
}
