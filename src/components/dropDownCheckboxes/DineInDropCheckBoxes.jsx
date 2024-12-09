import React from "react";
import CheckBox from "../customeCheckbox/CheckBox";
import { Select } from "antd";
import { useSelector } from "react-redux";

function DineInDropCheckBoxes() {
  const handleChange = (value) => {
    console.log("changed:", value);
  };

  const isChecked = (time) => {
    return time && time !== "00:00"; // Check if there's a valid time
  };

  const isDisabled = (time) => {
    return time === "00:00"; // Disable checkbox if there's no valid time
  };

  const orderDetails = useSelector((state) => state.cart.orderInfo);

  return (
    <>
      <div className="w-full flex flex-col gap-1 xl:gap-3 p-3 mx-auto relative  bg-primeryThird rounded-lg">
        <div className="flex items-center w-full gap-1">
          <CheckBox
            onChange={(newChecked) => {
              console.log("Checkbox changed:", newChecked);
            }}
            checked={isChecked(orderDetails?.order_received?.time)}
            disabled={isDisabled(orderDetails?.order_received?.time)}
          />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium">
            <p className="col-span-2">{orderDetails?.order_received?.label}</p>
            <p className="h-full flex items-center">
              {orderDetails?.order_received?.time || "00:00"}
            </p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 ">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium">
            <p className="col-span-2">{orderDetails?.started_cooking?.label}</p>
            <p className="h-full flex items-center">
              {orderDetails?.started_cooking?.time || "00:00"}
            </p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 ">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium">
            <p className="col-span-2">{orderDetails?.cooking_done?.label}</p>
            <p className="h-full flex items-center">
              {orderDetails?.cooking_done?.time || "00:00"}
            </p>
            <p>{orderDetails?.cooking_done?.duration || "(00 M)"}</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem] pr-[5px] 3xl:text-[1rem] font-medium">
            <p className="col-span-2">{orderDetails?.assigned_driver?.label}</p>
            <p className="h-full flex items-center">
              {orderDetails?.assigned_driver?.time || "00:00"}
            </p>
            <p>
              <Select
                className="h-[25px] w-[100px]"
                placeholder="Driver"
                disabled
              />
            </p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium">
            <p className="col-span-2">{orderDetails?.delivered?.label}</p>
            <p className="h-full flex items-center">
              {orderDetails?.delivered?.time || "00:00"}
            </p>
            <p></p>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col gap-1 xl:gap-3 p-3 mx-auto relative  bg-primeryThird rounded-lg">
        <div className="flex items-center w-full gap-1 ">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium text-red-500">
            <p className="col-span-2">ORDER CANCELLED:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 ">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[0.8rem]  3xl:text-[1rem] font-medium text-red-500">
            <p className="col-span-2">STARTED COOKING:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p></p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DineInDropCheckBoxes;
