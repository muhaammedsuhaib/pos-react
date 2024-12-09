/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import OrderType_modal from "../orderType_modal/OrderType_modal";
import DropDown from "../sectionRightMain/sectionRight/dropDown/DropDown";
import NewGreenTop from "../TopGreenContents/NewGreenTop";

function RightSectionTopGreen({ page }) {
  const [dropShow, setDropShow] = useState(false);
  const [orderTypeModalOpen, setOrderTypeModalOpen] = useState(false);
  return (
    <div
      className={`w-full pt-2 px-2  mt-[3px]  bg-[#5CAC88]
       
       relative z-[50] h-full ${
         dropShow ? "rounded-t-[5px]" : "rounded-[5px]"
       } `}
      style={{ boxShadow: "0 5px 5px -2px rgba(0, 0, 0, 0.5)" }}
    >

      <NewGreenTop page={page} dropShow={dropShow}/>

      {/* drop down arrow button */}
      {!dropShow && (
      <div
        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 bg-[#5CAC88] hoverEffect active:bg-black ${
          dropShow
            ? "border-2 border-white z-50 p-1 rounded-full"
            : "px-2 rounded-b-full"
        }`}
        onClick={() => setDropShow((prev) => !prev)}
        style={{ boxShadow: "0 5px 5px -2px rgba(0, 0, 0, 0.5)" }}
      >
          <IoIosArrowDown
            size={25}
            color="#fff"
            className="font-bold shadow-2xl cursor-pointer"
          />
      </div>
      ) }

      {/* drop down area */}
      <DropDown dropShow={dropShow} setDropShow={setDropShow} page={page} />

      <OrderType_modal
        openModal={orderTypeModalOpen}
        setOpenModal={setOrderTypeModalOpen}
      />
    </div>
  );
}

export default RightSectionTopGreen;
