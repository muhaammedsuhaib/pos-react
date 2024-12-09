import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input, Select } from "antd";
import dineInImg from "../../../public/images/pos-category-images/dining-table_15725489.svg";
import deliveryImg from "../../../public/images/pos-category-images/food-delivery_8004323.svg";
import takeAwayImg from "../../../public/images/pos-category-images/take-away_11529049.svg";
import pickUpImg from "../../../public/images/pos-category-images/takeaway_7217445.svg";
import cookingImg from "../../../public/images/posAllOrderContent/cooking_6414817.png";
import fastShipingImg from "../../../public/images/posAllOrderContent/fast-shipping_17627509.svg";
import calenderImg from "../../../public/images/posAllOrderContent/window_13895823.svg";
import bookingImag from "../../../public/images/pos-category-images/withdrawal_6926414.svg";
import foodIcon from "../../../public/images/pos-category-images/food_16144752[1].svg";
import quickActionIcon from "../../../public/images/pos-category-images/Quick Action[1].svg";

import "./posAllOrderContent.css";
import { BiSolidDownArrow } from "react-icons/bi";

import NewOrderNotification from "../notifications/NewOrderNotification";


function PosAllOrderContent() {
  return (

    <div className="w-full   flex flex-col">


      <div className="w-full bg-[#7A7A7A] h-[50px] flex items-center">
        <div className="w-full bg-[#7A7A7A]  grid grid-flow-row grid-cols-7 md:px-[10px] xl:px-[15px] gap-[10px] filterSearchDiv ">
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBg: "#000",
                },
              },
              token: {
                colorTextPlaceholder: "#bebcbc",
              },
            }}
          >
            <Input
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
              placeholder="Order No."
              suffix={<SearchOutlined />}
            />
          </ConfigProvider>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBg: "#000",
                },
              },
              token: {
                colorTextPlaceholder: "#bebcbc",
              },
            }}
          >
            <Input
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
              placeholder="Customer Name"
              suffix={<SearchOutlined />}
            />
          </ConfigProvider>
          <Select
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
            placeholder="Table"
            suffixIcon={<BiSolidDownArrow className="text-white" />}
          />
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBg: "#000",
                },
              },
              token: {
                colorTextPlaceholder: "#bebcbc",
              },
            }}
          >
            <Input
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
              placeholder="Item Name"
              suffix={<SearchOutlined />}
            />
          </ConfigProvider>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBg: "#000",
                },
              },
              token: {
                colorTextPlaceholder: "#bebcbc",
              },
            }}
          >
            <Input
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
              placeholder="Waiter"
              suffix={<SearchOutlined />}
            />
          </ConfigProvider>
          <Select
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
            placeholder="Pay status"
            suffixIcon={<BiSolidDownArrow className="text-white" />}
          />
          <Select
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
            placeholder="Order status"
            suffixIcon={<BiSolidDownArrow className="text-white" />}
          />
        </div>
      </div>

      <div className="w-full md:px-[10px] xl:px-[15px]">
        <div className="w-full  allOrderCards overflow-y-scroll   pt-[50px]  ">
          <div className="w-full grid grid-flow-row 2xl:grid-cols-7 xl:grid-cols-6 gap-x-[15px] lg:grid-cols-4 gap-y-[50px] allOrdersGridCards">
            <div className="bg-white h-[180px] rounded-[15px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[133px] rounded-[10px] bg-[#C00000] mediumShadow">
                <div className="px-[10px]">
                  <div className="w-full">
                    <div className="w-[full]  rounded-[20px] font-medium text-center text-white text-[14px]">
                      TABLE-5
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={dineInImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[40px] flex items-center justify-center mt-[-12px]">
                    <div className="w-full bg-white h-[23px] relative flex items-center justify-center smallShadow">
                      <div className="w-[30px] h-[30px] absolute left-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black qtyBtn" onClick={(e) => { e.stopPropagation() }}>
                        <button className="text-white ">
                          <p className="h-[2px] w-[10px] bg-white"></p>
                        </button>
                      </div>
                      <div className="w-[30px] h-[30px] absolute right-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black qtyBtn" onClick={(e) => { e.stopPropagation() }}>
                        <button className="text-white ">
                          <PlusOutlined />
                        </button>
                      </div>
                      <div className="">2</div>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-[5px] flex flex-row items-center pl-[5px] overflow-hidden smallShadow hover:border-gray-600 hover:border-2">
                    <div className="text-[12px] font-semibold">Waiter:</div>
                    <ConfigProvider
                      theme={{
                        components: {
                          Select: {
                            activeBorderColor: "#fff",
                            colorBorder: "#fff",
                            hoverBorderColor: "#fff",
                            boxShadow: false,
                            boxShadowSecondary: false,
                            fontSize: "12px",
                          },
                        },
                      }}
                    >
                      <Select
                        className="w-full outline-none focus:outline-none border-none focus:border-none flex-1 text-[12px] h-[25px]"
                        options={[{ value: "Albert" }]}
                        suffixIcon={<BiSolidDownArrow className="text-black" />}
                        onClick={(e) => { e.stopPropagation() }}
                      />
                    </ConfigProvider>
                  </div>
                </div>
              </div>
              <div className="w-full text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[15px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[133px] rounded-[10px] bg-[#F09000] mediumShadow">
                <div className="px-[10px]">
                  <div className="w-full">
                    <div className="w-[full]  rounded-[20px] font-medium text-center text-white text-[14px]">
                      TABLE-5
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={dineInImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[40px] flex items-center justify-center mt-[-12px]">
                    <div className="w-full bg-white h-[23px] relative flex items-center justify-center smallShadow">
                      <div className="w-[30px] h-[30px] absolute left-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black qtyBtn" onClick={(e) => { e.stopPropagation() }}>
                        <button className="text-white ">
                          <p className="h-[2px] w-[10px] bg-white"></p>
                        </button>
                      </div>
                      <div className="w-[30px] h-[30px] absolute right-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black qtyBtn" onClick={(e) => { e.stopPropagation() }}>
                        <button className="text-white ">
                          <PlusOutlined />
                        </button>
                      </div>
                      <div className="">2</div>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-[5px] flex flex-row items-center pl-[5px] overflow-hidden smallShadow hover:border-gray-600 hover:border-2">
                    <div className="text-[12px] font-semibold">Waiter:</div>
                    <ConfigProvider
                      theme={{
                        components: {
                          Select: {
                            activeBorderColor: "#fff",
                            colorBorder: "#fff",
                            hoverBorderColor: "#fff",
                            boxShadow: false,
                            boxShadowSecondary: false,
                            fontSize: "12px",
                          },
                        },
                      }}
                    >
                      <Select
                        className="w-full outline-none focus:outline-none border-none focus:border-none flex-1 text-[12px] h-[25px]"
                        options={[{ value: "Albert" }]}
                        suffixIcon={<BiSolidDownArrow className="text-black" />}
                      />
                    </ConfigProvider>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst h-[180px] rounded-[15px] p-[10px] relative card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#006FC0] mediumShadow overflow-hidden">
                <div className="">
                  <div className="w-full px-[10px] ">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      DELIVERY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={deliveryImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex overflow-hidden ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#006FC0] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      DELIVERY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={deliveryImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={fastShipingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>DRIVER</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#001F5F] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      PICK-UP
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={pickUpImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#001F5F] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      PICK-UP
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={pickUpImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>READY TO</p>
                      <p>PICK-UP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#689289] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      BOOKING
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={bookingImag} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={calenderImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>BOOKING</p>
                      <p>ACCEPTED</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#689289] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      BOOKING
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={bookingImag} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={calenderImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>BOOKING</p>
                      <p>RECIVED</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#7E5F00] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      TAKE AWAY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#7E5F00] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      TAKE AWAY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>READY TO</p>
                      <p>PICK-UP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#C74B3E] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      AGGREGATOR
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#C74B3E] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      AGGREGATOR
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            {/* <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e)=>{e.stopPropagation()}}>
                  <img src={foodIcon} alt="" className="w-[30px]"  />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e)=>{e.stopPropagation()}}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#689289] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      BOOKING
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={bookingImag} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={calenderImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>BOOKING</p>
                      <p>ACCEPTED</p>
                    </div>
                  </div>
                </div>
              </div>
               <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div> */}
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#7E5F00] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      TAKE AWAY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#7E5F00] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      TAKE AWAY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>READY TO</p>
                      <p>PICK-UP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#C74B3E] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      TAKE AWAY
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#FFC000] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
            <div className="bg-white h-[180px] rounded-[20px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper">
              <div className=" flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={foodIcon} alt="" className="w-[30px]" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon" onClick={(e) => { e.stopPropagation() }}>
                  <img src={quickActionIcon} alt="" className="w-[25px]" />
                </div>
              </div>
              <div className="w-full h-[134px] rounded-[10px] bg-[#C74B3E] mediumShadow overflow-hidden">
                <div className="">
                  <div className=" w-full px-[10px]">
                    <div className="w-[full] text-white rounded-[20px] font-medium text-center  text-[14px]">
                      AGGREGATOR
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center h-[50px]">
                    <img src={takeAwayImg} alt="" className="w-[50px]" />
                  </div>
                  <div className="w-full h-[50px] bg-[#AACA74] mt-[13px]  flex ">
                    <div className="h-full flex items-center pl-[5px]">
                      <img src={cookingImg} alt="" className="w-[40px]" />
                    </div>
                    <div className="flex-1 font-bold flex flex-col items-center justify-center text-[11px]">
                      <p>WITH</p>
                      <p>CHEF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-[2px] text-[12px] pl-[5px] leading-[13px]">
                <p>Luther</p>
                <p className="font-medium">ID: 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NewOrderNotification/> */}
    </div>
  );
}

export default PosAllOrderContent;
