import { DatePicker } from "antd";
import React from "react";
import PieDiagram from "../piediagram/PieDiagram";
import Chart from 'react-apexcharts';

const { RangePicker } = DatePicker;

function AvgBill() {

  const options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, 
        },
        donut: {
          size: '0%',
        },
        stroke: {
          width: 0,
        }
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <>
      <div className="bg-[#0B1A33] p-5 w-full rounded-[30px] relative">
        <PieDiagram />
        <div className="bg-primeryFirst w-full flex gap-3 p-2 rounded-[30px] mb-4">
          <div className="w-[40%]">
            <RangePicker className="rounded-[30px] h-[35px]" />
          </div>
          <div className="w-[60%] flex 3xl:gap-3 justify-between bg-white rounded-[30px] h-[35px] p-[5px]">
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF]">
              Today
            </div>
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF]">
              This Week{" "}
            </div>
            <div className="rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ">
              {" "}
              This Month
            </div>
          </div>
        </div>
        <div className="h-[300px] flex items-center justify-center w-full px-3">
          <Chart
            options={options}
            series={options.series}
            type="pie"
            height={350}
          />

          <img
            src="/arrowicon.png"
            alt="Arrow"
            className="absolute w-[50px] h-[50px] object-contain"
            style={{
              position: "absolute",
              top: "50%",  // Center vertically
              left: "50%", // Center horizontally
              width: '60px',
              transform: "translate(-53%, -53%)",  // Adjust to center
            }}
          />
        </div>

      </div>
    </>
  );
}

export default AvgBill;
