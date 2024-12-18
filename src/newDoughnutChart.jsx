import { useState } from "react";
import Chart from "react-apexcharts";

function NewDonutChart() {
  const [state, setState] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="380"
      />
    </>
  );
}

export default NewDonutChart;
