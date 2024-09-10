import { subMinutes, subYears } from "date-fns";
import generateGreenhouseData from "./generate-greenhouse-data";
import { DeviceData } from "../types/device-data";

export default function generateDevicesData() {
  const devices: DeviceData[] = [];

  const today = new Date();
  today.setMilliseconds(0);
  today.setSeconds(0);
  const todayRoundedBy15 = subMinutes(today, today.getMinutes() % 15);
  const todayRoundedBy3 = subMinutes(today, today.getMinutes() % 15);
  const twoYearsAgoRoundedBy15 = subYears(todayRoundedBy15, 2);
  const twoYearsAgoRoundedBy3 = subYears(todayRoundedBy3, 2);

  devices.push({
    deviceId: 0,
    deviceName: "device #22001",
    deviceZone: "Greeenhouse zone A",
    deviceData: generateGreenhouseData(
      twoYearsAgoRoundedBy15,
      todayRoundedBy15,
      15
    ),
  });
  devices.push({
    deviceId: 1,
    deviceName: "device #22002",
    deviceZone: "Greeenhouse zone B",
    deviceData: generateGreenhouseData(
      twoYearsAgoRoundedBy3,
      todayRoundedBy3,
      3
    ),
  });
  devices.push({
    deviceId: 2,
    deviceName: "device #22003",
    deviceZone: "Greeenhouse zone C",
    deviceData: generateGreenhouseData(
      twoYearsAgoRoundedBy15,
      todayRoundedBy15,
      15
    ),
  });
  devices.push({
    deviceId: 3,
    deviceName: "device #22004",
    deviceZone: "Greeenhouse zone D",
    deviceData: generateGreenhouseData(
      twoYearsAgoRoundedBy3,
      todayRoundedBy3,
      3
    ),
  });
  devices.push({
    deviceId: 4,
    deviceName: "device #22005",
    deviceZone: "Greeenhouse zone E",
    deviceData: generateGreenhouseData(
      twoYearsAgoRoundedBy15,
      todayRoundedBy15,
      15
    ),
  });

  return devices;
}
