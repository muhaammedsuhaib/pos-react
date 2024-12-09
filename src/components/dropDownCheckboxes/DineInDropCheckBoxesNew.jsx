import React, { useState } from "react";
import CheckBox from "../customeCheckbox/CheckBox";
import KotCheckboxeBox from "./kotCheckboxeBox/KotCheckboxeBox";

function DineInDropCheckBoxesNew() {
  const [checkedStates, setCheckedStates] = useState({
    orderReceived: false,
    payment: false,
    settleClose: false,
    cancelOrder: false,
  });

  const handleCheckboxChange = (key) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <>
      <div className="w-full flex flex-col gap-2 p-3 mx-auto relative  bg-primeryThird rounded-lg">
        <div className="flex items-center gap-5 text-[15px] font-medium">
          <div onClick={() => handleCheckboxChange("orderReceived")}>
            <CheckBox />
          </div>
          <div className="w-[60%]">
            <p
              className={`uppercase ${
                checkedStates.orderReceived ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              order received:
            </p>
          </div>
          <div>
            <p
              className={`${
                checkedStates.orderReceived ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              10.33 PM
            </p>
          </div>
        </div>
        <div className="flex items-center text-[15px]">
          <CheckBox />
          <div className="w-[60%] flex-grow">
            <KotCheckboxeBox />
          </div>
        </div>
        <div className="flex items-center text-[15px]">
          <CheckBox />
          <div className="w-[60%] flex-grow">
            <KotCheckboxeBox />
          </div>
        </div>
        <div className="flex items-center gap-5 text-[15px] font-medium">
          <div onClick={() => handleCheckboxChange("payment")}>
            <CheckBox />
          </div>
          <div className="w-[60%]">
            <p
              className={`uppercase ${
                checkedStates.payment ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              payment
            </p>
          </div>
          <div>
            <p
              className={`${
                checkedStates.payment ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              10.33 PM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-[15px] font-medium">
          <div onClick={() => handleCheckboxChange("settleClose")}>
            <CheckBox />
          </div>
          <div className="w-[60%]">
            <p
              className={`uppercase ${
                checkedStates.settleClose ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              settle & close
            </p>
          </div>
          <div>
            <p
              className={`${
                checkedStates.settleClose ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              00.00
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-[15px]  font-medium">
          <div onClick={() => handleCheckboxChange("cancelOrder")}>
            <CheckBox borderColor={"red"} />
          </div>
          <div className="w-[60%]">
            <p
              className={`uppercase ${
                checkedStates.cancelOrder ? "text-[#F90000]" : "text-[#7C7C7C]"
              }`}
            >
              cancel order
            </p>
          </div>
          <div>
            <p
              className={`${
                checkedStates.cancelOrder ? "text-[#F90000]" : "text-[#7C7C7C]"
              }`}
            >
              10.00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DineInDropCheckBoxesNew;
