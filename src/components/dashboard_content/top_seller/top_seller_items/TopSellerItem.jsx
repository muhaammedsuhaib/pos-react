import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

function TopSellerItem() {
  return (
    <><div className="flex justify-between items-center">
    <div className="flex gap-4 items-center">
      <div className="w-[100px] h-[90px] border-4 rounded-xl ">
        <img
          src="./public/demo/v2-4vrq9-utj6i.jpg"
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-[15px] font-bold">
          Mix Seafood Cajun for Two
        </h3>
        <p className="text-[#C6C9D3] text-sm">AED 55.50</p>
        <div className="flex text-xl text-[#EBAA21]">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
      </div>
    </div>
    <div>1234.75</div>
    <div>1234.75</div>
  </div></>
  )
}

export default TopSellerItem