import React, { useState } from "react";
import CheckBox from "../../customeCheckbox/CheckBox";

function KotCheckboxeBox() {
  const [checkedStates, setCheckedStates] = useState({
    startedCooking: false,
    cookingDone: false,
    served: false,
  });

  const handleCheckboxChange = (key) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className="flex items-center w-full">
      <div className="w-[20px] h-[5px] bg-white"></div>
      <div className="bg-white rounded-[15px] w-full h-[130px] relative flex p-1">
        <div className="h-full w-[50px] flex justify-center items-center">
          <p className="text-sm font-bold text-[#3E7A5F] -rotate-90 ml-[-25px]">
            KOT-237
          </p>
        </div>
        {/* <div className="bg-[#7DBA9E] flex-grow space-y-1 p-2 pr-4 ml-[-22px] rounded-tr-[15px] rounded-br-[15px] uppercase font-medium">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <CheckBox />
              <p className="">started cooking</p>
            </div>
            <p>10.33 PM</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <CheckBox />
              <p className="">cooking done</p>
            </div>
            <p>10.33 PM</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <CheckBox />
              <p className="">served</p>
            </div>
            <p>10.33 PM</p>
          </div>
        </div> */}

        <div className="bg-[#7DBA9E] flex-grow space-y-1 p-2 pr-4 ml-[-22px] rounded-tr-[15px] rounded-br-[15px] uppercase font-medium">
          {/* Started Cooking */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div onClick={() => handleCheckboxChange("startedCooking")}>
                <CheckBox />
              </div>
              <p
                className={`${
                  checkedStates.startedCooking
                    ? "text-[#000]"
                    : "text-[#7C7C7C]"
                }`}
              >
                started cooking
              </p>
            </div>
            <p
              className={`${
                checkedStates.startedCooking ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              10.33 PM
            </p>
          </div>

          {/* Cooking Done */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div onClick={() => handleCheckboxChange("cookingDone")}>
                <CheckBox />
              </div>
              <p
                className={`${
                  checkedStates.cookingDone ? "text-[#000]" : "text-[#7C7C7C]"
                }`}
              >
                cooking done
              </p>
            </div>
            <p
              className={`${
                checkedStates.cookingDone ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              10.33 PM
            </p>
          </div>

          {/* Served */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div onClick={() => handleCheckboxChange("served")}>
                <CheckBox />
              </div>
              <p
                className={`${
                  checkedStates.served ? "text-[#000]" : "text-[#7C7C7C]"
                }`}
              >
                served
              </p>
            </div>
            <p
              className={`${
                checkedStates.served ? "text-[#000]" : "text-[#7C7C7C]"
              }`}
            >
              10.33 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KotCheckboxeBox;
