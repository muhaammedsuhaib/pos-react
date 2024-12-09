import React from 'react';
import "./notification.css";

import { Modal } from 'antd';
import wApp from "../../../public/images/whatsapp.png";


function NewReservation() {
  return (
    <Modal
      className="posPopupGreen"
      footer={null}
      title="NEW RESERVATION ORDER (NO. 32355)"
      width={600}
      open
    >
      <div className="w-full bg-black">
        <div className="w-full flex items-center flex-col justify-center pt-2">
          <h1 className="text-white font-[400] text-[1rem]">
            NEW WEB ORDER RECEIVED
          </h1>
          <div className="w-full flex items-center justify-center relative z-[2]">
            <button className="font-medium rounded-md w-[120px] px-[10px] py-[2px] text-[14px] text-center bg-primerySecond space-x-[10px] border border-white hover:border-primerySecond active:border-primeryFirst active:bg-black text-white">
              <span>DELIVERY</span>
            </button>
          </div>
        </div>
        <div className="w-full mt-[15px] h-[180px] table-container overflow-x-auto bg-[#3C3C3C]">
        
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

        <div className="bg-black p-3 text-white flex justify-center items-center gap-8">
          <button className="bg-[#A10020] rounded-[6px] leading-4 py-[2px] px-4  w-[120px] border hover:border-none">
            REJECT ORDER
          </button>

          <button className="bg-[#407F63] rounded-[6px] leading-4 py-[2px] px-4  w-[120px] border hover:border-none">
            ACCEPT & PRINT K.O.T.
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default NewReservation