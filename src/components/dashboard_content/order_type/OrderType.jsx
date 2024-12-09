import React from "react";
import PieDiagram from "../piediagram/PieDiagram";
import { DatePicker } from "antd";
import Chart from "react-apexcharts";
// import './ordertype.css'
const { RangePicker } = DatePicker;
function OrderType() {
  const options = {
    series: [99, 77, 61, 20],
    chart: {
      height: 390,
      type: "radialBar",
      background: "transparent", // Transparent background for the chart
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent", // Hollow area background color set to match your color
        },
        track: { background: "transparent" },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
          
        },
        barWidth: "15%",
        // rounded: true, // Round the corners of the bars.
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -10,
          fontSize: "16px",
          color: "#ffffff", // Set text color to white
          formatter: function (seriesName, opts) {
            return seriesName;
          },
        },
      },
    },
    colors: ["#F85631", "#ADD713", "#01C793", "#F9BC00"],

    labels: ["DINE-IN", "DELIVERY", "AGGREGATOR", "OTHERS"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#0B1A33] p-5  w-full rounded-[30px] relative ">
        <PieDiagram />
        <div className="bg-primeryFirst w-full flex gap-3 p-2 rounded-[30px] mb-4">
          <div className="w-[40%]">
            <RangePicker className="rounded-[30px]  h-[35px]" />
          </div>
          <div className="w-[60%] flex 3xl:gap-3 justify-between bg-white rounded-[30px] h-[35px] p-[5px]">
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF]">
              Today
            </div>
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb]  hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ">
              This Week{" "}
            </div>
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb]  hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ">
              {" "}
              This Month
            </div>
          </div>
        </div>
        <div className="h-[300px] flex items-center w-full px-3">
          <div className="h-[350px] w-[80%]">
            <div>
              <Chart
                options={options}
                series={options.series}
                type="radialBar"
                height={350}
              />
            </div>
          </div>
          <div className="space-y-4  flex-grow">
            <div className="flex gap-2 ">
              <div className="w-[15px] h-[50px] bg-[#F85631] rounded-tl-[10px] rounded-bl-[10px] "></div>
              <div className=" flex flex-col">
                <span className="text-[#F85631] text-xl font-semibold">
                  4573
                </span>
                <span className="text-white text-sm">35(55%)</span>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="w-[15px] h-[50px] bg-[#ADD713] rounded-tl-[10px] rounded-bl-[10px]"></div>
              <div className=" flex flex-col">
                <span className="text-[#ADD713] text-xl font-semibold">
                  3577
                </span>
                <span className="text-white text-sm">25(30%)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[15px] h-[50px] bg-[#01C793] rounded-tl-[10px] rounded-bl-[10px]"></div>
              <div className=" flex flex-col">
                <span className="text-[#01C793] text-xl font-semibold">
                  1579
                </span>
                <span className="text-white text-sm">15(20%)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[15px] h-[50px] bg-[#F9BC00] rounded-tl-[10px] rounded-bl-[10px]"></div>
              <div className=" flex flex-col">
                <span className="text-[#F9BC00] text-xl font-semibold">
                  573
                </span>
                <span className="text-white text-sm">9(10%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderType;
