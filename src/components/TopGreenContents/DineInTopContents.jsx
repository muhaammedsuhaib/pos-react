import { useState } from "react";
import OrderType_modal from "../orderType_modal/OrderType_modal"
import clockIcon from "/Clock_Icon.svg";
import editIcon from "/Edit.svg";
import { useDispatch, useSelector } from "react-redux";


function DineInTopContents() {
    const [orderTypeModalOpen, setOrderTypeModalOpen] = useState(false);
    const dispatch = useDispatch();
    const savedOrderDetails = useSelector((state) => state.cart.orderInfo);
    const OrderDetails = useSelector((state) => state.cart);
    console.log('savedOrderDetails:', OrderDetails);
  return (
    <>
     <div className="flex flex-col items-center justify-between  w-[50%]">
      <div className="flex items-center gap-2 3xl:gap-3 w-full xl:w-[100%] 3xl:text-[1rem] text-[0.8rem] ">
        <p className="text-white text-nowrap w-[50px]">Order</p>
        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[120px] 2xl:w-[150px] justify-between 3xl:text-[1rem] text-[0.8rem]">
        {savedOrderDetails?.uid} ({savedOrderDetails?.kotNo})
        </span>
      </div>
      <div className="flex items-center gap-2 3xl:gap-3 w-full xl:w-[100%] 3xl:text-[1rem] text-[0.8rem] ">
        <p className="text-white w-[50px]">Type</p>
        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[120px] 2xl:w-[150px] justify-between 3xl:text-[1rem] text-[0.8rem]">
          {savedOrderDetails?.order_type_title}
          <span
            id="icon-container"
            onClick={() => setOrderTypeModalOpen(true)}
            className="cursor-pointer"
          >
            <img
              id="icon-image"
              src={editIcon}
              alt="edit"
              className="w-[20px] 3xl:w-[25px]"
            />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-2 3xl:gap-3 w-full xl:w-[100%] 3xl:text-[1rem] text-[0.8rem]">
        <p className="text-white w-[50px]">Table</p>
        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center w-[120px] 2xl:w-[150px] justify-between 3xl:text-[1rem] text-[0.8rem]">
          {savedOrderDetails?.table_no}
          <span id="icon-container" className="cursor-pointer">
            <img
              id="icon-image"
              src={editIcon}
              alt="edit"
              className="w-[20px] 3xl:w-[25px]"
            />
          </span>
        </span>
      </div>
    </div>

    <div className=" flex flex-col justify-between xl:text-sm 2xl:text-base w-[50%]">
      <div className="bg-[#C7EBC5] flex 2xl:p-2 xl:py-[0] py-[5px] px-2 items-center gap-2 rounded-lg ">
        <div className="hidden xl:block">
          <img src={clockIcon} alt="clock" className="w-[30px]" />
        </div>
        <div className="flex flex-col w-[100%] xl:w-[80%] text-[0.8rem] 3xl:text-[1rem]">
          <div className="flex justify-between">
            <p>Start:</p>
            <p className="">{savedOrderDetails?.start_time}</p>
          </div>
          <div className="flex justify-between">
            <p>End:</p>
            <p className=""> {savedOrderDetails?.end_time}</p>
          </div>
        </div>
        <div className="bg-black rounded-lg text-center text-white p-[4px] xl:px-2 xl:py-1 block text-[1rem]">
          <p className="text-[0.8rem]">{savedOrderDetails?.time_difference}</p>
          {/* <p className="text-[0.8rem]">Minutes</p> */}
        </div>
      </div>
      <div className="bg-[#C7EBC5] p-2 py-[5px] mt-[2px] flex justify-between items-center rounded-lg 3xl:text-[1rem] text-[0.8rem]">
        <p>Waiter: {savedOrderDetails?.waiter_name}</p>
        <span id="icon-container">
          <img
            id="icon-image"
            src={editIcon}
            alt="edit"
            className="w-[20px] 3xl:w-[25px]"
          />
        </span>
      </div>
    </div>
    <OrderType_modal
        openModal={orderTypeModalOpen}
        setOpenModal={setOrderTypeModalOpen}
      />
    </>
  )
}

export default DineInTopContents