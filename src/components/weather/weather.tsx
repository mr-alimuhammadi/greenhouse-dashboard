import HumidityCard from "./cards/humidity-card";
import PHCard from "./cards/ph-card";
import TemperatureCard from "./cards/temperature-card";
import WindCard from "./cards/wind-card";
import styles from "./weather.module.scss";

export function Weather() {
  return (
    <div className={styles.weather}>
      <TemperatureCard />
      <HumidityCard />
      <WindCard />
      <PHCard />
    </div>
  );
}
