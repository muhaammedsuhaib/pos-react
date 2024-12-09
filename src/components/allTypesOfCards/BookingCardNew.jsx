import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import BookingMiniBox from '../bookingMinBox/BookingMiniBox'
import { IoIosArrowDown } from 'react-icons/io'
function BookingCardNew({ tableNo, count, data }) {
  return (
    <div className="bg-white h-[180px] rounded-[20px] px-[7px] py-[7px] relative hover:border-[2px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper cursor-pointer">
      <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
        <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
          <PlusOutlined className='text-white text-[20px]' />
        </div>
      </div>
      <div className="w-full h-[165px] rounded-[10px] bg-[#476E2C] mediumShadow overflow-hidden flex flex-col">
        <div className="w-full text-center uppercase text-white text-[0.9rem] font-medium">{tableNo}</div>
        <div className="flex flex-col items-center w-full gap-y-[5px] h-[125px] px-[3px] overflow-y-scroll scrollBarHidden">
          {data && data.Orders && Array.isArray(data.Orders) && data.Orders.length ? data.Orders.map((row, index) => (
            <BookingMiniBox
              key={index} count={55} startTime={'10:30'} endTime={'12:30'}
            />
          )) : <></>}
          {/* {Array.from({ length: count }).map((_, index) => (
            <BookingMiniBox key={index} count={55} startTime={'10:30'} endTime={'12:30'} />
          ))} */}
        </div>
        {count > 3 && (
          <div className="flex-grow flex items-center justify-center">
            <IoIosArrowDown className="text-white" />
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingCardNew