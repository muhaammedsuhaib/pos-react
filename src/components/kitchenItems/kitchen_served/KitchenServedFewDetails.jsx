import React from 'react'
import { IoClose } from 'react-icons/io5'
import { TiTick } from 'react-icons/ti'

function KitchenServedFewDetails() {
  return (
    <div className="mb-[15px] rounded-[10px] overflow-hidden">
    <div className="w-full bg-[#468999] px-[5px]  ">
      <div className="w-full flex items-center justify-between pt-[10px] px-[5px]">
        <div className="text-black font-semibold px-[15px] rounded-[20px] xl:text-[17px] lg:text-[14px] text-[12px] bg-[#D8ECEF]">
          <p>KOT : 33</p>
        </div>
        <div className="text-black font-semibold px-[15px] rounded-[20px] xl:text-[17px] lg:text-[14px] text-[12px] bg-[#D8ECEF]">
          <p>TABLE-7</p>
        </div>
      </div>
      <div className="w-full px-[5px]">
        <div className="w-full rounded-[10px] bg-[#D8ECEF] py-[2px] mt-[5px] pl-[2px]">
          <div className="w-full flex items-center  justify-between border-dashed border-b-[1px] border-[#468999]  py-[2px] px-[3px] pr-[5px]">
            <div className="flex items-center space-x-[3px]">
              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white text-[14px] flex justify-center items-center mt-[5px]">
                3
              </div>
              <span className="text-[11px]  xl:text-[15px] pt-[4px]">Lamp chunk Soup</span>
            </div>
            <div className="flex items-center space-x-[3px] pt-[3px] pr-[10px]">
              <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                <TiTick className="text-white" />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center  justify-between border-dashed  border-b-[1px] border-[#468999]  py-[2px] px-[3px] pr-[5px]">
            <div className="flex items-center space-x-[3px]">
              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white text-[14px] flex justify-center items-center mt-[5px]">
                3
              </div>
              <span className="text-[11px]  xl:text-[15px] pt-[4px]">Burger Tiple Steak</span>
            </div>
            <div className="flex items-center space-x-[3px] pt-[3px] pr-[10px]">
              <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                <TiTick className="text-white" />
              </div>
            </div>
          </div>

          <div className="w-full flex items-center  justify-between border-dashed border-b-[1px] border-[#468999]  py-[2px] px-[3px] pr-[5px]">
            <div className="flex items-center space-x-[3px]">
              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white text-[14px] flex justify-center items-center mt-[5px]">
                3
              </div>
              <span className="text-[11px]  xl:text-[15px] pt-[4px]">Lime Juice</span>
            </div>
            <div className="flex items-center space-x-[3px] pt-[3px] pr-[10px]">
              <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                <TiTick className="text-white" />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center  justify-between border-dashed  border-[#468999]  py-[2px] px-[3px] pr-[5px]">
            <div className="flex items-center space-x-[3px]">
              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white text-[14px] flex justify-center items-center mt-[5px]">
                3
              </div>
              <span className="text-[11px]  xl:text-[15px] pt-[4px]">Burger Tiple Steak</span>
            </div>
            <div className="flex items-center space-x-[3px] pt-[3px] pr-[10px]">
              <div className="w-[16px] h-[16px] bg-red-600 flex items-center justify-center border-gray-500 rounded-[3px]">
                <IoClose className="text-white text-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center  py-[7px] pt-[7px]">
          <div className="w-[150px] lg:w-[200px] bg-black text-center py-[5px] rounded-[20px]  text-white lg:text-[12px] text-[10px] active:bg-primeryFirst cursor-pointer hover:border-[1px] border-white">
            READY TO SERVE
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default KitchenServedFewDetails