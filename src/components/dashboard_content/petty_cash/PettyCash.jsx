import React, { useState } from "react";
import PieDiagram from "../piediagram/PieDiagram";
import { DatePicker } from "antd";

import Chart from "react-apexcharts";
const { RangePicker } = DatePicker;
function PettyCash() {

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Opening Balance", "Added", "Spent", "Cash on Hand"],
    colors: ["#F85631", "#ADD713", "#01C793", "#F9BC00"],
    legend: {
      show:false,
      position: "bottom",
    },
    dataLabels: {
      enabled: false, // Disable percentage labels
    },
  };

  const chartSeries = [525, 5000, 1579, 3475]; // Data values

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
        <div className="2xl:h-[300px] flex items-center flex-col 2xl:flex-row w-full px-3">
          <div className="h-[250px] w-[320px] relative">
            <img
              src="./public/images/dashboradSales/Pie chart base-2.png"
              alt=""
              className="h-full w-full"
            />
            <div className="absolute top-[-48px] left-[-12px]">
              <div
                style={{
                  display: "inline-block",
                  transform: `rotateX(65deg)`,
                  transformOrigin: "center center",
                  transition: "transform 0.5s ease",
                }}
              >
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="pie"
                  style={{
                    width: "280px",
                    margin: "auto",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pt-2 2xl:pt-0 flex-grow">
            <div className="gap-y-2 2xl:space-y-4 grid grid-cols-2 2xl:block">
              
              <div className="flex gap-2 ">
                <p className="text-white self-center text-right w-[80%] 2xl:w-[60%]">
                  Opening Balance
                </p>
                <div className="w-[15px] h-[50px] bg-[#F85631] rounded-tl-[10px] rounded-bl-[10px] "></div>
                <span className="text-[#F85631] self-center text-2xl font-semibold">
                  525
                </span>
              </div>
              <div className="flex gap-2 ">
                <p className="text-white self-center text-right w-[80%] 2xl:w-[60%]">
                  Added
                </p>
                <div className="w-[15px] h-[50px] bg-[#ADD713] rounded-tl-[10px] rounded-bl-[10px]"></div>
                <span className="text-[#ADD713] self-center text-2xl font-semibold">
                  5000
                </span>
              </div>
              <div className="flex gap-2">
                <p className="text-white self-center text-right w-[80%] 2xl:w-[60%]">
                  Spent
                </p>
                <div className="w-[15px] h-[50px] bg-[#01C793] rounded-tl-[10px] rounded-bl-[10px]"></div>
                <span className="text-[#01C793] self-center text-2xl font-semibold">
                  1579
                </span>
              </div>
              <div className="flex gap-2">
                <p className="text-white self-center text-right w-[80%] 2xl:w-[60%]">
                  Cash on Hand
                </p>
                <div className="w-[15px] h-[50px] bg-[#F9BC00] rounded-tl-[10px] rounded-bl-[10px]"></div>
                <span className="text-[#F9BC00] self-center text-2xl font-semibold">
                  3475
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PettyCash;
