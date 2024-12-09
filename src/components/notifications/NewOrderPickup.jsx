import React, { useState } from "react";
import "./notification.css";

import wApp from "../../../public/images/whatsapp.png";
import { ConfigProvider, DatePicker, Modal, TimePicker } from "antd";
import { CloseCircleOutlined, EyeFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { MdDateRange } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function NewOrderPickup() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const onDateChange = (date) => {
    setSelectedDate(date ? dayjs(date).format("DD/MM/YYYY HH:mm") : null);
  };

  const handleClick = () => {
    setChecked((prev) => {
      const newChecked = !prev;
      setChecked(!checked);
      return newChecked;
    });
  };
  return (
    <Modal
      className="posPopup"
      footer={null}
      title="NEW ORDER (NO. 32355)"
      width={600}
      open
    >
      <div className="w-full bg-black">
        <div className="w-full flex items-center flex-col justify-center py-[3px] h-[80px]">
          <h1 className="text-white font-[400] text-[1rem]">
            NEW WEB ORDER RECEIVED
          </h1>
          <div className="w-full flex items-center justify-center relative z-[2]">
            <button className="flex  items-center font-medium justify-between rounded-md w-[120px] px-[10px] py-[2px] text-[14px]  bg-primeryFirst space-x-[10px] border border-white hover:border-primerySecond active:border-primeryFirst active:bg-black text-white">
              <EyeFilled className="text-[1.2rem]" />
              <span>PICK-UP</span>
            </button>
            <div className="absolute bottom-[-18px] left-0 w-full flex justify-center">
              <div className="bg-[#A40020] text-white text-[12px] px-[30px] pt-[5px] rounded-b-[15px] z-[-1]">
                Unpaid
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[15px] h-[180px] table-container overflow-x-auto">
          <table className="w-full notification-table">
            <thead className="bg-[#4A4A4A] text-white font-light">
              <th className="font-[300] border-r-[1px] border-white py-[5px] w-[60%] text-start pl-[5px]">
                Item Name
              </th>
              <th className="font-[300] border-r-[1px] border-white py-[5px] w-[20% ]">
                Qty.& Price
              </th>
              <th className="font-[300] border-r-[1px] border-white py-[5px] w-[20%]">
                Pice (AED)
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Grilled Chicken</td>
                <td>3 x 45.50</td>
                <td>135.50</td>
              </tr>
              <tr>
                <td>Arabic Shawarma</td>
                <td>2 x 45.50</td>
                <td>91.00</td>
              </tr>
              <tr>
                <td>Butter Chicken</td>
                <td>5 x 45.50</td>
                <td>245.50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Sub Total</td>
                <td>381.00</td>
              </tr>
              <tr>
                <td colSpan={2}>Vat (5%)</td>
                <td>17.25</td>
              </tr>
              <tr>
                <td colSpan={2}>Coupon Discount</td>
                <td>35.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className=" bg-[#4B4B4B] p-1">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <img src={wApp} alt="" width={30} />
              <p>Jessica Alba (+971506688553)</p>
            </div>
            <div className="border border-[#A2A2A2] rounded-[3px] w-[40%] text-white flex justify-between items-center bg-black py-[2px] px-2 mr-2">
              <span>Total Amount:</span>
              <span style={{ fontWeight: "900" }}>353.25</span>
            </div>
          </div>
          <div className=" flex justify-between items-center pt-3 pb-2">
            <div className="flex items-center gap-2 text-white w-[50%]">
              <label htmlFor="">Pick-up Date</label>
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#c0c0c0",
                  },
                }}
              >
                <DatePicker
                  onChange={onDateChange}
                  value={
                    selectedDate
                      ? dayjs(selectedDate, "DD/MM/YYYY HH:mm")
                      : null
                  }
                  format="DD/MM/YYYY HH:mm"
                  showTime
                  suffixIcon={false}
                  className="w-[60%] bg-transparent border border-[#959595] focus:border-white rounded-[5px] h-[35px]"
                  placeholder="01/10/2032 - 12:50 PM"
                />
              </ConfigProvider>
            </div>
            <div className="space-x-2 w-[50%] flex items-center justify-end">
              <button
                onClick={handleClick}
                className="bg-white w-[30px] h-[30px] rounded-[8px] flex justify-center items-center"
              >
                <FaCheck
                  className={`${checked ? "block" : "hidden"}`}
                  color="#4B4B4B"
                  size={15}
                />
              </button>
              <label htmlFor="" className="text-white">
                Reminder for KOT
              </label>
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#2a2a2a",
                  },
                }}
              >
                <TimePicker className="w-[100px] border-2 border-[#F95433]" placeholder="10:30PM" prevIcon={<CloseCircleOutlined />} />
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div className="bg-black p-3 text-white flex justify-center items-center gap-8">
          <button className="bg-[#A10020] rounded-[6px] leading-4 py-[3px] px-4  w-[120px] border">
            REJECT ORDER
          </button>

          <button className="bg-[#407F63] rounded-[6px] leading-4 py-[3px] px-4  w-[150px] border hover:border-none">
            ACCEPT & SAVE (Future Order)
          </button>

          <button className="bg-[#407F63] rounded-[6px] leading-4 py-[3px] px-4  w-[120px] border hover:border-none">
            ACCEPT & PRINT K.O.T.
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NewOrderPickup;
