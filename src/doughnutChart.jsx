import { useEffect, useRef } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

chartjs.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    // labels: ["Nigeria", "United States", "Netherlands", "Andorra", "Others"],
    labels: [],
    datasets: [
      {
        data: [50, 24, 24, 24, 24],
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
        ],
        borderColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
      },
    ],
  };

  //   const options = {};
  return (
    <div
      style={{
        // border: "1px solid red",
        // paddingRight: "40.05px",
        width: "160.56px",
        height: "160.56px",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}

export default DoughnutChart;
