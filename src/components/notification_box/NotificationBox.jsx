import React, { useState } from "react";
import { FaBell, FaCheck } from "react-icons/fa";
import "./notification.css";

function NotificationBox({
  setOpen,
  type,
  time,
  table,
  customerName,
  reminder,
  New,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`${
        isChecked === true ? "bg-[#00AC4E]" : "bg-[#f90000]"
      }  rounded-[8px] pl-[6px] w-[95%] cursor-pointer`}
      onClick={() => setOpen(true)}
    >
      <div
        className={`w-full bg-[#F3EEE7] rounded-[8px] py-[5px] pl-[8px] pr-[25px] relative border active:bg-primeryFirst  active:text-white ${
          isChecked === true
            ? "hover:border-[#00AC4E]"
            : "hover:border-primeryFirst"
        } `}
      >
        <div className="flex items-center gap-2">
          <div>
            {type === "booking" && (
              <img
                src="/public/images/pos-category-images/withdrawal_black.svg"
                alt=""
                width={40}
              />
            )}
            {type === "pickup" && (
              <img
                src="/public/images/pos-category-images/takeaway-black.svg"
                alt=""
                width={40}
              />
            )}
          </div>
          <div className="w-full space-y-1 font-semibold  text-[14px]">
            <div className="flex justify-between uppercase">
              <div>
                {New && "new"}{" "}
                {type === "call-waiter"
                  ? "call waiter"
                  : type === "booking"
                  ? "booking"
                  : type === "delivery"
                  ? "delivery order"
                  : "pick-up"}{" "}
                {reminder && "reminder"}
              </div>
              <div>{table}</div>
            </div>
            <div className="flex justify-between">
              <div className="uppercase text-primeryFirst">{time}</div>
              <div className="capitalize">{customerName}</div>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            setIsChecked(!isChecked);
            e.stopPropagation();
          }}
          className={`bell-circle absolute top-1/2 right-[-40px] transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] border-[6px] border-[#F3EEE7] rounded-full  ${
            isChecked === true ? "bg-[#00AC4E]" : "bg-[#f90000]"
          } hover:border-black text-white flex justify-center items-center`}
        >
          {isChecked === true ? <FaCheck /> : <FaBell />}
        </div>
      </div>
    </div>
  );
}

export default NotificationBox;
