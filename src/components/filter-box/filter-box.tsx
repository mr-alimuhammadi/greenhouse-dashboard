import styles from "./filter-box.module.scss";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { AvrageMode } from "../../types/avrage-mode";
import axios from "axios";
import { ChartData } from "../../types/chart-data";
import { DeviceInfo } from "../../types/device-info";
import { Status } from "../../types/status";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import DateObject from "react-date-object";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

interface Props {
  devicesData: DeviceInfo[];
  setChartData: Dispatch<SetStateAction<ChartData[]>>;
  devicesInfoStatus: Status;
  chartDataStatus: Status;
  setChartDataStatus: Dispatch<SetStateAction<Status>>;
}
export default function FilterBox(props: Props) {
  const [deviceId, setDeviceId] = useState(-1);
  const today = new DateObject({ calendar: persian });
  const aMonthAgo = new DateObject(today).subtract(1, "month");
  const [fromDateTime, setFromDateTime] = useState(aMonthAgo);
  const [toDateTime, setToDateTime] = useState(today);
  const [avrageMode, setAvrageMode] = useState<AvrageMode>("hour");

  console.log(
    new DateObject({
      calendar: persian,
      date: new Date(),
    }).month.number
  );

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
          <DatePicker
            inputClass={styles.datePicker}
            containerClassName={styles.datePickerContainer}
            calendar={persian}
            locale={persian_fa}
            value={fromDateTime}
            onChange={handleFromDateTimeChange}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="fromTime">زمان:</label>
          <DatePicker
            disableDayPicker
            format="HH:mm:ss"
            plugins={[<TimePicker className={styles.timePicker} />]}
            inputClass={styles.datePicker}
            containerClassName={styles.datePickerContainer}
            calendar={persian}
            locale={persian_fa}
            value={fromDateTime}
            onChange={handleFromDateTimeChange}
          />
        </div>
      </div>
      <div className={styles.datetime}>
        <span>تا</span>
        <div className={styles.dateSelection}>
          <label htmlFor="toDate">تاریخ:</label>
          <DatePicker
            inputClass={styles.datePicker}
            containerClassName={styles.datePickerContainer}
            calendar={persian}
            locale={persian_fa}
            value={toDateTime}
            onChange={handleToDateTimeChange}
          />
        </div>
        <div className={styles.timeSelection}>
          <label htmlFor="toTime">زمان:</label>
          <DatePicker
            disableDayPicker
            format="HH:mm:ss"
            plugins={[<TimePicker className={styles.timePicker} />]}
            inputClass={styles.datePicker}
            containerClassName={styles.datePickerContainer}
            calendar={persian}
            locale={persian_fa}
            value={toDateTime}
            onChange={handleToDateTimeChange}
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
    fromDateTime: DateObject,
    toDateTime: DateObject,
    avrageMode: AvrageMode
  ) {
    if (deviceId !== -1) {
      props.setChartDataStatus("loading");
      fromDateTime.locale = toDateTime.locale = persian_en;
      axios
        .get(import.meta.env.VITE_API_URL + "/chart-data", {
          params: {
            deviceId: deviceId,
            fromDateTime: fromDateTime.format("YYYY/MM/DD HH:mm:ss"),
            toDateTime: toDateTime.format("YYYY/MM/DD HH:mm:ss"),
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
      fromDateTime,
      toDateTime,
      avrageMode
    );
  }
  function handleFromDateTimeChange(date: DateObject) {
    if (date.isValid) {
      setFromDateTime(date);
      getChartData(deviceId, date, toDateTime, avrageMode);
    }
  }
  function handleToDateTimeChange(date: DateObject) {
    if (date.isValid) {
      setToDateTime(date);
      getChartData(deviceId, fromDateTime, date, avrageMode);
    }
  }
  function handleAvrageModeChange(
    e: ChangeEvent<HTMLInputElement>,
    avrageMode: AvrageMode
  ) {
    if (e.currentTarget.value === "on") {
      setAvrageMode(avrageMode);
      getChartData(deviceId, fromDateTime, toDateTime, avrageMode);
    }
  }

  function changeDateTimeAndAvrageModeStates(
    fromDateTime: DateObject,
    toDateTime: DateObject,
    avrageMode: AvrageMode
  ) {
    setFromDateTime(fromDateTime);
    setToDateTime(toDateTime);
    setAvrageMode(avrageMode);

    getChartData(deviceId, fromDateTime, toDateTime, avrageMode);
  }

  function filterByLastDay() {
    const today = new DateObject({ calendar: persian });
    const yesterday = new DateObject(today).subtract(1, "day");
    changeDateTimeAndAvrageModeStates(yesterday, today, "none");
  }
  function filterByLastWeek() {
    const today = new DateObject({ calendar: persian });
    const sevenDaysAgo = new DateObject(today).subtract(7, "day");

    changeDateTimeAndAvrageModeStates(sevenDaysAgo, today, "none");
  }
  function filterByLastMonth() {
    const today = new DateObject({ calendar: persian });
    const aMonthAgo = new DateObject(today).subtract(1, "month");

    changeDateTimeAndAvrageModeStates(aMonthAgo, today, "hour");
  }
  function filterByLastYear() {
    const today = new DateObject({ calendar: persian });
    const aYearAgo = new DateObject(today).subtract(1, "year");

    changeDateTimeAndAvrageModeStates(aYearAgo, today, "six-hours");
  }
}
