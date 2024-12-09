import React, { useState } from "react";
import "./notification.css";

import { CloseCircleOutlined, SettingFilled } from "@ant-design/icons";
import {
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  TimePicker,
} from "antd";
import { Option } from "antd/es/mentions";
import dayjs from "dayjs";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { PiClockCountdown } from "react-icons/pi";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import wApp from "../../../public/images/whatsapp.png";
import user from "../../../public/UserprofileWhite.svg";
import { FiSearch } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

function ReminderBooking() {
  const [editText, setEditText] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const onDateChange = (date) => {
    setSelectedDate(date ? dayjs(date).format("DD/MM/YYYY HH:mm") : null);
  };

  const [tableReq, setTableReq] = useState(false);
  const handleClick = () => {
    setTableReq((prev) => {
      const newChecked = !prev;
      setTableReq(!tableReq);
      return newChecked;
    });
  };
  const [advPayment, setAdvPayment] = useState(false);
  const handleAdvPaymentClick = () => {
    setAdvPayment((prev) => {
      const newChecked = !prev;
      setAdvPayment(!advPayment);
      return newChecked;
    });
  };
  const [reminderKot, setReminderKot] = useState(false);
  const handleReminderClick = () => {
    setReminderKot((prev) => {
      const newChecked = !prev;
      setReminderKot(!reminderKot);
      return newChecked;
    });
  };

  const [beforeArrow, setBeforeArrow] = useState(false);

  const handleArrowToggle = () => {
    setBeforeArrow((prev) => !prev);
  };

  const [selectedTime, setSelectedTime] = useState("30");

  return (
    <Modal
      className="posPopupGreen"
      footer={null}
      title="REMINDER-BOOKING ORDER (NO. 32355)"
      width={650}
      open
    >
      <div className="w-full new-booking-form ">
        <div className="w-full bg-black flex items-center flex-col justify-center py-[2px] h-[70px]">
          <h1 className="text-white font-[400] text-[1rem]">REMINDER</h1>
          <div className="w-full flex items-center justify-center relative z-[2]">
            <button className="flex items-center font-medium justify-center rounded-md w-[140px] px-[10px] py-[2px] text-[15px]  bg-[#407F63] space-x-[10px] border border-white hover:border-primerySecond active:border-primeryFirst active:bg-black text-white">
              <span className="uppercase">booking</span>
            </button>
          </div>
        </div>
        <Form layout="vertical">
          <div className="w-full pb-1 p-2 bg-[#4B4B4B] ">
            <div className="w-full flex ">
              <div className="flex w-[50%] items-center gap-2">
                <Form.Item label="Customer's Name" className="w-full mb-3">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#313131",
                      },
                    }}
                  >
                    <Input
                      // value="Jessica Alba (+971506688553)"
                      placeholder="Jessica Alba (+971506688553)"
                      className="pr-[2px] bg-[#D4D4D4]"
                     
                    />
                  </ConfigProvider>
                </Form.Item>
              </div>
              <div className="w-[50%] flex justify-end gap-2">
                <Form.Item label="Event Date" className="w-[45%]  mb-3">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#313131",
                      },
                    }}
                  >
                    <DatePicker
                      onChange={onDateChange}
                      value={
                        selectedDate ? dayjs(selectedDate, "DD/MM/YYYY") : null
                      }
                      format="DD/MM/YYYY"
                      className="pr-1 bg-[#D4D4D4]"
                      suffixIcon={
                        <IoCalendarOutline className="text-xl text-[#595959] " />
                      }
                      placeholder="01/10/2032"
                    />
                  </ConfigProvider>
                </Form.Item>
                <Form.Item label="Event Time" className="w-[35%]  mb-3 ">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#313131",
                      },
                    }}
                  >
                    <TimePicker
                      className="bg-[#D4D4D4] pr-1"
                      placeholder="10:30PM"
                      prevIcon={<CloseCircleOutlined />}
                      suffixIcon={
                        <PiClockCountdown className="text-xl text-[#595959]" />
                      }
                    />
                  </ConfigProvider>
                </Form.Item>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="flex w-[55%] items-center gap-2">
                <Form.Item label="Reservation Type" className="w-[70%] mb-3">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#313131",
                        colorBgBase: "#D4D4D4",
                      },
                    }}
                  >
                    <Select
                      showSearch
                      placeholder="Select a type"
                      optionFilterProp="label"
                      suffixIcon={
                        <BiSolidDownArrow className="text-[15px] text-[#616161]" />
                      }
                      options={[
                        {
                          value: "party",
                          label: "party",
                        },
                      ]}
                    />
                  </ConfigProvider>
                </Form.Item>
                <Form.Item label="No.of Guests" className="w-[40%] mb-3">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#313131",
                      },
                    }}
                  >
                    <InputNumber
                      placeholder="15"
                      className="px-6 bg-[#D4D4D4]"
                    />
                  </ConfigProvider>
                </Form.Item>
              </div>
              <div className="w-[45%] flex justify-end gap-1 mt-6">
                <Form.Item className=" mb-3">
                  <div className=" flex items-center gap-[2px]">
                    <label htmlFor="" className="text-white">
                      Table Required
                    </label>
                    <button
                      onClick={handleClick}
                      className="bg-white w-[30px] h-[30px] rounded-[8px] flex justify-center items-center"
                    >
                      <FaCheck
                        className={`${tableReq ? "block" : "hidden"}`}
                        color="#4B4B4B"
                        size={15}
                      />
                    </button>
                  </div>
                </Form.Item>
                <Form.Item className=" mb-3">
                  <button className="bg-[#F95737] text-white rounded-[30px] px-2 py-[5px] border border-primeryFirst hover:border-white">
                    Change Table
                  </button>
                </Form.Item>
              </div>
            </div>
            <div>
              <Form.Item className=" mb-2">
                <ConfigProvider
                  theme={{
                    token: {
                      colorTextPlaceholder: "#313131",
                    },
                  }}
                >
                  <Input.TextArea
                    placeholder="Customer's Request"
                    className="bg-[#D4D4D4] p-1"
                    rows={3}
                  />
                </ConfigProvider>
              </Form.Item>
            </div>
          </div>

          <div className=" bg-[#4B4B4B] p-2 mt-[10px]">
            <div className="flex items-center justify-between gap-2 text-white">
              <p>Select Party Package</p>
              <div className="flex gap-1 items-center">
                <p>Party Package Settings</p>
                <button className="w-[30px] h-[30px] bg-primerySecond border hover:border-black active:border-primeryFirst rounded-[8px] flex justify-center items-center">
                  <SettingFilled className="text-lg" />
                </button>
              </div>
            </div>
            <div className="selectSlot-container rounded-[8px] my-[6px] text-white flex justify-between items-center gap-3 bg-[#7C7C7C] py-[2px] px-2">
              <div className="w-[50%]">
                <Form.Item label="Selected Slot" className="mb-3">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#e3e3e3",
                        colorBgBase: "#407F63",
                      },
                      components: {
                        Select: {
                          optionPadding: "1px",
                          //   showArrowPaddingInlineEnd: "20px",
                        },
                      },
                    }}
                  >
                    <Select
                      showSearch
                      placeholder="Select a type"
                      optionFilterProp="label"
                      className="h-[70px] slotSelect"
                      defaultValue={"selectedData"}
                      suffixIcon={
                        <BiSolidDownArrow className="text-[15px]  text-[#ffffff]" />
                      }
                    >
                      <Option className="" value="selectedData">
                        <div className="h-[60px] selectSlot px-1 font-medium flex gap-3">
                          <div>
                            <div className="flex gap-1 items-center">
                              <p>Days</p>
                              <div>
                                <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                                  Fri
                                </span>
                              </div>
                              <div>
                                <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                                  Sat
                                </span>
                              </div>
                              <div>
                                <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                                  Sun
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <div className="flex">
                                <p>From</p>
                                <div>
                                  <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                                    10:00AM{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="flex">
                                <p>To</p>
                                <div>
                                  <span className="bg-[#A2A2A2] px-2 rounded-[6px]">
                                    10:00AM
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#3C3C3C] text-white my-1 p-1 w-[50px] rounded-[8px]">
                            <p className="text-wrap leading-5 text-center">
                              20% OFF
                            </p>
                          </div>
                        </div>
                      </Option>
                    </Select>
                  </ConfigProvider>
                </Form.Item>
              </div>
              <div className="w-[50%]">
                <Form.Item
                  label="Selected Type & Service Charge"
                  className="mb-3"
                >
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#e3e3e3",
                        colorBgBase: "#407F63",
                      },
                      components: {
                        Select: {
                          optionPadding: "1px",
                          //   showArrowPaddingInlineEnd: "20px",
                        },
                      },
                    }}
                  >
                    <Select
                      showSearch
                      placeholder="Select a type"
                      optionFilterProp="label"
                      className="h-[70px] slotSelect"
                      defaultValue={"selectedData2"}
                      suffixIcon={
                        <BiSolidDownArrow className="text-[15px]  text-[#ffffff]" />
                      }
                    >
                      <Option className="" value="selectedData2">
                        <div className="h-[60px] selectSlot px-1 font-medium flex gap-3">
                          <div>
                            <div className="flex gap-1 items-center">
                              <p className="w-[50px] ">Name</p>
                              <div className="w-[150px] ">
                                <span className="bg-[#A2A2A2] block w-full px-2 rounded-[6px] leading-6">
                                  Barkada Party
                                </span>
                              </div>
                            </div>

                            <div className="flex gap-1 items-center">
                              <p className="w-[50px] ">Size</p>
                              <div className="w-[150px]">
                                <span className="bg-[#A2A2A2] block w-full px-2 rounded-[6px]  leading-6">
                                  0-15 Persons
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#3C3C3C] text-white my-1 p-1 w-[50px] rounded-[8px]">
                            <p className="text-wrap leading-5 text-center">
                              AED 50.00
                            </p>
                          </div>
                        </div>
                      </Option>
                    </Select>
                  </ConfigProvider>
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-b-[10px]">
            <div className="bg-[#407F63] p-1 flex justify-between items-center">
              <div className="flex justify-between items-center gap-1">
                {/* <div> */}
                <Form.Item className="w-full mb-0">
                  <div className=" flex items-center gap-[2px]">
                    <button
                      onClick={handleAdvPaymentClick}
                      className="bg-white border-[3px] border-black w-[30px] h-[30px] rounded-[6px] flex justify-center items-center"
                    >
                      <FaCheck
                        className={`${advPayment ? "block" : "hidden"}`}
                        color="#407F63"
                        size={15}
                      />
                    </button>
                    <label htmlFor="" className="text-white">
                      Advance Payment
                    </label>
                  </div>
                </Form.Item>

                {advPayment && (
                  <>
                    <Form.Item className="mb-0">
                      <ConfigProvider
                        theme={{
                          token: {
                            colorTextPlaceholder: "#3c3c3c",
                            // colorBgBase: "#F9E8E5",
                          },
                        }}
                      >
                        <InputNumber
                          placeholder="1,000.00"
                          className="bg-[#F9E8E5]"
                        />
                      </ConfigProvider>
                    </Form.Item>

                    <div className="relative ">
                      <button
                        className="border-[2px] border-black bg-[black] p-[2px] h-[35px] w-[35px] rounded-[6px] outline-[2px] outline-white hover:border-white active:border-primeryFirst"
                        style={{ boxShadow: "0px 0px 5px #424242" }}
                      >
                        <img src={user} alt="" />
                      </button>
                      <div className="h-[20px] absolute right-[-55px] top-[18%] bg-[#00AB4E] rounded-r-[30px] px-3 text-white">
                        <span className="uppercase py-0">paid</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {advPayment && (
                <>
                  <div className="w-[45%] flex justify-end items-center gap-1">
                    <p className="text-white">Share pay-link in WhatsApp</p>
                    <button
                      className="border-[2px] p-[2px] border-black bg-[black] h-[35px] w-[35px] rounded-[6px] outline-[2px] outline-white hover:border-white active:border-primeryFirst"
                      style={{ boxShadow: "0px 0px 5px #424242" }}
                    >
                      <img src={user} alt="" />
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="bg-[#7C7C7C] p-1 flex justify-between items-center">
              <div className="flex justify-between items-center gap-1">
                <Form.Item className="w-full mb-0">
                  <div className=" flex items-center gap-[2px]">
                    <button
                      onClick={handleReminderClick}
                      className="bg-white border-[3px] border-black w-[30px] h-[30px] rounded-[6px] flex justify-center items-center"
                    >
                      <FaCheck
                        className={`${reminderKot ? "block" : "hidden"}`}
                        color="#7C7C7C"
                        size={15}
                      />
                    </button>
                    <label htmlFor="" className="text-white">
                      Reminder for KOT
                    </label>
                  </div>
                </Form.Item>
              </div>
              {reminderKot && (
                <>
                  <div className="w-[70%] flex justify-between items-center gap-[6px]">
                    <div className="flex items-center gap-1 w-full">
                      <span className="text-[#F3DECF]">Before</span>
                      <div
                        onClick={() => setSelectedTime("30")}
                        className="bg-primeryFirst text-white cursor-pointer border-2 rounded-[8px] relative h-[35px] px-[6px] flex  justify-center items-center"
                        style={{
                          opacity: `${selectedTime == "30" ? "1" : 0.7}`,
                        }}
                      >
                        <p>30 Min.</p>

                        {selectedTime == "30" && (
                          <div className="absolute w-[20px] h-[20px] top-[-6px] right-[-6px] bg-primeryFirst border-2 rounded-full flex justify-center items-center">
                            <GiCheckMark />
                          </div>
                        )}
                      </div>
                      <div
                        onClick={handleArrowToggle}
                        className="h-[35px] w-[35px] bg-black text-white flex justify-center items-center rounded-[8px] border-2 border-black hover:border-white active:border-primeryFirst"
                      >
                        <RiArrowRightDoubleFill className="text-3xl" />
                      </div>
                      {beforeArrow && (
                        <>
                          <div
                            onClick={() => setSelectedTime("15")}
                            className="bg-primeryFirst text-white cursor-pointer border-2 rounded-[8px] relative h-[35px] px-[6px] flex  justify-center items-center"
                            style={{
                              opacity: `${selectedTime == "15" ? "1" : 0.7}`,
                            }}
                          >
                            <p>15 Min.</p>
                            {selectedTime == "15" && (
                              <div className="absolute w-[20px] h-[20px] top-[-6px] right-[-6px] bg-primeryFirst border-2 rounded-full flex justify-center items-center">
                                <GiCheckMark />
                              </div>
                            )}
                          </div>
                          <div
                            onClick={() => setSelectedTime("5")}
                            className="bg-primeryFirst text-white cursor-pointer border-2 rounded-[8px] relative h-[35px] px-[6px] flex  justify-center items-center"
                            style={{
                              opacity: `${selectedTime == "5" ? "1" : 0.7}`,
                            }}
                          >
                            <p>5 Min.</p>
                            {selectedTime == "5" && (
                              <div className="absolute w-[20px] h-[20px] top-[-6px] right-[-6px] bg-primeryFirst border-2 rounded-full flex justify-center items-center">
                                <GiCheckMark />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    {beforeArrow && (
                      <>
                        <div className="flex items-center justify-end gap-1 ">
                          <span className="text-[#F3DECF]">Or</span>
                          <div className="flex gap-1 items-center">
                            <span className="text-[#F3DECF]">at</span>
                            <Form.Item className="w-[100px] mb-0 ">
                              <ConfigProvider
                                theme={{
                                  token: {
                                    colorTextPlaceholder: "#f8f8f8",
                                    colorBgBase: "#F95737",
                                  },
                                }}
                              >
                                <TimePicker
                                  className="px-1 border-2 border-white cursor-pointer"
                                  style={{
                                    opacity: `${
                                      selectedTime == "timepicker" ? "1" : 0.7
                                    }`,
                                  }}
                                  placeholder="10:30PM"
                                  prevIcon={<CloseCircleOutlined />}
                                  suffixIcon={
                                    <PiClockCountdown className="text-xl text-[#272727]" />
                                  }
                                  onClick={() => setSelectedTime("timepicker")}
                                />
                              </ConfigProvider>
                            </Form.Item>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="px-3 py-2 flex justify-between items-center gap-8">
              <div className="flex items-center">
                <p className="uppercase w-[80px] text-white">
                  {" "}
                  chat with customer
                </p>
                <img src={wApp} alt="" width={35} />
              </div>
              <div className="  flex justify-center items-center gap-4">
                <button
                  onClick={() => setEditText((prevEditText) => !prevEditText)}
                  className="bg-[#D1D7E0] hover:bg-transparent hover:text-white font-medium rounded-[8px] leading-4 py-[4px] px-5  w-[120px] border hover:border-white active:bg-primeryFirst uppercase"
                >
                  {editText ? "update& close" : "edit booking"}
                </button>
                <button className="bg-[#D1D7E0] hover:bg-transparent hover:text-white font-medium rounded-[8px] leading-4 py-[4px] px-4  w-[130px] border hover:border-white active:bg-primeryFirst uppercase">
                  proceed to order/K.O.T
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

export default ReminderBooking;
