import { MeasuresData } from "./measures-data";

export type DeviceData = {
  deviceId: number;
  deviceName: string;
  deviceZone: string;
  deviceData: MeasuresData[];
};
