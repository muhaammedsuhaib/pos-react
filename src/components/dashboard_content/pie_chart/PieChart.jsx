import React, { useState } from "react";
import Chart from "react-apexcharts";
import topicon from "../../../../public/images/mainDashbord/topicon.svg"

function PieChart() {
  const chartOptions = {
    series: [60],
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          size: "45%",
        },
        track: {
          show: true,
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "30px", // Reduced font size for smaller screens
            color: "#6FA747",
            offsetY: -10,
          },
          value: {
            show: false,
            fontSize: "18px",
            color: "#fff",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.1,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 30, 80],
      },
    },
    stroke: {
      dashArray: 20,
    },
    labels: ["4573"],
    responsive: [
      {
        breakpoint: 768, // Adjust for tablets and smaller devices
        options: {
          chart: {
            width: "100%", // Full width on smaller screens
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "30%", // Adjust hollow size for smaller screens
              },
              dataLabels: {
                name: {
                  fontSize: "14px", // Smaller font size
                },
                value: {
                  fontSize: "14px", // Smaller font size
                },
              },
            },
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between gap-5 3xl:gap-0 pt-4">
        <div className="flex gap-5 3xl:gap-10 w-[60%] 3xl:w-[50%] mx-auto">
          {/* <div className="relative w-[25%]">
            <div className="absolute w-[45px] h-[45px] border-[3px] border-primeryFirst rounded-full right-[-12%] top-[10px]"></div>
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type={chartOptions.chart.type}
              width={400}
            />
          </div>
          <div className="relative w-[25%]">
            <div className="absolute w-[45px] h-[45px] border-[3px] border-primeryFirst rounded-full right-[-12%] top-[10px]"></div>
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type={chartOptions.chart.type}
              width={400}
            />
          </div>
          <div className="relative w-[25%]">
            <div className="absolute w-[45px] h-[45px] border-[3px] border-primeryFirst rounded-full right-[-12%] top-[10px]"></div>
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type={chartOptions.chart.type}
              width={400}
            />
          </div> */}
             {[1, 2, 3].map((chart, index) => (
            <div key={index} className="relative w-full sm:w-[30%]">
              <div className="absolute w-[45px] h-[45px] border-[3px] border-primeryFirst rounded-full right-[8%] top-[10px]"><img src={topicon} alt="" /></div>
              <Chart
                options={chartOptions}
                series={chartOptions.series}
                type={chartOptions.chart.type}
                width="160%" // Dynamically adjust based on screen size
              />
            </div>
          ))}
        </div>
        <div className="space-y-3 w-[40%] 3xl:w-[40%]">
          <div className=" bg-[#0A1932] border rounded-full flex items-center gap-3 p-[6px]">
            <div>
              <img
                src="/public/demo/person1.jpg"
                alt=""
                width={70}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className="text-white">
              <h5 className="uppercase text-[#98BEE1] font-medium text-[20px]">
                manager on duty
              </h5>
              <p className="text-sm">Mathew Perry</p>
              <p className="text-sm">Check-in: 09.33 AM (09.30 Hrs)</p>
            </div>
          </div>
          <div className=" bg-[#0A1932] border rounded-full flex items-center gap-3 p-[6px]">
            <div>
              <img
                src="/public/demo/person1.jpg"
                alt=""
                width={70}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className="text-white">
              <h5 className="uppercase text-[#98BEE1] font-medium text-[20px]">
                head-chef on duty
              </h5>
              <p className="text-sm">Jessy Mathew</p>
              <p className="text-sm">Check-in: 09.33 AM (09.30 Hrs)</p>
            </div>
          </div>
          <div className=" bg-[#0A1932] border rounded-full flex items-center gap-3 p-[6px]">
            <div>
              <img
                src="/public/demo/person1.jpg"
                alt=""
                width={70}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className="text-white">
              <h5 className="uppercase text-[#98BEE1] font-medium text-[20px]">
                cashier on duty
              </h5>
              <p className="text-sm">Den Hans</p>
              <p className="text-sm">Check-in: 09.33 AM (09.30 Hrs)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
