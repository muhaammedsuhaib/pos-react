import { Radio } from "antd"
import dayjs from "dayjs";
import { useState } from "react";
import DateBar from "../dateBar/DateBar";
import Chart from "react-apexcharts";

function ItemDiscounts() {

  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState([
    currentDate,
    currentDate,
  ]);


  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Opening Balance", "Added", "Spent", "Cash on Hand"],
    colors: ["#F85631", "#ADD713", "#01C793", "#F9BC00"],
    legend: {
      show: false,
      position: "bottom",
    },
    dataLabels: {
      enabled: false, 
    },
  };

  const chartSeries = [525, 5000, 1579, 3475]; 

  return (
    <div>
      <div className="flex w-[70%] justify-between h-[30px] mt-5 items-center">
        <div className="flex space-x-[10px] items-center">
          <div className="w-[7px] h-9 bg-primeryFirst "></div>
          <h1 className="text-white text-[1rem] font-medium">
          Item Discounts
          </h1>
        </div>
        <div className="ml-auto">
          <DateBar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>

 <div className="mt-[20px] w-full flex items-center">
   <div className="w-[70%] bg-[#EEEEF1] rounded-[20px] p-[10px] flex flex-col gap-y-[10px]">
       {/* bar start */}
     <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
         dine-in
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[65%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold ">65%</p>
         </div>
         <p className="font-semibold text-primeryFirst">75</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>
      {/* bar */}
     <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
      delivery
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[13%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold ">13%</p>
         </div>
         <p className="font-semibold text-primeryFirst">15</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>
      {/* bar */}
     <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
           booking
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[21%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold ">25%</p>
         </div>
         <p className="font-semibold text-primeryFirst">25</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>
      {/* bar */}
     <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
         take-away
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[15%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold ">15%</p>
         </div>
         <p className="font-semibold text-primeryFirst">15</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>
      {/* bar */}
     <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
         aggregator
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[15%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold ">15%</p>
         </div>
         <p className="font-semibold text-primeryFirst">15</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>
    

      {/* bar */}
     <div className="h-[35px] bg-black text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
       <div className="w-[30%]">
         <p className="uppercase font-medium text-sm xl:text-[16px]">
           total 
         </p>
       </div>
       <div className="w-[52%] flex gap-[5px] items-center">
         <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
           <div className="w-[100%] h-full rounded-[30px] pregress-bar-orange "></div>
           <p className="text-[#3C6325] font-semibold hidden">100%</p>
         </div>
         <p className="font-semibold text-primeryFirst">150</p>
       </div>
       <div className="w-[20%] flex justify-end">
         <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
       </div>
     </div>

     <div className="w-full pl-[20px] mt-[10px]">
     <div className="w-[100%] grid grid-flow-row grid-cols-3 gap-[20px] pb-[10px]">
                <div className="flex flex-col gap-y-[20px] justify-between">
                    <div className="flex items-center space-x-[10px]">
                      <Radio className="custom-black-radio"/>
                      <h1>Summary</h1>
                    </div>
                    <div className="flex items-center space-x-[10px]">
                    <Radio className="custom-black-radio"/>
                    <h1>Details</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                    <div className="flex items-center space-x-[10px]">
                      <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                        <img src="/public/images/dashboradSales/screen_5621734.svg" alt=""  className="w-[20px]"/>
                      </div>
                      <h1>Show & Print</h1>
                    </div>
                    <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img src="/public/images/dashboradSales/folder.svg" alt=""  className="w-[20px]"/>
                    </div>
                    <h1>Export to Excel</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                    <div className="flex items-center space-x-[10px]">
                      <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                        <img src="/public/images/dashboradSales/whatsapp.svg" alt=""  className="w-[20px]"/>
                      </div>
                      <h1>Share WhatsApp</h1>
                    </div>
                    <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img src="/public/images/dashboradSales/folder.svg" alt=""  className="w-[20px]"/>
                    </div>
                    <h1>Export to PDF</h1>
                    </div>
                </div>
                
              </div>
       </div>

   </div>

   <div className="h-[250px] w-[320px] relative ml-32">
          <img
            src="./public/images/dashboradSales/Pie chart base-2.png"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute top-[-48px] left-[-12px]">
            <div
              style={{
                display: "inline-block",
                transform: `rotateX(65deg)`,
                transformOrigin: "center center",
                transition: "transform 0.5s ease",
              }}
            >
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="pie"
                style={{
                  width: "280px",
                  margin: "auto",
                  textAlign: "center",
                }}
              />
              
            </div>
            
          </div>
          <div className="flex flex-col items-start mt-3 p-2 space-y-2 ml-10">
  {/* First Row */}
  <div className="flex items-center space-x-10">
    <div className="flex items-center space-x-2">
      <div className="bg-orange-500 w-4 h-4 rounded-md"></div>
      <span className="text-white text-sm">DINE-IN</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="bg-green-500 w-4 h-4 rounded-md"></div>
      <span className="text-white text-sm">TAKE-AWAY</span>
    </div>
  </div>
  {/* Second Row */}
  <div className="flex items-center space-x-10">
    <div className="flex items-center space-x-2">
      <div className="bg-red-500 w-4 h-4 rounded-md"></div>
      <span className="text-white text-sm">BOOKING</span>
    </div>
    <div className="flex items-center space-x-3">
      <div className="bg-blue-500 w-4 h-4 rounded-md -m-2"></div>
      <span className="text-white text-sm">OTHERS</span>
    </div>
  </div>
</div>





 </div>



 </div>


</div>
  )
}

export default ItemDiscounts