/* eslint-disable react/prop-types */

import { BiSolidDownArrow } from "react-icons/bi";
import user_icon from "../../public/icons8-user-100.png";
import "../index.css";
import Pin_Comp from "../components/Pin_Comp/Pin_Comp";
import { IoArrowBackOutline } from "react-icons/io5";

const Pin_modal = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`z-[10000] fixed top-0 left-0 w-screen h-screen bg-[#6F6F6F] bg-opacity-80 ${
        openModal ? "block" : "hidden"
      } `}
    >
      {/* <div className="w-full pl-[20px] pt-[10px]">
      <button className="p-2 rounded-full bg-primeryFirst text-white text-lg font-bold" onClick={()=>setOpenModal(false)}>{"<-"}</button>
    </div> */}
      <div className="w-full h-full p-5 ">
        <div className="w-full flex justify-between gap-3">
          <div>
            <button
              className="p-3 rounded-full bg-primeryFirst shadow-lg"
              onClick={() => setOpenModal(false)}
            >
              <IoArrowBackOutline size={20} color="#fff" />
            </button>
          </div>
          <div className="flex items-end">
            <div
              className="group_card flex px-5 py-3 rounded-2xl bg-[rgba(0,0,0,0.6)] gap-10 relative"
              style={{ boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="bg-[#FFC3B7] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between pin_group_item-card">
                <img
                  src={user_icon} // Replace with your image source
                  alt="Profile"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-center text-black">Maria</p>
              </div>
              <div className="bg-[#FFC3B7] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between pin_group_item-card">
                <img
                  src={user_icon} // Replace with your image source
                  alt="Profile"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-center  text-black">Maria</p>
              </div>
              <div className="bg-[#FFC3B7] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between pin_group_item-card">
                <img
                  src={user_icon} // Replace with your image source
                  alt="Profile"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-center text-black">Maria</p>
              </div>
              <div className="bg-[#FFC3B7] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between pin_group_item-card">
                <img
                  src={user_icon} // Replace with your image source
                  alt="Profile"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-center text-black">Maria</p>
              </div>
              <div className="bg-[#FFC3B7] rounded-xl shadow-lg p-4 flex flex-col items-center justify-between pin_group_item-card">
                <img
                  src={user_icon} // Replace with your image source
                  alt="Profile"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <p className="text-center text-black">Maria</p>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -top-[45px] bg-primeryFirst rounded-full">
                <div className="relative w-full py-1 px-10">
                  <p className="text-white text-center">WAITER LOGIN</p>
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[11px]">
                    <BiSolidDownArrow size={15} color="#FF5838" />
                  </span>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-[115%]">
                <Pin_Comp />
              </div>
            </div>
          </div>

          <div className="px-10 py-4">
            <div
              className="profile-card bg-[rgba(0,0,0,0.7)] rounded-3xl p-3"
              style={{ boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)" }}
            >
              <div>
                <p className="text-white text-center">Master User</p>
              </div>
              <div>
                <div className="w-full bg-primerySecond flex items-center justify-between px-1 rounded-t-md">
                  <span></span>
                  <p>CASHIER </p>
                  <span>
                    <BiSolidDownArrow size={15} />
                  </span>
                </div>
                <div className="bg-primeryThird h-full w-full flex flex-col items-center justify-center rounded-b-3xl px-4">
                  <img src={user_icon} alt="icon" width={"100px"} />
                  <p>Maria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Pin_modal;
