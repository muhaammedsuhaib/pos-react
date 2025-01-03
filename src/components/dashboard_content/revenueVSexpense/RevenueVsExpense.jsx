import { DatePicker } from "antd";
import React, { useState } from "react";
import PieDiagram from "../piediagram/PieDiagram";
import Chart from "react-apexcharts";
import DateBar from "../../dateBar/DateBar";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
function RevenueVsExpense() {


  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);
  // Chart Data
  const areaData = [31, 40, 28, 51, 42, 109];
  const barData = [11, 32, 45, 32, 34, 52];

  // Calculate Intersections
  const intersectionPoints = areaData
    .map((value, index) =>
      value === barData[index] ? { x: index, y: value } : null
    )
    .filter(Boolean);

  const chartOptions = {
    chart: {
      type: "line", // Mixed chart type
      stacked: false,
    },
    stroke: {
      width: [2, 0], // Line for area, no stroke for bar
      curve: "smooth",
    },
    fill: {
      type: ["gradient", "gradient"], // Both area and bar use gradient fills
      gradient: {
        shade: "light",
        type: "vertical", // Gradient direction
        shadeIntensity: 0.6,
        gradientToColors: ["#a1e7e9", "#d3807a"], // Ending colors for each bar
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    markers: {
      size: 5, // Circle size
      colors: ["#00BAEC"], // Circle color
      strokeWidth: 2,
      strokeColors: "#ffffff", // Circle outline
      hover: {
        size: 7,
      },
    },
    annotations: {
      points: intersectionPoints.map((point) => ({
        x: point.x + 1, // Adjust X to match category index
        y: point.y,
        marker: {
          size: 8,
          fillColor: "#00BAEC",
          strokeColor: "#fff",
          strokeWidth: 2,
        },
        label: {
          text: "Intersection",
          style: {
            fontSize: "10px",
            background: "#00BAEC",
            color: "#fff",
          },
        },
      })),
    },
    plotOptions: {
      bar: {
        columnWidth: "30%", // Adjust bar width
        borderRadius: 10, // Curves for the top corners only
        borderRadiusApplication: "end", // Applies the radius to the top of the bars
        borderRadiusWhenStacked: "all",
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },

    legend: {
      position: "top",
    },
    tooltip: {
      shared: true,
    },
    colors: ["#00BAEC", "#FF5733"], // Base colors for area and bar
  };
  const chartSeries = [
    {
      show: false,
      name: "",
      type: "area",
      data: areaData,
    },
    {
      name: "",
      type: "bar",
      data: barData,
    },
  ];
  return (
    <>
      <div className="bg-[#0B1A33] p-5 pb-10 w-full rounded-[30px] relative ">
        <PieDiagram />
        <DateBar
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
        />
        <div className="bg-white 3xl:w-[90%] h-[300px] rounded-[30px] mx-auto">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RevenueVsExpense;
