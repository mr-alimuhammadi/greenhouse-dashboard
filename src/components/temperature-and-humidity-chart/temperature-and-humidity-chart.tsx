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
import { useState } from "react";
import { ChartData } from "../../types/chart-data";

interface Props {
  data: ChartData[];
}
export default function TemperatureAndHumidityChart(props: Props) {
  const [reverse, setReverse] = useState(true);

  useBypassRechartsErorr();

  const chartData = [...props.data];

  if (reverse) chartData.reverse();

  const width =
    window.innerWidth > 1200
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

  return (
    <div className={styles.chartContainer}>
      <div className={styles.reverseButtonContainer}>
        <button
          type="button"
          className={styles.reverseButton}
          onClick={() => setReverse((reverse) => !reverse)}
        >
          {reverse ? "reverse" : "normal"}
        </button>
      </div>
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
            name="time"
            tickMargin={10}
            height={48}
            padding={{ left: 10 }}
          />
          <YAxis tickMargin={10} domain={[-30, 100]} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "temperature") return `${value} C`;
              if (name === "humidity") return `${value}%`;
            }}
            labelFormatter={(lable) => `datetime: ${lable}`}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(2px)",
            }}
          />
          <Brush
            height={32}
            data={chartData}
            dataKey={"datetime"}
            startIndex={reverse ? 0 : chartData.length - 1 - displayRecordCount}
            endIndex={reverse ? displayRecordCount : chartData.length - 1}
          />
          <Legend verticalAlign="top" height={32} />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#dc3545"
            name="temperature"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#8884d8"
            name="humidity"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
