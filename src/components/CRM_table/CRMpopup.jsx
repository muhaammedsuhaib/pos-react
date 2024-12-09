import { CalendarOutlined } from "@ant-design/icons";
import { ConfigProvider, DatePicker, Input, Radio, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function CRMpopup() {
  const [openMore, setOpenMore] = useState(false);
  return (
    <>
      <div className="bg-primeryFirst rounded-xl p-2">
        <div className="w-full h-full bg-black rounded-[10px] p-1">
          <div className="w-full h-full  rounded-xl custom-scroll-height ">
            {/* active area */}
            <div className="bg-black rounded-b-xl flex justify-between items-center text-[12px] xl:text-[13px] p-1 mb-[5px]">
              {/* <div className="flex items-center gap-2 px-2">
              <Switch size="small" />
              <FaCheck
                className="text-green-500"
                style={{ strokeWidth: "50px" }}
              />
              <p className="text-green-500 font-bold">Active</p>
            </div> */}
              <div className="">
                {" "}
                <span className="text-white">STATUS:</span> &nbsp;
                <ConfigProvider
                  theme={{
                    components: {
                      Switch: {
                        trackHeight: 22,

                        trackPadding: 2,
                      },
                    },
                  }}
                >
                  <Switch
                    checkedChildren="Active"
                    unCheckedChildren="Inactive"
                    className=" switch-outline"
                  />
                </ConfigProvider>
              </div>
              <div className="flex gap-2">
                <button className="text-white px-1 xl:px-2 xl:py-1 bg-primeryFirst rounded-[20px] hover:border-white hover:border-[1px] active:bg-black">
                  ADD NEW CUSTOMER
                </button>
                <button
                  className="text-white px-1 xl:px-2 xl:py-1 bg-primeryFirst rounded-[20px] hover:border-white hover:border-[1px] active:bg-black"
                  onClick={() => {}}
                >
                  SAVE & CLOSE
                </button>
                <button
                  className="text-white px-1 xl:px-2 xl:py-1 bg-primeryFirst rounded-[20px] hover:border-white hover:border-[1px] active:bg-black hidden"
                  onClick={() => {}}
                >
                  SAVE CHANGES
                </button>
                {/* <button className="text-white px-1 xl:px-2 xl:py-1 bg-black rounded-[20px]">
                Update
              </button> */}
              </div>
            </div>
            {/* phone number and customer name */}
            <div className="w-full bg-[#FCBBAE] rounded-[10px]">
              {/* radio area */}
              <div className="py-[10px] bg-[#FCBBAE]">
                <Radio.Group
                  defaultValue={"regular"}
                  // value={customerType}
                  // onChange={(value) => setCustomerType(value)}
                  className="flex flex-wrap items-center justify-evenly w-full gap-1 px-1 xl:px-2 "
                >
                  <div
                    className="flex items-center 2xl:gap-1 gap-[2px] rounded-full bg-[#F9DAD2] 2xl:text-[0.9rem] text-[0.6rem] xl:p-1 cursor-pointer"
                    //  onClick={() => setCustomerType(1)}
                  >
                    <span className="rounded-full 2xl:h-[35px] 2xl:w-[35px] h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                      <img
                        src="/public/app_icon.svg"
                        alt="icon"
                        className="w-[15px] 2xl:w-[17px] text-white"
                      />
                    </span>
                    <p className="py-[5px]  2xl:w-[75px] text-black font-medium">
                      REGULAR
                    </p>
                    <Radio
                      value={1}
                      className="custom-black-radio 2xl:ml-0 ml-[3px]"
                    />
                  </div>
                  <div
                    className="flex items-center 2xl:gap-1 gap-[2px] rounded-full bg-[#F9DAD2] 2xl:text-[0.9rem] text-[0.6rem] xl:p-1 cursor-pointer"
                    //  onClick={() => setCustomerType(2)}
                  >
                    <span className="rounded-full 2xl:h-[35px] 2xl:w-[35px] h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                      <img
                        src="/public/crown.svg"
                        alt="icon"
                        className="w-[15px] 2xl:w-[20px] text-white"
                      />
                    </span>
                    <p className="py-[5px]  2xl:w-[75px] text-black font-medium">
                      VIP
                    </p>
                    <Radio
                      value={2}
                      className="custom-black-radio 2xl:ml-0 ml-[3px]"
                    />
                  </div>
                  <div
                    className="flex items-center 2xl:gap-1 gap-[2px] rounded-full bg-[#F9DAD2] 2xl:text-[0.9rem] text-[0.6rem] xl:p-1 cursor-pointer"
                    //  onClick={() => setCustomerType(3)}
                  >
                    <span className="rounded-full 2xl:h-[35px] 2xl:w-[35px] h-[30px] w-[30px] bg-primeryFirst flex items-center justify-center border-[2px] border-white">
                      <img
                        src="/public/goodwill.svg"
                        alt="icon"
                        className="w-[15px] 2xl:w-[20px] text-white"
                      />
                    </span>
                    <p className="py-[5px]  2xl:w-[75px] text-black font-medium">
                      AFFLIATE
                    </p>
                    <Radio
                      value={3}
                      className="custom-black-radio 2xl:ml-0 ml-[3px]"
                    />
                  </div>
                </Radio.Group>
              </div>
              {/* phone and name area */}
              <div className="grid grid-cols-2 p-2 gap-1 text-[10px] xl:text-[13px] ">
                <div className="flex w-full items-center ">
                  {/* <Input
                  placeholder="Phone number"
                  className="w-full pl-[70px] xl:pl-[75px] text-[10px] xl:text-[13px] h-[30px] rounded-lg   outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
                />
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <div className="absolute top-[1 px] h-[28px] flex items-center left-[1px] px-1 bg-gray-200 py-[4px] cursor-pointer rounded-s-lg ">
                    <span className="flex items-center gap-1">
                      <img
                        src="/public/uae_flag.svg"
                        alt="flag_icon"
                        width={15}
                      />
                      {selectedCode.dialCode}
                      <DownOutlined style={{ fontSize: "10px" }} />
                    </span>
                  </div>
                </Dropdown> */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full text-[10px] xl:text-[13px] h-[30px] rounded-lg   outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black relative "
                  />
                </div>
                <div>
                  <Input
                    placeholder="Name"
                    className="w-full text-[10px] xl:text-[13px] rounded-lg   h-[30px]  outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center h-2  relative mt-[5px]">
                <div className="w-[33px] h-[33px] bg-[#FCBBAE] rounded-full flex justify-center items-end absolute -top-[15px]">
                  <div
                    className=" rounded-full hover:border-[1px] hover:border-white active:bg-primeryFirst"
                    onClick={() => setOpenMore((prev) => !prev)}
                  >
                    {/* <FaArrowDown
                size={13}
                color={"white"}
                className={`duration-150 ${openMore ? "" : "rotate-180"}`}
              /> */}
                    {openMore ? (
                      <IoIosArrowUp
                        size={24}
                        color="#fff"
                        className="font-bold shadow-2xl relative -top-[5px]"
                      />
                    ) : (
                      <IoIosArrowDown
                        size={24}
                        color="#fff"
                        className="font-bold shadow-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* input table */}
            <div
              className={`${openMore ? "block" : "hidden"} bg-black mt-[15px]`}
            >
              {/* customer details area */}
              <div className="grid grid-cols-3 text-[10px] xl:text-[13px] bg-primerySecond rounded-[10px]">
                {/* Left Section with Inputs */}
                <div className="col-span-2 flex flex-col gap-3 p-2 ">
                  {/* Email Input */}
                  <Input
                    placeholder="Email"
                    className="w-full text-[10px] xl:text-[13px] rounded-md  outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
                  />
                  {/* Address TextArea */}
                  <TextArea
                    placeholder="Address"
                    className="w-full text-[10px] xl:text-[13px] rounded-md  outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
                  />
                  {/* Google Location Input */}
                  <Input
                    placeholder="Google Location"
                    className="w-full text-[10px] xl:text-[13px] rounded-md  outline-none  text-primeryFirs hover:border-primeryFirst hover:border-[1px] focus:border-black"
                  />
                </div>

                {/* Right Section with Placeholder Box */}
                <div className="w-full h-full p-2">
                  {/* Replaced span with a div for the bordered box */}
                  <div className="w-full h-full border  rounded-lg overflow-hidden">
                    <iframe
                      className="w-[200px] h-[135px]"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.576826543554!2d75.97948457570509!3d10.995279655117372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b3ee33351edf%3A0x47eff5071e2c191d!2sRootsys%20International!5e0!3m2!1sen!2sin!4v1730113548774!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* whatsapp icon area */}
              <div className="w-full flex justify-center items-center py-2 text-[11px] pt-[20px]">
                <div className=" px-2 xl:px-4  py-[2px] relative w-fit bg-green-600 rounded-e-xl">
                  <p className="text-white">
                    Click to share location on whatsApp
                  </p>
                  <span className="absolute -left-[23px] -top-[9px]  p-1  rounded-full ">
                    <img
                      src="/public/WhatsApp.svg.webp"
                      alt="icon"
                      className="w-[30px]  "
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={`${openMore ? "block" : "hidden"}`}>
              <div className="grid grid-cols-1 gap-1 p-1 xl:p-2 text-[10px] xl:text-[13px] mb-2 rounded-[10px] bg-[#FCBBAE]">
                {/* DOB Field */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="flex items-center justify-between gap-[2px]">
                    <p className="text-[10px] xl:text-[13px]">DOB:</p>
                    <DatePicker
                      className="w-full custom-datepicker cursor-pointer  hover:border-primeryFirst hover:border-[1px] focus:border-black"
                      style={{ fontSize: "10px" }}
                      suffixIcon={
                        <CalendarOutlined className="text-black text-[20px] hover:text-primeryFirst active:text-primeryFirst" />
                      } // Manually adjust the size here
                      // onChange={(date) => {
                      //   if (date && date.isValid()) {
                      //     setDOB(date);
                      //   } else {
                      //     setDOB(null);
                      //   }
                      // }}
                      format={"DD/MM/YYYY"}
                      // value={DOB ? DOB : ''}
                      // defaultValue={DOB ? DOB : ''}
                    />
                  </div>

                  {/* Anniversary Field */}
                  <div className="flex items-center justify-between gap-[2px]">
                    <p className="text-[10px] xl:text-[13px]">Anniversary:</p>
                    <DatePicker
                      className="w-full custom-datepicker cursor-pointer  hover:border-primeryFirst hover:border-[1px] focus:border-black"
                      style={{ fontSize: "10px" }}
                      suffixIcon={
                        <CalendarOutlined className="text-black text-[20px] hover:text-primeryFirst active:text-primeryFirst" />
                      }
                      // onChange={(date) => {
                      //   if (date && date.isValid()) {
                      //     setAnniversary(date);
                      //   } else {
                      //     setAnniversary(null);
                      //   }
                      // }}
                      format={"DD/MM/YYYY"}
                      // value={anniversary ? anniversary : ''}
                      // defaultValue={anniversary ? anniversary : ''}
                    />
                  </div>
                </div>

                <div className="w-full border-b border-dotted border-black" />
                {/* Spouse Name Field */}
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <Input
                      placeholder="Spouse name"
                      className="w-full text-[10px] xl:text-[13px]"
                      // onChange={(e) => setSpouseName(e.target.value)}
                      // defaultValue={spouseName}
                      // value={spouseName}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-[2px]">
                    <p className="text-[10px] xl:text-[13px]">DOB:</p>
                    <DatePicker
                      className="w-full custom-datepicker cursor-pointer  hover:border-primeryFirst hover:border-[1px] focus:border-black"
                      style={{ fontSize: "10px" }}
                      suffixIcon={
                        <CalendarOutlined className="text-black text-[20px] hover:text-primeryFirst active:text-primeryFirst" />
                      }
                      // onChange={(date) => {
                      //   if (date && date.isValid()) {
                      //     setSpouseDOB(date);
                      //   } else {
                      //     setSpouseDOB(null);
                      //   }
                      // }}
                      format={"DD/MM/YYYY"}
                      // value={spouseDOB ? spouseDOB : ''}
                      // defaultValue={spouseDOB ? spouseDOB : ''}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* visit table */}
            <div className="grid grid-cols-2 mt-[10px] gap-2 p-1 xl:p-2 bg-black">
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">First Visit</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  12-Sep-2024
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">Last Visit</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  18-Oct-2024
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">Total Dine-in</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  2 (558.57 AED)
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">Total-Web</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  4 (445.15 AED)
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">Average Bill</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  152.5 AED
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] 2xl:text-[13px]">
                <p className="text-gray-400">Loved Item</p>
                <span className="text-center rounded-md bg-[#545454] py-[2px] px-2 flex items-center w-[80px] xl:w-[110px] 3xl:w-[150px] justify-between text-white">
                  None
                </span>
              </div>
            </div>

            {/* statics area */}
            <div className="w-full p-1 xl:p-2 flex items-center justify-evenly text-[12px] xl:text-[12px] bg-primeryFirst rounded-[10px]">
              <div className="flex flex-col justify-center items-center">
                <div className="p-1 w-[35px] h-[35px] flex items-center justify-center rounded-full bg-black border-2 hover:border-[#5CAC88] active:bg-[#5CAC88]">
                  <img
                    src="/public/analytics.svg"
                    alt="icon"
                    className="w-[15px] xl:w-[20px]"
                  />
                </div>
                <p className="text-white">STATISTICS</p>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <div className="p-1 w-[35px] h-[35px] flex items-center justify-center rounded-full bg-black border-2 hover:border-[#5CAC88] active:bg-[#5CAC88]">
                  <img
                    src="/public/talent.svg"
                    alt="icon"
                    className="w-[15px] xl:w-[20px]"
                  />
                </div>
                <p className="text-white">
                  LOYALITY <span className="text-white"> (5,563)</span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="p-1 w-[35px] h-[35px] flex items-center justify-center rounded-full bg-black border-2 hover:border-[#5CAC88] active:bg-[#5CAC88]">
                  <img
                    src="/public/credit-card.svg"
                    alt="icon"
                    className="w-[15px] xl:w-[20px]"
                  />
                </div>
                <p className="text-white">CREDIT DETAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CRMpopup;
