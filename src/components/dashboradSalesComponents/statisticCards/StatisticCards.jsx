import React from "react";
import top1 from "../../../../public/images/dashboradSales/top1.svg";
import top2 from "../../../../public/images/dashboradSales/top2.svg";
import top3 from "../../../../public/images/dashboradSales/top3.svg";
import top4 from "../../../../public/images/dashboradSales/top4.svg";
import top5 from "../../../../public/images/dashboradSales/top5.svg";
import top6 from "../../../../public/images/dashboradSales/top6.svg";

function StatisticCards() {
  return (
    <div className="w-full py-[10px] px-[20px] grid grid-flow-row grid-cols-3 gap-[40px] 3xl:gap-[60px]">
      {/* card 1 */}
      <div className="bg-transparent gap-y-[6px] h-[140px] rounded-[15px] p-[5px] pl-[20px] relative flex flex-col">
        <div className="w-[40px] h-[40px] rounded-full absolute left-0 top-[50px] bg-[#548235] border-[4px] border-white"></div>
        <div className="rounded-[10px] w-full bg-[#87bf61] h-[65px] flex">
          <img src={top1} alt=" 1 image " className="w-20 mb-1 ml-7" />
          <div className="2xl:w-[30%] w-[20%] h-full"></div>
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-white flex items-center justify-end 2xl:text-[0.7rem] text-[0.5rem] pr-[10px] border-b-[1px] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-white absolute bottom-[-6px] left-0"></div>
              <span>Current Sales as of a 01:01 AM</span>
            </div>
            <div className="w-full h-[50%]  text-white flex items-center justify-end text-[1rem] pr-[10px]">
              <span>AED 0.00</span>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] w-full bg-[#d3e8c6] h-[65px] flex">
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-[#AF3D3D] flex items-center justify-start text-[0.7rem] pl-[25px] border-b-[1px] border-[#D46A6A] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-[#AF3D3D] absolute bottom-[-6px] right-0"></div>
              <span>Yesterday</span>
            </div>
            <div className="w-full h-[50%]  text-[#AF3D3D] flex items-center justify-start text-[1rem] pl-[25px]">
              <span>AED 0.00</span>
            </div>
          </div>
          <img src={top2} alt=" 2 image " className="w-20 p-1 ml-14" />
        </div>
      </div>

      {/* card 2 */}

      <div className="bg-transparent gap-y-[6px] h-[140px] rounded-[15px] p-[5px] pl-[20px] relative flex flex-col">
        <div className="w-[40px] h-[40px] rounded-full absolute left-0 top-[50px] bg-[#29707E] border-[4px] border-white"></div>
        <div className="rounded-[10px] w-full bg-[#5BB2C4] h-[65px] flex">
          <img src={top3} alt=" 3 image " className="w-20 mb-1 ml-7" />
          <div className="2xl:w-[30%] w-[20%] h-full"></div>
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-white flex items-center justify-end 2xl:text-[0.7rem] text-[0.5rem] pr-[10px] border-b-[1px] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-white absolute bottom-[-6px] left-0"></div>
              <span>Current Week's Sales as of a 01:01 AM</span>
            </div>
            <div className="w-full h-[50%]  text-white flex items-center justify-end text-[1rem] pr-[10px]">
              <span>AED 7939.87</span>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] w-full bg-[#D0F1F7] h-[65px] flex">
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-[#29707E] flex items-center justify-start text-[0.7rem] pl-[25px] border-b-[1px] border-[#5BB3C5] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-[#5BB3C5] absolute bottom-[-6px] right-0"></div>
              <span>Last Week</span >
            </div>
            <div className="w-full h-[50%]  text-[#29707E] flex items-center justify-start text-[1rem] pl-[25px]">
              <span>AED 0.00</span>
            </div>
          </div>
          <img src={top4} alt=" 4 image " className="w-20 p-1 ml-14" />
        </div>
      </div>

      {/* card 3 */}

      <div className="bg-transparent gap-y-[6px] h-[140px] rounded-[15px] p-[5px] pl-[20px] relative flex flex-col">
        <div className="w-[40px] h-[40px] rounded-full absolute left-0 top-[50px] bg-[#8057A3] border-[4px] border-white"></div>
        <div className="rounded-[10px] w-full bg-[#AC8DC5] h-[65px] flex">
          <img src={top5} alt=" 5 image " className="w-20 mb-1 ml-7" />
          <div className="2xl:w-[30%] w-[20%] h-full"></div>
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-white flex items-center justify-end 2xl:text-[0.7rem] text-[0.5rem] pr-[10px] border-b-[1px] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-white absolute bottom-[-6px] left-0"></div>
              <span>Current Months's Sales as of a 01:01 AM</span>
            </div>
            <div className="w-full h-[50%]  text-white flex items-center justify-end text-[1rem] pr-[10px]">
              <span>AED 7939.87</span>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] w-full bg-[#E3D4F0] h-[65px] flex">
          <div className="2xl:w-[70%] w-[80%] h-full flex flex-col">
            <div className="w-full h-[50%] text-[#8057A3] flex items-center justify-start text-[0.7rem] pl-[25px] border-b-[1px] border-[#AC8DC5] relative">
              <div className="h-[10px] w-[10px] rounded-full bg-[#AC8DC5] absolute bottom-[-6px] right-0"></div>
              <span>Last Month</span>
            </div>
            <div className="w-full h-[50%]  text-[#8057A3] flex items-center justify-start text-[1rem] pl-[25px]">
              <span>AED 0.00</span>
            </div>
          </div>
          <img src={top6} alt=" 6 image " className="w-20 p-1 ml-14" />
        </div>
      </div>
    </div>
  );
}

export default StatisticCards;
