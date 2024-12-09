import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Note_Edit_Modal from "../note_edit_modal/Note_Edit_Modal";

const TestingSelected = () => {
  const [noteEditModal, setNoteEditModal] = useState(false);
  return (
    <div className="flex">
      <div className="bg-[#F6F6F6] rounded-xl w-full flex items-center justify-between py-1 px-2 relative">
        <div className="flex gap-1">
          <div className="rounded-full p-1 flex flex-col gap-[2px] bg-[#D9DDE1]">
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black">
              <FaPlus />
            </span>
            <span className="text-primeryFirst text-center font-semibold text-xs xl:text-sm 2xl:text-base">
              1
            </span>
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black">
              <FaMinus />
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <div className="relative flex items-center justify-center">
              <img
                src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
                alt="menu"
                className="w-[55px] xl:w-[70px] h-[60px] rounded-lg"
              />
              <span
                className="bg-black bg-opacity-70 p-1 rounded-lg border-2 border-white absolute -bottom-[10px] xl:left-1/2 xl:-translate-x-1/2 hover:border-primeryFirst active:bg-primeryFirst"
                onClick={() => setNoteEditModal(true)}
              >
                <img
                  src="/public/Order.svg"
                  alt="printer"
                  className="w-[20px] xl:w-[25px]"
                />
              </span>
            </div>
            <div className="font-normal flex-grow overflow-hidden flex flex-col justify-center text-xs xl:text-sm">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                Mix Seafood Cajun for two
              </p>
              <p className="text-xs">5% Tax included</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="rounded-full px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
            AED 35.00
          </p>
        </div>
        <span className="absolute -top-3 xl:-top-2 border-[5px] border-[#515151] -right-[5px] p-1 bg-red-500 rounded-full z-30 hover:border-black active:bg-black">
          <IoClose size={20} color="#fff" />
        </span>
      </div>

      <Note_Edit_Modal
        openModal={noteEditModal}
        setOpenModal={setNoteEditModal}
      />
    </div>
  );
};

export default TestingSelected;
