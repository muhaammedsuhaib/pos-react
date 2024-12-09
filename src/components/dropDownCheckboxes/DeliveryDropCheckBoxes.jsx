import React, { useState } from 'react'
import CheckBox from '../customeCheckbox/CheckBox'
import Delivery_Modal from '../delivery_Modal/Delivery_Modal';

function DeliveryDropCheckBoxes() {

    const [openDeliveryModal, setOpenDeliveryModal]=useState(false)

    const handleChange = (value) => {
      console.log("changed:", value);
    };
  return (
    <>
    
      <div className="w-full flex flex-col gap-1 xl:gap-3 p-3 mx-auto relative  bg-primeryThird rounded-lg">
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">ORDER RECEIVED:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">STARTED COOKING:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">COOKING DONE:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">ASSIGNED DRIVER:</p>
            <p className="h-full flex items-center">10:33 PM</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">DELIVERED:</p>
            <p className="h-full flex items-center">11:25 PM</p>
            <p className="h-full flex items-center">(23 M)</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">PAYMENT:</p>
            <p className="h-full flex items-center">00:00</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 text-[#838B9B]">
          <CheckBox onChange={handleChange} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium">
            <p className="col-span-2">SETTLE & CLOSE:</p>
            <p className="h-full flex items-center">00:00</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-3 mx-auto relative bg-primeryThird rounded-lg">
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium text-red-500">
            <p className="col-span-2">CANCEL ORDER:</p>
            <p className="h-full flex items-center">00:00</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>
        <div className="flex items-center w-full gap-1">
          <CheckBox onChange={handleChange} borderColor={"red"} />
          <div className="grid grid-cols-4 gap-1 flex-1 text-[12px] xl:text-sm 2xl:text-base font-medium text-red-500">
            <p className="col-span-2">FREE / STAFF</p>
            <p className="h-full flex items-center">00:00</p>
            <p className="h-full flex items-center"></p>
          </div>
        </div>

      </div>
      <Delivery_Modal
          openModal={openDeliveryModal}
          setOpenModal={setOpenDeliveryModal}
        />
    </>
  )
}

export default DeliveryDropCheckBoxes