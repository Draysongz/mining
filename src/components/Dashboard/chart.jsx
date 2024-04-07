import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Sales", "Expenses", "Norm"],
  ["SEP", 10000, 4000, 2000],
  ["OCT", 15600, 4600, 7800],
  ["NOV", 6600, 11200, 3190],
  ["DEC", 10300, 5400, 9800],
];

export const options = {
  //   title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export function MonthChart() {
  return (
    <Chart
      chartType="LineChart"
      backgroundColor="#301287"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
