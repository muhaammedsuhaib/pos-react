import { useState } from "react";
import editIcon from "/Edit.svg";
import { ConfigProvider, Select } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";


function NewGreenTop({page,orderId,orderType,tableNo,dropShow}) {
    const [orderTypeModalOpen, setOrderTypeModalOpen] = useState(false);
  return (
    <div className="w-full">
        <div className="grid grid-flow-row grid-cols-3 gap-2 3xl:gap-3 w-full pb-[5px]  3xl:text-[1rem] text-[0.8rem] ">
        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  justify-between 3xl:text-[1rem] text-[0.8rem]">
          Order: 10357
       
        </span>
      
      {page == 'take_away' && (<div></div>)}
       
        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  justify-between 3xl:text-[1rem] text-[0.8rem]">
          {page == 'all_orders' && ('Dine-in')}
          {page == 'dine_in' && ('Dine-in')}
          {page == 'delivery' && ('Delivery')}
          {page == 'booking' && ('Booking')}
          {page == 'pick_up' && ('Pick-up')}
          {page == 'take_away' && ('Take-away')}
          {page == 'aggregator' && ('Aggregator')}
          <span
            id="icon-container"
            onClick={() => setOrderTypeModalOpen(true)}
            className="cursor-pointer"
          >
            <img
              id="icon-image"
              src={editIcon}
              alt="edit"
              className="w-[20px] 3xl:w-[25px]"
            />
          </span>
        </span>
      {page == 'dine_in' || page == 'all_orders' ? (

        <span className=" rounded-lg bg-[#C7EBC5] py-1 px-2 flex items-center  justify-between 3xl:text-[1rem] text-[0.8rem]">
         Table-3
          <span
            id="icon-container"
            onClick={() => setOrderTypeModalOpen(true)}
            className="cursor-pointer"
          >
            <img
              id="icon-image"
              src={editIcon}
              alt="edit"
              className="w-[20px] 3xl:w-[25px]"
            />
          </span>
        </span>
      ) : ''}
      {page == 'delivery' ? (
          <div className="flex items-center gap-[5px]">
              <span className="text-white text-[0.8rem]">Driver</span>
              <ConfigProvider
              theme={{
                components:{
                  Select:{
                      selectorBg:'#C7EBC5'
                  }
                },
                token:{
                  colorTextPlaceholder:'black',
                  controlHeight:27
                }
              }}
              >
                <Select suffixIcon={<BiSolidDownArrow className="text-black "/>} className="w-full" placeholder='Martin' />
              </ConfigProvider>
          </div>
    
      ) : ''}

      {page == 'pick_up' || page == 'booking' ? (
          <div className="flex items-center gap-[5px] w-full bg-[#C7EBC5] rounded-md 2xl:text-[0.7rem] text-[0.6rem] px-[2px]">
             <span>15/10/2024</span>
             <span>-</span>
             <span>10:30 PM</span>
          </div>
    
      ) : ''}
            {page == 'aggregator' ? (
           <div className="flex items-center gap-[5px] w-full bg-[#C7EBC5] rounded-md text-[0.8rem] px-[5px]">
           <span>Noon</span>
          
        </div>
    
      ) : ''}
      </div>
      {dropShow && (


<div className={`w-full h-[40px]  items-center justify-between ${ page == 'take_away' || page == 'aggregator' ? 'hidden' : 'flex'}`}>
  {page == 'all_orders' || page == 'dine_in' ? (
    <>
    <div className=""></div>
    <div className="w-[42%]">
        <div className="flex items-center gap-[5px]">
        <span className="text-white text-[0.8rem]">Waiter</span>
        <ConfigProvider
        theme={{
          components:{
            Select:{
                selectorBg:'#C7EBC5'
            }
          },
          token:{
            colorTextPlaceholder:'black',
            controlHeight:27
          }
        }}
        >
          <Select suffixIcon={<BiSolidDownArrow className="text-black "/>} className="w-full" placeholder='Martin' />
        </ConfigProvider>
    </div>
    </div>
    </>
  ) : ''}
  {page == 'delivery'  ? (
    <>
    <div className=""></div>
    <div className="">
       <button className="uppercase bg-primeryFirst text-white text-[0.8rem] px-[15px] py-[3px] rounded-[20px]">
          <span>view / edit delivery details</span>
       </button>
    </div>
    </>
  ) : ''}
  {page == 'pick_up'  ? (
    <>
    <div className="flex items-center gap-[5px]">
      <span className="text-white text-[0.8rem]">Location</span>
      <div className="flex items-center truncate gap-[5px] w-[100px] py-[5px] bg-[#C7EBC5] rounded-md text-[0.7rem]  px-[2px]">
       <p className="truncate">Mama's Resturant</p>
    </div>
    </div>
    <div className="">
       <button className="uppercase bg-primeryFirst text-white text-[0.8rem] px-[15px] py-[3px] rounded-[20px]">
          <span>view / edit pick-up details</span>
       </button>
    </div>
    </>
  ) : ''}
  {page == 'booking'  ? (
    <>
    <div className="flex items-center gap-[5px]">
      <span className="text-white text-[0.8rem]">Table</span>
      <div className="flex items-center truncate gap-[5px] w-[100px] py-[5px] bg-[#C7EBC5] rounded-md text-[0.7rem]  px-[2px]">
       <p className="truncate">Table-3</p>
    </div>
    </div>
    <div className="">
       <button className="uppercase bg-primeryFirst text-white text-[0.8rem] px-[15px] py-[3px] rounded-[20px]">
          <span>view / edit Booking details</span>
       </button>
    </div>
    </>
  ) : ''}
</div>
) 
  
      }
    </div>
  )
}

export default NewGreenTop