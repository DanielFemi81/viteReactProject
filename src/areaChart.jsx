import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  // LinearGradient,
  CartesianGrid,
} from "recharts";

const Data = [
  {
    Date: "18 Dec",
    info: 1000,
  },
  {
    Date: "19 Dec",
    info: 800,
  },
  {
    Date: "20 Dec",
    info: 600,
  },
  {
    Date: "21 Dec",
    info: 400,
  },
  {
    Date: "22 Dec",
    info: 200,
  },
  {
    Date: "23 Dec",
    info: 200,
  },
];
function AreaChartComponent() {
  return (
    <ResponsiveContainer height="100%">
      <AreaChart height="356px" data={Data}>
        <YAxis axisLine={false} />
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF540333" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF540333" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" />
        <Tooltip />
        <CartesianGrid horizontal="true" vertical="" />
        <Area
          dataKey="info"
          stroke="#FF5403"
          fillOpacity={1}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export default AreaChartComponent;
