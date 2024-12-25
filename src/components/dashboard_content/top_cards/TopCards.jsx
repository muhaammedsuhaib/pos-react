import React from "react";
import topone from '../../../../public/images/mainDashbord/topone.png';
import toptwo from '../../../../public/images/mainDashbord/toptwo.png';
function TopCards() {
  return (
    <>
      <div className="w-full float-end py-[10px] px-[20px] grid grid-flow-row grid-cols-3 gap-[20px] 3xl:gap-[60px]">
        {/* card 1 */}

        <div className="h-[150px] 3xl:h-[180px] rounded-[15px] p-[5px] pl-[20px] gap-y-[5px] xl:gap-y-[8px] relative flex flex-col">
          <div className="w-[50px] h-[50px] grid place-content-center  xl:w-[60px] xl:h-[60px] 3xl:w-[80px] 3xl:h-[80px] rounded-full absolute z-10 left-[-10px] xl:left-[-15px] 3xl:left-[-30px] top-[50px] xl:top-[45px] 3xl:top-[50px] bg-[#537E31] border-[5px] 3xl:border-[10px] border-white ">
            <img src={topone} alt=""  className="invert brightness-150 contrast-125" />
          </div>
          <div
            className="rounded-[10px] w-full bg-[#A5CD8D] h-[90px] flex justify-end"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col justify-end ">
              <div className="w-full h-[50%] text-[#385623] flex items-center justify-end text-[12px] 3xl:text-md pr-[20px] relative">
                <span>Current Sales as of 10:30 AM</span>
              </div>
              <div className="flex justify-end">
                <div className="h-[1px] bg-[#385623]  w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#385623] absolute bottom-[-5px] left-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#385623] flex items-center justify-end text-[1rem] pr-[20px]">
                <p>
                  AED <span className="text-xl">0.00</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-[10px] w-full bg-[#DDEAD2] h-[90px] flex"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col w-[73%]">
              <div className="w-full h-[50%] text-[#385623] flex items-center justify-start text-sm 3xl:text-md relative pl-[30px]">
                <span>Yesterday</span>
              </div>
              <div className="flex justify-start">
                <div className="h-[1px] bg-[#385623]  w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#385623] absolute bottom-[-5px] right-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#385623] flex items-center justify-start text-[1rem] pl-[30px]">
                <p>
                  AED <span className="text-xl">0.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="h-[150px] 3xl:h-[180px] rounded-[15px] p-[5px] pl-[20px] gap-y-[8px] relative flex flex-col">
          <div className="w-[50px] h-[50px]  xl:w-[60px] xl:h-[60px] 3xl:w-[80px] 3xl:h-[80px] rounded-full absolute z-10 left-[-10px] xl:left-[-15px] 3xl:left-[-30px] top-[50px] xl:top-[45px] 3xl:top-[50px] bg-[#378792] border-[5px] 3xl:border-[10px] border-white grid place-content-center p-3">
            <img src={toptwo} alt=""  className="invert brightness-150 contrast-125" />
          </div>
          <div 
            className="rounded-[10px] w-full bg-[#64B9C2] h-[90px] flex justify-end"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col justify-end ">
              <div className="w-full h-[50%] text-[#fff] flex items-center justify-end text-[12px] 3xl:text-md pr-1 3xl:pr-[20px] relative">
                <span>Current Week&apos;s Sales as of Today 10:30 AM</span>
              </div>
              <div className="flex justify-end">
                <div className="h-[1px] bg-[#fff]  w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#fff] absolute bottom-[-5px] left-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#fff] flex items-center justify-end text-[1rem] pr-[20px]">
                <p>
                  AED <span className="text-xl">0.00</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-[10px] w-full bg-[#DFEEEE] h-[90px] flex"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col w-[73%]">
              <div className="w-full h-[50%] text-[#378792] flex items-center justify-start text-sm 3xl:text-md relative pl-[30px]">
                <span>Last Week</span>
              </div>
              <div className="flex justify-start">
                <div className="h-[1px] bg-[#3E8F93] w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#3E8F93] absolute bottom-[-5px] right-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#3E8F93] flex items-center justify-start text-[1rem] pl-[30px]">
                <p>
                  AED <span className="text-xl">0.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className="h-[150px] 3xl:h-[180px] rounded-[15px] p-[5px] pl-[20px] gap-y-[5px] xl:gap-y-[8px] relative flex flex-col">
          <div className="w-[50px] h-[50px]  xl:w-[60px] xl:h-[60px] 3xl:w-[80px] 3xl:h-[80px] rounded-full absolute z-10 left-[-10px] xl:left-[-15px] 3xl:left-[-30px] top-[50px] xl:top-[45px] 3xl:top-[50px] bg-[#7C59B2] border-[5px] 3xl:border-[10px] border-white"></div>
          <div
            className="rounded-[10px] w-full bg-[#B4A3CE] h-[90px] flex justify-end"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col justify-end ">
              <div className="w-full h-[50%] text-[#fff] flex items-center justify-end text-[12px] 3xl:text-md pr-1 3xl:pr-[20px]  relative">
                <span>Current Month&apos;s Sales as of Today 10:30 AM</span>
              </div>
              <div className="flex justify-end">
                <div className="h-[1px] bg-[#fff] w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#fff] absolute bottom-[-5px] left-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#fff] flex items-center justify-end text-[1rem] pr-[20px]">
                <p>
                  AED <span className="text-xl">0.00</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded-[10px] w-full bg-[#E8E3EE] h-[90px] flex"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <div className="h-full flex flex-col w-[73%]">
              <div className="w-full h-[50%] text-[#8463B7] flex items-center justify-start text-sm 3xl:text-md relative  pl-[30px]">
                <span>Last Month</span>
              </div>
              <div className="flex justify-start">
                <div className="h-[1px] bg-[#8463B7]  w-[200px] relative ">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#8463B7] absolute bottom-[-5px] right-0"></div>
                </div>
              </div>
              <div className="w-full h-[50%]  text-[#8463B7] flex items-center justify-start text-[1rem] pl-[30px]">
                <p>
                  AED <span className="text-xl">317,535</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCards;
