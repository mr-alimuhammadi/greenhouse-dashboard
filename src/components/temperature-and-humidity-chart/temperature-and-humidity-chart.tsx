import styles from "./temperature-and-humidity-chart.module.scss";
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useBypassRechartsErorr from "../../hooks/use-bypass-recharts-erorr";
import { useRef, useState } from "react";
import { ChartData } from "../../types/chart-data";
import toFarsiNumber from "../../utils/to-farsi-numbers";
import Button from "../button/button";

interface Props {
  data: ChartData[];
}
export default function TemperatureAndHumidityChart(props: Props) {
  const [reverse, setReverse] = useState(true);
  const temperatureLineRef = useRef(null);
  const humidityLineRef = useRef(null);

  useBypassRechartsErorr();

  const chartData = [...props.data];
  const averages = calculateAverage(props.data);

  if (reverse) chartData.reverse();

  const width =
    window.innerWidth > 1200
      ? 800
      : window.innerWidth > 992
      ? 640
      : window.innerWidth > 768
      ? 480
      : window.innerWidth > 576
      ? 320
      : 240;
  const height = 320;

  const displayRecordCount =
    window.innerWidth > 1200
      ? 30
      : window.innerWidth > 768
      ? 20
      : window.innerWidth > 576
      ? 15
      : 10;

  const startIndex = reverse ? 0 : chartData.length - 1 - displayRecordCount;
  const endIndex = reverse ? displayRecordCount : chartData.length - 1;

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={"100%"} aspect={width / height}>
        <LineChart
          width={width}
          height={height}
          data={chartData}
          margin={{ right: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1987543c" />
          <XAxis
            dataKey="datetime"
            name="زمان و تاریخ"
            tickMargin={10}
            height={48}
            padding={{ left: 10 }}
          />
          <YAxis
            hide
            tickMargin={10}
            domain={[-30, 100]}
            tickFormatter={(value) => toFarsiNumber(value, true)}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === "دما")
                return (
                  <span dir="ltr">
                    <span dir="rtl">{toFarsiNumber(value as number)}</span>C
                  </span>
                );
              if (name === "رطوبت") return `%${toFarsiNumber(value as number)}`;
            }}
            wrapperStyle={{ direction: "ltr" }}
            labelFormatter={(lable: string) => {
              if (lable.includes(",")) {
                return (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <div>
                      <span>از : </span>
                      <span>{lable.slice(1, lable.indexOf(","))}</span>
                    </div>
                    <div>
                      <span>تا : </span>
                      <span>{lable.slice(lable.indexOf(",") + 1, -1)}</span>
                    </div>
                  </div>
                );
              } else return `تاریخ و زمان : ${lable}`;
            }}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(2px)",
              direction: "rtl",
            }}
          />
          <Brush
            height={32}
            data={chartData}
            dataKey={"datetime"}
            startIndex={startIndex}
            endIndex={endIndex}
          />
          <Legend verticalAlign="top" height={32} />
          <Line
            ref={temperatureLineRef}
            type="monotone"
            dataKey="temperature"
            stroke="#dc3545"
            name="دما"
          />
          <Line
            ref={humidityLineRef}
            type="monotone"
            dataKey="humidity"
            stroke="#8884d8"
            name="رطوبت"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className={styles.control}>
        <div className={styles.averageOverview}>
          <div className={styles.temperature}>
            میانگین دما در این بازه :{" "}
            <span dir="ltr">{toFarsiNumber(averages.temperatureAverage)}C</span>
          </div>
          <div className={styles.humidity}>
            میانگین رطوبت در این بازه :{" "}
            <span dir="ltr">{toFarsiNumber(averages.humidityAverage)}%</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            color={reverse ? "primary" : "gray"}
            onClick={() => setReverse(true)}
          >
            نزولی
          </Button>
          <Button
            color={reverse ? "gray" : "primary"}
            onClick={() => setReverse(false)}
          >
            صعودی
          </Button>
        </div>
      </div>
    </div>
  );
  function calculateAverage(data: ChartData[]) {
    let sumOfTemperature = 0;
    let sumOfHumidity = 0;

    data.forEach((record) => {
      sumOfTemperature += record.temperature;
      sumOfHumidity += record.humidity;
    });

    return {
      temperatureAverage: parseFloat(
        (sumOfTemperature / data.length).toFixed(1)
      ),
      humidityAverage: parseFloat((sumOfHumidity / data.length).toFixed(1)),
    };
  }
}
