import {
  ResponsiveContainer,
  BarChart as BarGraph,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { data } from "@/data";

export const BarChart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} fill="#7d12ff" />
      </BarGraph>
    </ResponsiveContainer>
  );
};
