import { FaMinus, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import orderIcon from "/Order.svg";


function SelectedVariantItem() {
  return (
    <div className="flex">
      <div className="bg-[#B9D3E9] h-[70px] w-5 flex items-center justify-center rounded-full shadow-xl -mr-3 z-20 relative">
        <span className="rounded-full p-[5px] bg-[#006FBF] text-white text-center scale-105 absolute -top-[2px]">
          <FaPlus size={17} />
        </span>
        <span className="text-lg font-semibold">1</span>
        <span className="rounded-full p-[5px] bg-[#006FBF] text-white text-center scale-105 absolute -bottom-[2px]">
          <FaMinus size={17} />
        </span>

        {/* overlay */}
        {/* <span className="w-[calc(100%+2px)] h-[calc(100%+10px)] opacity-50 bg-[#4bb1ff] absolute -top-1 rounded-xl left-0"></span> */}
      </div>
      <div className="w-full pl-3 xl:pl-4 py-1 pr-1 flex flex-col bg-[#F7F1ED]  rounded-[35px] relative">
        <div className=" w-full flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="relative">
            <img src="/bibimbap.png" alt="menu" width={70} />
            <span className="bg-black p-1 rounded-full border-2 border-white absolute -bottom-1 right-50 translate-x-[50%] ">
              <img src={orderIcon} alt="printer" width={25} />
            </span>
          </div>
          <div className="font-semibold text-base xl:text-lg flex-grow overflow-hidden ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">
              Mix Seafood Cajun for two
            </p>
            <p className="text-[13px]">35 x 1 = 35</p>
          </div>
        </div>
        <span className="rounded-full px-1 xl:px-2 bg-[#BDD7EE] font-semibold text-sm xl:text-base text-nowrap ">
          AED 35.00
        </span>
        <span className="absolute -top-2 border-2 border-white right-0 p-1 bg-red-500 rounded-full z-20">
          <IoClose size={20} color="#fff" fontWeight={700} />
        </span>
        </div>

        {/* overlay */}
        {/* <span className="w-full h-full bg-[#0c8ef1] opacity-50 absolute top-0 left-0 rounded-full"></span> */}
        <div className="w-full bg-[#F7F1ED] py-[10px]  rounded-b-[35px] flex ">
            <div className="w-[70%] flex flex-col space-y-[5px]">
                <div className="w-full rounded-[5px] pl-[5px] bg-[#D7DBE4] py-[3px]">
                    <p className="text-[12px]">Oty: 3 Pcs.</p>
                </div>
                <div className="w-full rounded-[5px] pl-[5px] bg-[#D7DBE4] py-[3px] text-[12px] flex flex-col space-y-[5px]">
                    <p>1 x Fries (small )___________AED 10.00</p>
                    <p>1 x Fries (small )___________AED 10.00</p>
                    <p>1 x Fries (small )___________AED 10.00</p>
                </div>
            </div>
            <div className="w-[30%] flex items-center justify-end"><span className="rounded-full px-1 xl:px-2 bg-[#BDD7EE] font-semibold text-sm xl:text-base text-nowrap ">
          AED 35.00
        </span></div>
        </div>
      </div>
      
    </div>
  )
}

export default SelectedVariantItem