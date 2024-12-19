import { useState } from "react";
import Chart from "react-apexcharts";

function NewAreaChart() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#FF5403"],
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: [
          "18 Dec",
          "19 Dec",
          "20 Dec",
          "21 Dec",
          "22 Dec",
          "23 Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [1000, 800, 600, 400, 200, 230],
      },
    ],
  });
  return (
    <>
      <div className="row">
        {/* <div className="mixed-chart"> */}
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          // width="100%"
          height="356"
        />
      </div>
      {/* </div> */}
    </>
  );
}
export default NewAreaChart;

// import React, { Component } from "react";
// import Chart from "react-apexcharts";
// class NewAreaChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar",
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//         },
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91],
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewAreaChart;
