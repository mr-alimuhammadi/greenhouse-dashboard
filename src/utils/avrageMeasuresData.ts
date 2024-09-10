import { addDays, addHours, addMonths, addWeeks, isBefore } from "date-fns";
import { AvrageMode } from "../types/avrage-mode";
import { MeasuresData, MeasuresDataInRage } from "../types/measures-data";

export default function avrageMeasuresData(
  data: MeasuresData[],
  avrageMode: AvrageMode
) {
  if (avrageMode === "none") console.error("avrage-mode can not be 'none'");
  if (data.length === 0) return [];
  const avragedData: MeasuresDataInRage[] = [];

  let currentDate = new Date(data[0].datetime);
  function next() {
    switch (avrageMode) {
      case "month":
        currentDate = addMonths(currentDate, 1);
        break;
      case "week":
        currentDate = addWeeks(currentDate, 1);
        break;
      case "day":
        currentDate = addDays(currentDate, 1);
        break;
      case "six-hours":
        currentDate = addHours(currentDate, 6);
        break;
      case "hour":
        currentDate = addHours(currentDate, 1);
        break;
    }
  }

  while (isBefore(currentDate, data.slice(-1)[0].datetime)) {
    const startOfRangeDate = new Date(currentDate);
    next();
    const range = data.filter(
      (e) => e.datetime >= startOfRangeDate && e.datetime < currentDate
    );

    let temperatureSum = 0;
    let humiditySum = 0;
    range.forEach((element) => {
      temperatureSum += element.temperature;
      humiditySum += element.humidity;
    });

    avragedData.push({
      datetimeRange: [
        new Date(startOfRangeDate),
        new Date(
          isBefore(currentDate, data.slice(-1)[0].datetime)
            ? currentDate
            : data.slice(-1)[0].datetime
        ),
      ],
      humidity: parseFloat((humiditySum / range.length).toFixed(1)),
      temperature: parseFloat((temperatureSum / range.length).toFixed(1)),
    });
  }

  return avragedData;
}
