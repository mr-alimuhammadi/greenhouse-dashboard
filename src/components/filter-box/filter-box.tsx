import { format, subDays, subMonths, subYears } from "date-fns";
import styles from "./filter-box.module.scss";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { AvrageMode } from "../../types/avrage-mode";
import axios from "axios";
import { ChartData } from "../../types/chart-data";
import { DeviceInfo } from "../../types/device-info";
import { Status } from "../../types/status";

interface Props {
  devicesData: DeviceInfo[];
  setChartData: Dispatch<SetStateAction<ChartData[]>>;
  devicesInfoStatus: Status;
  chartDataStatus: Status;
  setChartDataStatus: Dispatch<SetStateAction<Status>>;
}
export default function FilterBox(props: Props) {
  const [deviceId, setDeviceId] = useState(-1);
  const today = new Date();
  const aMonthAgo = subMonths(today, 1);
  const [fromDate, setFromDate] = useState(format(aMonthAgo, "yyyy-MM-dd"));
  const [fromTime, setFromTime] = useState(format(aMonthAgo, "HH:mm"));
  const [toDate, setToDate] = useState(format(today, "yyyy-MM-dd"));
  const [toTime, setToTime] = useState(format(today, "HH:mm"));
  const [avrageMode, setAvrageMode] = useState<AvrageMode>("none");

  return (
    <div className={styles.filterBox}>
      <div className={styles.deviceSelection}>
        <label htmlFor="device-select">دستگاه:</label>
        <select
          id="device-select"
          value={deviceId}
          onChange={handleDeviceIdChange}
        >
          <option value={-1}>
            {props.devicesInfoStatus === "succeeded"
              ? "انتخاب دستگاه"
              : props.devicesInfoStatus === "loading"
              ? "بارگیری دستگاه ها..."
              : "در بارگیری داده ها اشکالی پیش امده!"}
          </option>
          {props.devicesData.map((device, index) => (
            <option value={device.deviceId} key={index}>
              {device.deviceName}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterButtons}>
        <span>فیلتر کردن بر اساس</span>
        <div>
          <button type="button" onClick={filterByLastDay}>
            آخرین روز
          </button>
          <button type="button" onClick={filterByLastWeek}>
            آخرین هفته
          </button>
          <button type="button" onClick={filterByLastMonth}>
            اخرین ماه
          </button>
          <button type="button" onClick={filterByLastYear}>
            اخرین سال
          </button>
        </div>
      </div>
      <div className={styles.datetime}>
        <span>از</span>
        <div className={styles.dateSelection}>
          <label htmlFor="fromDate">تاریخ:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="fromTime">زمان:</label>
          <input
            type="time"
            id="fromTime"
            value={fromTime}
            onChange={handleFromTimeChange}
          />
        </div>
      </div>
      <div className={styles.datetime}>
        <span>تا</span>
        <div className={styles.dateSelection}>
          <label htmlFor="toDate">تاریخ:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="toTime">زمان:</label>
          <input
            type="time"
            id="toTime"
            value={toTime}
            onChange={handleToTimeChange}
          />
        </div>
      </div>
      <div className={styles.avrageSelection}>
        <span>میانگین به ازای</span>
        <div className={styles.radios}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="month"
              checked={avrageMode === "month"}
              onChange={(e) => handleAvrageModeChange(e, "month")}
            />
            <label htmlFor="month">هر ماه</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="week"
              checked={avrageMode === "week"}
              onChange={(e) => handleAvrageModeChange(e, "week")}
            />
            <label htmlFor="week">هر هفته</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="day"
              checked={avrageMode === "day"}
              onChange={(e) => handleAvrageModeChange(e, "day")}
            />
            <label htmlFor="day">هر روز</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="six-hours"
              checked={avrageMode === "six-hours"}
              onChange={(e) => handleAvrageModeChange(e, "six-hours")}
            />
            <label htmlFor="six-hours">هر شش ساعت</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="hour"
              checked={avrageMode === "hour"}
              onChange={(e) => handleAvrageModeChange(e, "hour")}
            />
            <label htmlFor="hour">هر ساعت</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="none"
              checked={avrageMode === "none"}
              onChange={(e) => handleAvrageModeChange(e, "none")}
            />
            <label htmlFor="none">بدون میانگین</label>
          </div>
        </div>
      </div>
    </div>
  );

  function getChartData(
    deviceId: number,
    fromDate: string,
    fromTime: string,
    toDate: string,
    toTime: string,
    avrageMode: AvrageMode
  ) {
    if (deviceId !== -1) {
      props.setChartDataStatus("loading");
      axios
        .get(import.meta.env.VITE_API_URL + "/chart-data", {
          params: {
            deviceId: deviceId,
            fromDateTime: fromDate + "T" + fromTime + ":00",
            toDateTime: toDate + "T" + toTime + ":00",
            avrageMode: avrageMode,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            props.setChartData(response.data);
            props.setChartDataStatus("succeeded");
          } else {
            props.setChartDataStatus("failed");
            console.error(
              "something went wrong... can not get chart data!",
              response
            );
          }
        });
    }
  }

  function handleDeviceIdChange(e: ChangeEvent<HTMLSelectElement>) {
    setDeviceId(parseInt(e.currentTarget.value));
    getChartData(
      parseInt(e.currentTarget.value),
      fromDate,
      fromTime,
      toDate,
      toTime,
      avrageMode
    );
  }
  function handleFromDateChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value !== "") {
      setFromDate(e.currentTarget.value);
      getChartData(
        deviceId,
        e.currentTarget.value,
        fromTime,
        toDate,
        toTime,
        avrageMode
      );
    }
  }
  function handleFromTimeChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value !== "") {
      setFromTime(e.currentTarget.value);
      getChartData(
        deviceId,
        fromDate,
        e.currentTarget.value,
        toDate,
        toTime,
        avrageMode
      );
    }
  }
  function handleToDateChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value !== "") {
      setToDate(e.currentTarget.value);
      getChartData(
        deviceId,
        fromDate,
        fromTime,
        e.currentTarget.value,
        toTime,
        avrageMode
      );
    }
  }
  function handleToTimeChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value !== "") {
      setToTime(e.currentTarget.value);
      getChartData(
        deviceId,
        fromDate,
        fromTime,
        toDate,
        e.currentTarget.value,
        avrageMode
      );
    }
  }
  function handleAvrageModeChange(
    e: ChangeEvent<HTMLInputElement>,
    avrageMode: AvrageMode
  ) {
    if (e.currentTarget.value === "on") {
      setAvrageMode(avrageMode);
      getChartData(deviceId, fromDate, fromTime, toDate, toTime, avrageMode);
    }
  }

  function changeDateTimeAndAvrageModeStates(
    fromDateTime: Date,
    toDateTime: Date,
    avrageMode: AvrageMode
  ) {
    const fromDate = format(fromDateTime, "yyyy-MM-dd");
    const fromTime = format(fromDateTime, "HH:mm");
    const toDate = format(toDateTime, "yyyy-MM-dd");
    const toTime = format(toDateTime, "HH:mm");

    setFromDate(fromDate);
    setFromTime(fromTime);
    setToDate(toDate);
    setToTime(toTime);
    setAvrageMode(avrageMode);

    getChartData(deviceId, fromDate, fromTime, toDate, toTime, avrageMode);
  }

  function filterByLastDay() {
    const today = new Date();
    const yesterday = subDays(today, 1);
    changeDateTimeAndAvrageModeStates(yesterday, today, "none");
  }
  function filterByLastWeek() {
    const today = new Date();
    const sevenDaysAgo = subDays(today, 7);

    changeDateTimeAndAvrageModeStates(sevenDaysAgo, today, "none");
  }
  function filterByLastMonth() {
    const today = new Date();
    const aMonthAgo = subMonths(today, 1);

    changeDateTimeAndAvrageModeStates(aMonthAgo, today, "hour");
  }
  function filterByLastYear() {
    const today = new Date();
    const aYearAgo = subYears(today, 1);

    changeDateTimeAndAvrageModeStates(aYearAgo, today, "six-hours");
  }
}
