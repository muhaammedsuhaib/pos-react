import { FaCheck, FaChevronDown } from "react-icons/fa";
import "./kitchen_served.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Kitchen_served = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-[15px] rounded-[10px] overflow-hidden">
      {/* <div className="p-1 text-xs lg:text-sm "> */}
        {/* <div className="w-full bg-[#FEF2F2] p-1 flex items-center justify-between rounded-sm">
          <div
            className="w-[35px] h-[35px] flex items-center justify-center bg-[#F7653C] rounded-md text-white"
            style={{ boxShadow: "0 0 3px 0px black" }}
          >
            <span>9</span>
          </div>
          <p>NEW ORDER</p>
          <span>
            <img src="/public/profile.svg" alt="icon" width={20} />
          </span>
        </div> */}
        {/* <div className="w-full py-2 flex justify-center">
          <FaChevronDown size={17} color="white" />
        </div> */}
        {/* <div className="w-full">
          <div className="w-full rounded-xl p-1 bg-[#28A745] xl:py-3 ">
            <div className="flex px-1 xl:px-2">
              <div>
                <img
                  src="/public/pdf-svgrepo-com.svg"
                  alt="pdf_icon"
                  width={20}
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-white font-semibold  text-xs xl:text-[15px] 2xl:text-[17px] ">
                  Roof Table / Table 2
                </h4>
                <div className="grid grid-cols-2 gap-x-1 xl:gap-1 text-white text-[8px] xl:text-[13px] 2xl:text-[15px] xl:py-2">
                  <p>#10286</p>
                  <p>09:49 am</p>

                  <p>Price: 235.00 AED</p>
                  <p>Dine-in</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-full w-full text-center">
              3m: 51s
            </div>
          </div>
          <div className="bg-[#DCFCE7]">
            <div className="px-2 py-2 text-xs xl:text-sm 2xl:text-base flex items-center justify-start gap-1">
              <FaCheck size={"15px"} className="text-[#28A745]" /> 1x Goursan
            </div>
            <div className="h-[1px] w-full custome-border" />
            <div className="px-2 py-2 text-xs xl:text-sm 2xl:text-base flex items-center justify-start gap-1">
              <FaCheck size={"15px"} className="text-[#28A745]" /> 1x Chicken
              Kabsah
            </div>
            <div className="h-[1px] w-full custome-border" />
            <div className="px-2 py-2 text-xs xl:text-sm 2xl:text-base flex items-center justify-start gap-1">
              <FaCheck size={"15px"} className="text-[#28A745]" /> 1x Naimi Meat
              Magloba
            </div>
            <div className="h-[1px] w-full custome-border" />
            <div className="px-2 py-2 text-xs xl:text-sm 2xl:text-base flex items-center justify-start gap-1">
              <FaCheck size={"15px"} className="text-[#28A745]" /> 1x Hashi
              Steam
            </div>
            <div className="h-[1px] w-full custome-border" />
            <div className="px-2 py-2 text-xs xl:text-sm 2xl:text-base flex items-center justify-between gap-1">
              <span className="flex items-center">
                <IoCloseSharp size={"20px"} className="text-red-500" /> 1x Spicy
                Pepper Salad
              </span>
              {/* <span className="w-[30px] h-[30px] bg-red-500 rounded-md border-2 border-white flex items-center justify-center">
                <IoCloseSharp size={25} className="text-white" />
              </span> */}
            {/* </div> */}
            {/* <div className="h-[1px] w-full custome-border" /> */}

            {/* <div className="w-full flex justify-center py-2">
              <button
                className="p-1 xl:px-2 xl:py-1 text-[10px] xl:text-xs 2xl:text-sm bg-[#28A745] rounded-full text-white"
                style={{
                  boxShadow: "0 0 3px 0px black",
                }}
              >
                MARK AS SERVED
              </button>
            </div>
            <div className="w-full flex justify-center py-2">
              <div
                onClick={() => setShowMore(!showMore)}
                className={`p-[2px] rounded-full bg-[#28A745] ${
                  showMore && "rotate-180"
                } `}
                style={{
                  boxShadow: "0 0 3px 0px black",
                }}
              >
                <FaChevronDown size={15} color="white" />
              </div>
            </div>
            <div
              className={`py-2 px-1 text-[#827E7D] ${!showMore && "hidden"} `}
            >
              <p>
                <span>Name: </span>
                <span className="font-semibold">Safuvan cmc</span>
              </p>
              <p>
                <span>Phone: </span>
                <span className="font-semibold">46476657</span>
              </p>
            </div>
          </div>
        </div>  */}
      {/* </div> */}
      <div className="w-full bg-[#468999] px-[5px] ">
        <div className="w-full flex items-center justify-between">
          <div className="text-white xl:text-[20px] text-[17px]">
            <p>KOT : 27</p>
          </div>
          <div className="text-white xl:text-[13px] text-[11px]">
            <p>ORDER : 323223</p>
          </div>
        </div>
        <div className="w-full px-[5px]">
          <div className="w-full xl:h-[50px] h-[40px] bg-[#D8ECEF] border-[2px] rounded-[30px] flex flex-col justify-center items-center font-medium leading-[15px]">
          <h1 className="font-semibold xl:text-[20px] text-[17px]">TABLE-5</h1>
          <p className="xl:text-[14px] text-[11px] font-semibold">Walk-in Customer</p>
          </div>
          <div className="flex items-center justify-center text-white xl:text-[15px] text-[12px] pt-[3px] mt-[3px]">
            {/* <img src="" alt="clock" /> */}
            <p> <span className="xl:text-[20px] text-[17px]">🕒</span> 01:25 PM (30 Minutes)</p>
          </div>
          <div className="w-full flex justify-center items-center">

          <div className="px-[25px] bg-white h-[30px] rounded-[20px] py-[3px] flex justify-between items-center xl:text-[18px] text-[15px] font-semibold">
            <h1> <span className="animate-spin">⌛</span>  <span className="text-primeryFirst">23</span><span>m</span> <span className="text-primeryFirst">15</span><span>s</span></h1>
          </div>
          </div>
          <div className="w-full rounded-[10px] bg-[#DCFBE7] py-[5px] mt-[8px] px-[2px]">
            <div className="w-full rounded-[20px] h-[25px] flex items-center justify-center xl:text-[13px] text-[11px] text-white py-[2px] bg-[#90BEC9]">
              <p>MAIN KITCHEN</p>
            </div>
            <div className="w-full flex items-center  justify-between border-dashed border-b-[1px] border-[#468999] py-[2px] px-[3px] pr-[5px]">
              <div className="flex items-center space-x-[3px]">

              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white xl:text-[14px] text-[10px] flex justify-center items-center mt-[5px]">3</div>
              <span className="text-[11px] xl:text-[15px] pt-[4px]">Lamp chunk Soup</span>
              </div>
              <div className="flex items-center space-x-[3px] pt-[3px]">
                  <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                  <TiTick className="text-white" />
                  </div>
                  
              </div>
            </div>
            <div className="w-full flex items-center  justify-between border-dashed  border-[#468999] py-[2px] px-[3px] pr-[5px]">
              <div className="flex items-center space-x-[3px]">

              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white xl:text-[14px] text-[10px] flex justify-center items-center mt-[5px]">3</div>
              <span className="text-[11px] xl:text-[15px] pt-[4px]">Burger Tiple Steak</span>
              </div>
              <div className="flex items-center space-x-[3px] pt-[3px]">
                  <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                  <TiTick className="text-white" />
                  </div>
                
              </div>
            </div>
            <div className="w-full rounded-[20px] flex items-center justify-center text-[12px] text-white py-[2px] bg-[#90BEC9]">
              <p>BAR AREA</p>
            </div>
            <div className="w-full flex items-center  justify-between border-dashed border-b-[1px] border-[#468999] py-[2px] px-[3px] pr-[5px]">
              <div className="flex items-center space-x-[3px]">

              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white xl:text-[14px] text-[10px] flex justify-center items-center mt-[5px]">3</div>
              <span className="text-[11px] xl:text-[15px] pt-[4px]">Lime Juice</span>
              </div>
              <div className="flex items-center space-x-[3px] pt-[3px]">
                  <div className="w-[16px] h-[16px] bg-green-600  flex items-center justify-center border-gray-500 rounded-[3px]">
                  <TiTick className="text-white" />
                  </div>
                 
              </div>
            </div>
            <div className="w-full flex items-center  justify-between border-dashed  border-[#468999] py-[2px] px-[3px] pr-[5px]">
              <div className="flex items-center space-x-[3px]">

              <div className="xl:w-[23px] w-[20px] xl:h-[23px] h-[20px] bg-black rounded-full text-white xl:text-[14px] text-[10px] flex justify-center items-center mt-[5px]">3</div>
              <span className="text-[11px] xl:text-[15px] pt-[4px]">Burger Tiple Steak</span>
              </div>
              <div className="flex items-center space-x-[3px] pt-[3px]">
                  
                  <div className="w-[16px] h-[16px] bg-red-600 flex items-center justify-center border-gray-500 rounded-[3px]">
                  <IoClose className="text-white text-[17px]" />
                  </div>
              </div>
            </div>
          </div>
            <div className="w-full flex items-center justify-center py-[10px]">
                  <div className="w-[150px] lg:w-[200px] bg-black text-center py-[5px] rounded-[20px]  text-white lg:text-[12px] text-[10px] active:bg-primeryFirst cursor-pointer hover:border-[1px] border-white">
                  SERVED
                  </div>
            </div>
        </div>
      </div>
     </div>
  );
};

export default Kitchen_served;
