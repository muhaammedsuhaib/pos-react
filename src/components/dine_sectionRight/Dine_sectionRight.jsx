import { useState } from "react";
import SelectedItem from "../selectedItem/SelectedItem";
import clockIcon from "/Clock_Icon.svg";
import editIcon from "/Edit.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BottumSec from "../BottumSec/BottumSec";
import DropDown from "./dropDown/DropDown";

const Dine_sectionRight = () => {
    const [dropShow, setDropShow] = useState(false);

    return (
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* first section */}
          <div
            className={`w-full p-1 xl:p-2 pb-2 bg-[#5CAC88] grid grid-cols-2  space-x-[10px] relative ${
              dropShow ? "rounded-t-xl" : "rounded-xl"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="flex justify-between items-center gap-1 xl:gap-3 w-full xl:w-[100%]">
                <p className="text-white text-sm xl:text-base text-nowrap">
                  Order ID
                </p>
                <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center text-sm 2xl:text-base w-[110px] 2xl:w-[150px] justify-between">
                  10375 (KOT-1)
                </span>
              </div>
              <div className="flex justify-between items-center gap-1 xl:gap-3 w-full xl:w-[100%]">
                <p className="text-white text-sm xl:text-base">Type</p>
                <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[110px] 2xl:w-[150px] justify-between">
                  Dine-in
                  <span>
                    <img src={editIcon} alt="edit" width={25} />
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center gap-1 xl:gap-3 w-full xl:w-[100%]">
                <p className="text-white text-sm xl:text-base">Table</p>
                <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[110px] 2xl:w-[150px] justify-between">
                  Table-3
                  <span>
                    <img src={editIcon} alt="edit" width={25} />
                  </span>
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div className="bg-[#C7EBC5] flex p-2 items-center gap-2 rounded-lg">
                <div>
                  <img src={clockIcon} alt="clock" width={50} />
                </div>
                <div className="grid grid-cols-1 w-[100%] xl:w-[80%] text-base xl:text-base">
                  <div className="flex justify-between">
                    <p>Kitchen tiem:</p>
                    <p className="font-bold text-[#2F5B47]">25</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Dining tiem:</p>
                    <p className="font-bold text-[#2F5B47]">35</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#C7EBC5] p-2 flex justify-between items-center rounded-lg">
                <p>Waiter: James</p>
                <span className="cursor-pointer">
                  <img src={editIcon} alt="" width={25} />
                </span>
              </div>
            </div>

            {/* drop down arrow button */}
            <div
              className={`absolute -bottom-5 left-1/2 -translate-x-[50%]  bg-[#5CAC88] ${
                dropShow
                  ? "border-2 border-white z-50 p-1 rounded-full"
                  : "px-2 rounded-b-full"
              }`}
              onClick={() => setDropShow((prev) => !prev)}
            >
              {!dropShow ? (
                <IoIosArrowDown
                  size={25}
                  color="#fff"
                  className="font-bold shadow-2xl"
                />
              ) : (
                <IoIosArrowUp
                  size={25}
                  color="#fff"
                  className="font-bold shadow-2xl"
                />
              )}
            </div>

            {/* drop down area */}
            <DropDown dropShow={dropShow} />
          </div>

          {/* list area */}
          <div className="flex flex-col gap-4  mt-6 list_sec overflow-y-auto">
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
          </div>
        </div>
        <div>
          <div className="w-full bg-primerySecond rounded-lg p-2 flex gap-2 relative my-5 ">
            <button className="flex-grow bg-primeryFirst shadow-lg p-2 text-white rounded-xl text-sm xl:text-base">
              UPDATE ORDER & PRINT KOT
            </button>
            <div className="bg-green-900 text-base rounded-lg shadow-lg text-white flex items-center p-1">
              TOTAL: <span className="font-semibold">399.00</span>
            </div>
            <div className="px-2 rounded-b-xl absolute top-full left-[50%] -translate-x-[50%] bg-red-500">
              <p className="text-xs text-white">UNPAID</p>
            </div>
          </div>
          <BottumSec />
        </div>
      </div>
    );
};

export default Dine_sectionRight;
