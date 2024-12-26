import React, { useState } from "react";
import PieDiagram from "../piediagram/PieDiagram";
import { DatePicker } from "antd";
import DateBar from "../../dateBar/DateBar";
import dayjs from "dayjs";

function PaymentMethod() {

  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);
  return (
    <>
      <div className="bg-[#0B1A33] p-5 pb-10 w-full rounded-[30px] relative ">
        <PieDiagram />
        <DateBar
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
        />
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
