import React from "react";
import { ConfigProvider, Input, Modal } from "antd";
import "./notification.css";

import wApp from "../../../public/images/whatsapp.png";
import editIcon from "../../../public/images/paymentModalIcons/Edit.svg";
import { EditFilled, EyeFilled } from "@ant-design/icons";

function CallWaiter({ open, setOpen }) {
  return (
    <Modal
      className="posPopupYellow"
      footer={null}
      title="CALL WAITER (NO. 32355)"
      width={600}
      open={open}
      onCancel={() => setOpen(false)}
    >
      <div className="w-full bg-black">
        <div className="w-full flex items-center flex-col justify-center py-[3px] h-[80px]">
          <h1 className="text-white font-[400] text-[1rem]">
            CALL WAITER NOTIFICATION
          </h1>
          <div className="w-full flex items-center justify-center relative z-[2]">
            <button className="flex  items-center font-medium justify-between rounded-md w-[120px] px-[10px] py-[2px] text-[14px]  bg-[#D9A500] space-x-[10px] border border-white hover:border-primerySecond active:border-primeryFirst active:bg-black ">
              <EyeFilled className="text-[1.2rem]" />
              <span className="uppercase">table - 7</span>
            </button>
            <div className="absolute bottom-[-18px] left-0 w-full flex justify-center">
              <div className="bg-[#A40020] text-white text-[12px] px-[30px] pt-[5px] rounded-b-[15px] z-[-1]">
                Unpaid
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[15px] h-[180px] table-container-yellow overflow-x-auto">
          <table className="w-full notification-table ">
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

        <div className=" bg-[#4B4B4B] flex justify-between items-center p-1">
          <div className="flex items-center gap-2 text-white">
            <img src={wApp} alt="" width={30} />
            <p>Jessica Alba (+971506688553)</p>
          </div>
          <div className="border border-[#A2A2A2] rounded-[3px] w-[40%] text-white flex justify-between items-center bg-black py-[2px] px-2 mr-2">
            <span>Total Amount:</span>
            <span style={{ fontWeight: "900" }}>353.25</span>
          </div>
        </div>

        <div className="bg-black p-3 text-white rounded-b-[12px]">
          <div className=" flex justify-between items-center  pb-3">
            <div className="flex items-center gap-2 text-white w-[50%]">
              <label htmlFor="">Reason:</label>
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#efefef",
                  },
                }}
              >
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Customer requesting for Bill"
                  className="bg-primerySecond"
                />
              </ConfigProvider>
            </div>
            <div className="space-x-2 w-[50%] flex items-center justify-end">
              <label htmlFor="">Waiter:</label>
              <ConfigProvider
                theme={{
                  token: {
                    colorTextPlaceholder: "#efefef",
                  },
                }}
              >
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Mohammed"
                  className="bg-primerySecond w-[140px]"
                  suffix={<img src={editIcon} width={20} />}
                />
              </ConfigProvider>
              <img src={wApp} alt="" width={30} />
            </div>
          </div>
          <div className=" flex justify-between items-center gap-8 text-[12px] font-semibold">
            <div>
              <button className="bg-[#3E3E3E] text-[#D9A500] rounded-[6px] leading-4 py-[2px] px-4  w-[160px] border border-[#D9A500] hover:border-none">
                SEND PAYMENT LINK (WhatsApp)
              </button>
            </div>
            <div className="  flex justify-center items-center gap-4">
              <button className="bg-[#D9A500] text-black rounded-[6px] leading-4 py-[2px] px-4  w-[120px] border hover:border-none">
                REMIND AFTER 5 MINUTES
              </button>

              <button className="bg-[#D9A500] text-black rounded-[6px] leading-4 py-[2px] px-4  w-[120px] border hover:border-none">
                ACCEPT & CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CallWaiter;
