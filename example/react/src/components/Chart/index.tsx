import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartModel } from "src/model/ChartModel";
import "./chart.css";

const ChartComponenet = (model: ChartModel) => {
  Chart.register(...registerables);

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data: ChartData<"bar"> = {
    labels: model.labels,
    datasets: [
      {
        label: model.label,
        data: model.data!,
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartComponenet;
