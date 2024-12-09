import React from "react";
import PieDiagram from "../piediagram/PieDiagram";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;
function PaymentMethod() {
  return (
    <>
      <div className="bg-[#0B1A33] p-5 pb-10 w-full rounded-[30px] relative ">
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
        <div className=" w-full rounded-[30px]">
          <div className="mt-[10px] w-full flex items-center">
            <div className="w-full p-[10px] flex flex-col gap-y-[10px]">
              {/* bar start */}
              <div className="h-[35px] bg-[#283B62] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[30%]">
                  <p className="uppercase font-normal text-sm xl:text-[16px] text-white">
                    cash
                  </p>
                </div>
                <div className="w-[55%] flex gap-[5px] items-center">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                    <div className="w-[65%] h-full rounded-[30px] pregress-bar "></div>
                    <p className="text-[#3C6325] font-semibold ">65%</p>
                  </div>
                  <p className="font-semibold text-primeryFirst">75</p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <p className="font-semibold text-sm xl:text-[16px] text-white">
                    {" "}
                    533.95
                  </p>
                </div>
              </div>
              {/* bar */}
              <div className="h-[35px] bg-[#283B62] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[30%]">
                  <p className="uppercase font-normal text-sm xl:text-[16px] text-white">
                    cards
                  </p>
                </div>
                <div className="w-[55%] flex gap-[5px] items-center">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                    <div className="w-[13%] h-full rounded-[30px] pregress-bar "></div>
                    <p className="text-[#3C6325] font-semibold ">13%</p>
                  </div>
                  <p className="font-semibold text-primeryFirst">15</p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <p className="font-semibold text-sm xl:text-[16px] text-white">
                    {" "}
                    533.95
                  </p>
                </div>
              </div>
              {/* bar */}
              <div className="h-[35px] bg-[#283B62] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[30%]">
                  <p className="uppercase font-normal text-sm xl:text-[16px] text-white">
                    aggregator
                  </p>
                </div>
                <div className="w-[55%] flex gap-[5px] items-center">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                    <div className="w-[21%] h-full rounded-[30px] pregress-bar "></div>
                    <p className="text-[#3C6325] font-semibold ">21%</p>
                  </div>
                  <p className="font-semibold text-primeryFirst">25</p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <p className="font-semibold text-sm xl:text-[16px] text-white">
                    {" "}
                    533.95
                  </p>
                </div>
              </div>
              {/* bar */}
              <div className="h-[35px] bg-[#283B62] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[30%]">
                  <p className="uppercase font-normal text-sm xl:text-[16px] text-white">
                    others
                  </p>
                </div>
                <div className="w-[55%] flex gap-[5px] items-center">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                    <div className="w-[15%] h-full rounded-[30px] pregress-bar "></div>
                    <p className="text-[#3C6325] font-semibold ">15%</p>
                  </div>
                  <p className="font-semibold text-primeryFirst">15</p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <p className="font-semibold text-sm xl:text-[16px] text-white">
                    {" "}
                    533.95
                  </p>
                </div>
              </div>
              {/* bar */}
              <div className="h-[35px] bg-[#283B62] text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[30%]">
                  <p className="uppercase font-normal text-sm xl:text-[16px] text-white">
                    total sales
                  </p>
                </div>
                <div className="w-[55%] flex gap-[5px] items-center">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                    <div className="w-[100%] h-full rounded-[30px] pregress-bar "></div>
                    <p className="text-[#3C6325] font-semibold hidden">100%</p>
                  </div>
                  <p className="font-semibold text-primeryFirst">79</p>
                </div>
                <div className="w-[20%] flex justify-end">
                  <p className="font-semibold text-sm xl:text-[16px] text-white">
                    {" "}
                    533.95
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
