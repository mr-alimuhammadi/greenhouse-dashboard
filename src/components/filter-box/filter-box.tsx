import { format, subDays, subMonths, subYears } from "date-fns";
import styles from "./filter-box.module.scss";
import { Dispatch, SetStateAction } from "react";
import { DeviceData } from "../../types/device-data";
import { AvrageMode } from "../../types/avrage-mode";

interface Props {
  devicesData: DeviceData[];
  deviceId: number;
  setDeviceId: Dispatch<SetStateAction<number>>;
  fromDateTime: Date;
  setFromDateTime: Dispatch<SetStateAction<Date>>;
  toDateTime: Date;
  setToDateTime: Dispatch<SetStateAction<Date>>;
  avrageMode: AvrageMode;
  setAvrageMode: Dispatch<SetStateAction<AvrageMode>>;
}
export default function FilterBox(props: Props) {
  return (
    <div className={styles.filterBox}>
      <div className={styles.deviceSelection}>
        <label htmlFor="device-select">Device:</label>
        <select
          id="device-select"
          value={props.deviceId}
          onChange={(e) => props.setDeviceId(parseInt(e.currentTarget.value))}
        >
          <option value={-1}>select a device</option>
          {props.devicesData.map((device, index) => (
            <option value={device.deviceId} key={index}>
              {device.deviceName}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterButtons}>
        <span>Filter records by</span>
        <div>
          <button type="button" onClick={filterByLastDay}>
            last day
          </button>
          <button type="button" onClick={filterByLastWeek}>
            last week
          </button>
          <button type="button" onClick={filterByLastMonth}>
            last month
          </button>
          <button type="button" onClick={filterByLastYear}>
            last year
          </button>
        </div>
      </div>
      <div className={styles.datetime}>
        <span>From</span>
        <div className={styles.dateSelection}>
          <label htmlFor="fromDate">date:</label>
          <input
            type="date"
            id="fromDate"
            value={format(props.fromDateTime, "yyyy-MM-dd")}
            onChange={(e) => {
              if (e.currentTarget.value !== "") {
                const newDate =
                  e.currentTarget.value +
                  "T" +
                  format(props.fromDateTime, "HH:mm:ss");
                props.setFromDateTime(new Date(newDate));
              }
            }}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="fromTime">time:</label>
          <input
            type="time"
            id="fromTime"
            value={format(props.fromDateTime, "HH:mm")}
            onChange={(e) => {
              if (e.currentTarget.value !== "") {
                const newDate =
                  format(props.fromDateTime, "yyyy-MM-dd") +
                  "T" +
                  e.currentTarget.value +
                  ":00";
                props.setFromDateTime(new Date(newDate));
              }
            }}
          />
        </div>
      </div>
      <div className={styles.datetime}>
        <span>To</span>
        <div className={styles.dateSelection}>
          <label htmlFor="toDate">date:</label>
          <input
            type="date"
            id="toDate"
            value={format(props.toDateTime, "yyyy-MM-dd")}
            onChange={(e) => {
              if (e.currentTarget.value !== "") {
                const newDate =
                  e.currentTarget.value +
                  "T" +
                  format(props.toDateTime, "HH:mm:ss");
                props.setToDateTime(new Date(newDate));
              }
            }}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="toTime">time:</label>
          <input
            type="time"
            id="toTime"
            value={format(props.toDateTime, "HH:mm")}
            onChange={(e) => {
              if (e.currentTarget.value !== "") {
                const newDate =
                  format(props.toDateTime, "yyyy-MM-dd") +
                  "T" +
                  e.currentTarget.value +
                  ":00";
                props.setToDateTime(new Date(newDate));
              }
            }}
          />
        </div>
      </div>
      <div className={styles.avrageSelection}>
        <span>Average for</span>
        <div className={styles.radios}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="month"
              checked={props.avrageMode === "month"}
              onChange={(e) => {
                if (e.currentTarget.value === "on")
                  props.setAvrageMode("month");
              }}
            />
            <label htmlFor="month">every month</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="week"
              checked={props.avrageMode === "week"}
              onChange={(e) => {
                if (e.currentTarget.value === "on") props.setAvrageMode("week");
              }}
            />
            <label htmlFor="week">every week</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="day"
              checked={props.avrageMode === "day"}
              onChange={(e) => {
                if (e.currentTarget.value === "on") props.setAvrageMode("day");
              }}
            />
            <label htmlFor="day">every day</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="six-hours"
              checked={props.avrageMode === "six-hours"}
              onChange={(e) => {
                if (e.currentTarget.value === "on")
                  props.setAvrageMode("six-hours");
              }}
            />
            <label htmlFor="six-hours">every six-hours</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="hour"
              checked={props.avrageMode === "hour"}
              onChange={(e) => {
                if (e.currentTarget.value === "on") props.setAvrageMode("hour");
              }}
            />
            <label htmlFor="hour">every hour</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="avrage"
              id="none"
              checked={props.avrageMode === "none"}
              onChange={(e) => {
                if (e.currentTarget.value === "on") props.setAvrageMode("none");
              }}
            />
            <label htmlFor="none">no averaging</label>
          </div>
        </div>
      </div>
    </div>
  );

  function filterByLastDay() {
    const today = new Date();
    const yesterday = subDays(today, 1);

    props.setFromDateTime(yesterday);
    props.setToDateTime(today);
  }
  function filterByLastWeek() {
    const today = new Date();
    const sevenDaysAgo = subDays(today, 7);

    props.setFromDateTime(sevenDaysAgo);
    props.setToDateTime(today);
  }
  function filterByLastMonth() {
    const today = new Date();
    const aMonthAgo = subMonths(today, 1);

    props.setFromDateTime(aMonthAgo);
    props.setToDateTime(today);
  }
  function filterByLastYear() {
    const today = new Date();
    const aYearAgo = subYears(today, 1);

    props.setFromDateTime(aYearAgo);
    props.setToDateTime(today);
  }
}
