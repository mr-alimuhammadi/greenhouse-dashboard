import {
  differenceInDays,
  differenceInMonths,
  format,
  getDay,
  isAfter,
  isBefore,
} from "date-fns";
import { MeasuresData } from "../types/measures-data";

export default function extractChartData(
  measuresData: MeasuresData[],
  fromDataTime: Date,
  toDataTime: Date
) {
  const data = measuresData.filter(
    (e) => isAfter(e.datetime, fromDataTime) && isBefore(e.datetime, toDataTime)
  );

  if (differenceInDays(toDataTime, fromDataTime) <= 7) {
    return data.map((e) => ({
      datetime: dateToDayOfWeek(e.datetime) + " " + format(e.datetime, "HH:mm"),
      temperature: e.temperature,
      humidity: e.humidity,
    }));
  } else if (differenceInMonths(toDataTime, fromDataTime) <= 12) {
    return data.map((e) => ({
      datetime: format(e.datetime, "d/M HH:mm"),
      temperature: e.temperature,
      humidity: e.humidity,
    }));
  } else {
    return data.map((e) => ({
      datetime: format(e.datetime, "yyyy-MM-dd HH:mm"),
      temperature: e.temperature,
      humidity: e.humidity,
    }));
  }
}

function dateToDayOfWeek(date: Date) {
  switch (getDay(date)) {
    case 0:
      return "Su";
    case 1:
      return "Mo";
    case 2:
      return "Tu";
    case 3:
      return "We";
    case 4:
      return "Th";
    case 5:
      return "Fr";
    case 6:
      return "Sa";
  }
}
