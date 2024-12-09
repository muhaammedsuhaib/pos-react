import React from 'react';
import { useDispatch } from "react-redux";
import { PlusOutlined } from '@ant-design/icons';
import { orderTypeDetailsRequest } from '../../reducer/orders/action';
function OrderType({ active, setPage, pageName, modalOpen, count, text, img, type }) {
  const dispatch = useDispatch();
  return (
    <div className={`cat-item-wrapper cursor-pointer w-[90px] h-[100px] ${active ? "bg-primeryFirst" : 'bg-[#77B99C]'} rounded-[20px] flex flex-col  relative hover:border-[4px] border-primeryFirst active:bg-primeryFirst `} onClick={(e) => {
      setPage(pageName)
      dispatch(orderTypeDetailsRequest({ id: type }))
      e.stopPropagation();
    }}>
      <div className="absolute top-[-10px] right-[-15px] xl:w-[45px] md:h-[35px] md:w-[35px] xl:h-[45px] bg-[#FF5838] flex justify-center items-center text-white text-[25px] rounded-full border-[5px] border-[#515151] active:bg-black plus-btn-hover">
        <button className="" onClick={(e) => {
          modalOpen(true)
          e.stopPropagation();
        }}>
          <PlusOutlined />
        </button>
      </div>
      {count && count > 0 ?
        <div className="w-[30px] border-white border rounded-[10px] h-[15px] absolute text-[12px] font-medium bg-red-600 text-white top-[5px] left-[7px] flex justify-center items-center">
          {count}
        </div>
        : <></>}
      <div className="w-full h-[75%] flex justify-center items-center pt-[10px]">
        <img
          src={img}
          className="xl:w-[50px] lg:w-[40px] md:w-[30px]"
        />
      </div>
      <div className="h-[25%] w-full flex justify-center">
        <button className="rounded-[30px] text-white w-[93%] h-full xl:text-[12px] lg:text-[9px] md:text-[8px] category-btn-shadow">
          {text.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default OrderType;