import { DatePicker } from "antd";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import PieDiagram from "../piediagram/PieDiagram";
import TopSellerItem from "./top_seller_items/TopSellerItem";

const { RangePicker } = DatePicker;
function TopSeller() {
  return (
    <>
      <div className="bg-[#0B1A33] p-5  w-full rounded-[30px] relative h-[875px]">
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
        <div className="text-white pt-4 space-y-8 max-h-[765px] overflow-y-scroll scrollBarHidden p-5 ">
          <TopSellerItem />
          <TopSellerItem />
          <TopSellerItem />
          <TopSellerItem />
          <TopSellerItem />
          <TopSellerItem />
          <TopSellerItem />
        </div>
      </div>
    </>
  );
}

export default TopSeller;
