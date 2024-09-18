import styles from "./home.module.scss";
import MessageBox from "../components/message-box/message-box";
import { DeviceInfo } from "../types/device-info";
import { Status } from "../types/status";
import "react-loading-skeleton/dist/skeleton.css";
import DeviceSlider from "../components/device-slider/device-slider";
import { useState } from "react";
import DeviceOverview from "../components/device-overview/device-overview";
import Select from "react-select";

interface Props {
  devicesInfo: DeviceInfo[];
  devicesInfoStatus: Status;
}
export default function Home(props: Props) {
  const [selectedDeviceId, setSelectedDeviceId] = useState(-1);

  return (
    <div>
      <MessageBox />
      <div className={styles.devicesMonitor}>
        <DeviceSlider
          onChange={(selectedDevice) => setSelectedDeviceId(selectedDevice)}
          devicesInfo={props.devicesInfo}
          devicesInfoStatus={props.devicesInfoStatus}
          className={styles.deviceSlider}
        />
        <div className={styles.deviceSelectContainer}>
          <Select
            onChange={(value) => setSelectedDeviceId(value!.value)}
            isLoading={props.devicesInfoStatus === "loading"}
            theme={(theme) => ({
              colors: {
                ...theme.colors,
                primary: "#328b20",
                primary75: "#328b20bf",
                primary50: "#328b2080",
                primary25: "#328b2040",
                neutral0: "#f6f6f6",
              },
              borderRadius: 16,
              spacing: {
                ...theme.spacing,
                baseUnit: 8,
              },
            })}
            classNames={{
              container: () => styles.selectContainer,
              control: () => styles.selectControl,
              menu: () => styles.selectMenu,
            }}
            placeholder="انتخاب دستگاه"
            options={props.devicesInfo.map((d) => ({
              value: d.deviceId,
              label: d.deviceName,
            }))}
          />
        </div>

        <DeviceOverview deviceId={selectedDeviceId} />
      </div>
    </div>
  );
}
