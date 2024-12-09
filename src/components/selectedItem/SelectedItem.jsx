/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import orderIcon from "/Order.svg";
import Note_Edit_Modal from "../note_edit_modal/Note_Edit_Modal";
import noteIcon from "../../../public/ItemEditIcon.svg";
import { useState } from "react";
import PasswordApprovalModal from "../passwordApprovalModal/PasswordApprovalModal";

const SelectedItem = ({showOverlay,cartItem}) => {
  const [noteEditModal, setNoteEditModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false)

return (
  <>
    <div className="bg-[#F6F6F6] rounded-xl w-full py-1 px-2 relative">
          {/* overlay */}
      {showOverlay && (
          <span className="w-full h-full bg-[#0c8ef1] opacity-70 z-[10] absolute top-0 left-0 rounded-xl"></span>
        )}
      {/* overlay */}
      <div className="bg-[#F6F6F6] rounded-xl w-full flex items-center justify-between relative">
        <div className="flex gap-1">
          <div className="rounded-full p-1 flex flex-col gap-[2px] bg-[#D9DDE1]">
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black cursor-pointer">
              <FaPlus onClick={() => handleToCart(cartItem,true)}/>
            </span>
            <span className="text-primeryFirst text-center font-semibold text-xs xl:text-sm 2xl:text-base">
              {cartItem?.quantity}
            </span>
            <span className="rounded-full p-[3px] bg-[#D8CDCB] text-black text-center border-2 border-transparent border-white active:bg-black cursor-pointer">
              <FaMinus onClick={() => handleToCart(cartItem,false)}/>
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <div className="relative flex items-center justify-center">
              <img
                src={cartItem?.img}
                alt="menu"
                className="w-[70px] h-[55px] xl:h-[60px] rounded-lg"
              />
              <span
                className="bg-black bg-opacity-70 h-[30px] w-[30px] pl-[3px] flex items-center justify-center rounded-lg border-2 border-white absolute -bottom-[10px] xl:left-1/2 xl:-translate-x-1/2 hover:border-primeryFirst active:bg-primeryFirst cursor-pointer"
                onClick={() => setNoteEditModal(true)}
              >
                <img
                  src={noteIcon}
                  alt="printer"
                  className="w-[20px] xl:w-[25px]"
                />
              </span>
            </div>
            <div className="font-normal flex-grow overflow-hidden flex flex-col justify-center text-xs xl:text-sm">
              <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                {cartItem?.name}
              </p>
              <p className="">{cartItem?.price} x {cartItem?.quantity} = {cartItem?.totalNonExtraPrice? cartItem?.totalNonExtraPrice:cartItem?.totalPrice}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pr-2">
          {" "}
          <p className="rounded-lg px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
            AED {cartItem?.totalNonExtraPrice ? cartItem?.totalNonExtraPrice.toFixed(2) : cartItem?.totalPrice.toFixed(2)}
          </p>{" "}
        </div>
        <span className="absolute -top-3 border-[5px] border-[#515151] -right-[15px] p-1 bg-red-500 rounded-full z-30 hover:border-black active:bg-black cursor-pointer">
          <IoClose size={20} color="#fff" onClick={() => handleRemoveCart(cartItem)}/>
        </span>
      </div>
      <div className="flex justify-center items-center pr-2">
        <p className="rounded-lg px-1 xl:px-2 bg-[#FDBCAF] font-semibold text-xs xl:text-sm 2xl:text-base text-nowrap ">
          AED 35.00
        </p>
      </div>
      <span className="absolute -top-3 xl:-top-2 border-[5px] border-[#515151] -right-[5px] p-1 bg-red-500 rounded-full z-30 hover:border-black active:bg-black cursor-pointer"
       onClick={()=>setPasswordModal(true)}
      >
        <IoClose size={20} color="#fff" />
      </span>
    </div>

    <Note_Edit_Modal
      openModal={noteEditModal}
      setOpenModal={setNoteEditModal}
    />
       <PasswordApprovalModal modalOpen={passwordModal} setModalOpen={setPasswordModal} />
 
  </>
);





};

export default SelectedItem;
