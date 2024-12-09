import React, { useEffect, useState } from "react";
import "./notification.css";
import wApp from "../../../public/images/whatsapp.png";
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
import dayjs from "dayjs";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockCountdown } from "react-icons/pi";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import user from "../../../public/UserprofileWhite.svg";
import { Option } from "antd/es/mentions";
import { selectOrderTypeDetails } from "../../reducer/orders/reducer";
import { useSelector } from "react-redux";
import { getDayNameFromNumber } from "../utils/utils";
import SlotOption from "./SlotOption";
import BookingTableModal from "../bookingTableModal/BookingTableModal";
function NewBooking({ open, closeAction, ...props }) {
  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [partySlots, setPartySlots] = useState([]);
  const [partyTiming, setPartyTiming] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isParty, setIsParty] = useState(false);
  const [isTableModal, setIsTableModal] = useState(false);

  const onDateChange = (date) => {
    setSelectedDate(date ? dayjs(date).format("DD/MM/YYYY HH:mm") : null);
  };

  useEffect(() => {
    if (orderTypeDetails && orderTypeDetails.data) {
      if (orderTypeDetails.data.forms) {
        const datas = [];
        const datasPackage = [];
        const datasPackageTime = [];
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'reservation_type') {
            form.data.map((item) => {
              datas.push({
                value: item.id,
                label: item.name,
                data: item,
              });
            });
          }
          if (form.name == 'package') {
            form.data.map((item) => {
              datasPackage.push({
                value: item.id,
                label: item.name,
                data: item,
              });
            });
          }
          if (form.name == 'package_time') {
            form.data.map((item) => {
              const weekDays = item.week_days.split(',');
              const result = weekDays.length === 7
                ? 'Any Days'
                : weekDays.map(getDayNameFromNumber).join(', ');
              datasPackageTime.push({
                value: item.id,
                label: result,
                data: item,
              });
            });
          }
        });
        setBookingTypes(datas);
        setPartySlots(datasPackage);
        setPartyTiming(datasPackageTime);
      } else {
        setBookingTypes([]);
        setPartySlots([]);
        setPartyTiming([]);
      }
    } else {
      setBookingTypes([]);
      setPartySlots([]);
      setPartyTiming([]);
    }
  }, [orderTypeDetails]);

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
    <>
      <Modal
        className="posPopupGreen"
        footer={null}
        title="NEW BOOKING"
        width={650}
        open={open}
        onCancel={() => closeAction(false)}
      >
        <div className="w-full new-booking-form ">
          <Form layout="vertical">
            <div className="w-full pb-1 p-2 bg-[#4B4B4B] ">
              <div className="w-full flex ">
                <div className="flex w-[55%] items-center gap-2">
                  <Form.Item label="Customer's Name" className="w-full mb-3">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorTextPlaceholder: "#6d6d6d",
                          colorBgBase: "#F9E8E5",
                        },
                      }}
                    >
                      <Select
                        showSearch
                        placeholder="Select Customer"
                        allowClear
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          String(option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                          String(optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare(
                              String(optionB?.label ?? "").toLowerCase()
                            )
                        }
                        suffixIcon={
                          <FiSearch className="text-xl text-[#949494]" />
                        }
                        options={[
                          {
                            value: "Jessica Alba (+971506688553)",
                            label: "Jessica Alba (+971506688553)",
                          },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                  <div className="bg-primerySecond h-[33px] w-[45px] rounded-lg mt-[15px] flex justify-center items-center border border-primerySecond hover:border-white active:border-primeryFirst">
                    <img src={user} alt="" width={30} />
                  </div>
                </div>
                <div className="w-[45%] flex justify-end gap-2">
                  <Form.Item label="Event Date" className="w-[48%]  mb-3">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorTextPlaceholder: "#6d6d6d",
                        },
                      }}
                    >
                      <DatePicker
                        onChange={onDateChange}
                        value={selectedDate ? dayjs(selectedDate, "DD/MM/YYYY") : null}
                        format="DD/MM/YYYY"
                        className="pr-1 bg-[#F9E8E5]"
                        suffixIcon={
                          <IoCalendarOutline className="text-xl text-[#595959]" />
                        }
                        placeholder="01/10/2032"
                      />
                    </ConfigProvider>
                  </Form.Item>
                  <Form.Item label="Event Time" className="w-[37%]  mb-3 ">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorTextPlaceholder: "#6d6d6d",
                        },
                      }}
                    >
                      <TimePicker
                        className="bg-[#F9E8E5] pr-1"
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
                          colorTextPlaceholder: "#6d6d6d",
                          colorBgBase: "#F9E8E5",
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
                        options={bookingTypes}
                        allowClear
                        onChange={(type) => {
                          const selectedParty = bookingTypes.find((item) => item.value === type);
                          setIsParty(selectedParty.data.is_stick == 1);
                        }}
                      />
                    </ConfigProvider>
                  </Form.Item>
                  <Form.Item label="No.of Guests" className="w-[40%] mb-3">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorTextPlaceholder: "#6d6d6d",
                        },
                      }}
                    >
                      <InputNumber
                        placeholder="15"
                        className="px-6 bg-[#F9E8E5]"
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>
                <div className="w-[45%] flex justify-end gap-1 mt-6">
                  <Form.Item className=" mb-3">
                    <div className=" flex items-center gap-[2px]">
                      <label htmlFor="tableReqNew" className="text-white cursor-pointer">
                        Table Required
                      </label>
                      <button
                        onClick={handleClick}
                        className="bg-white w-[30px] h-[30px] rounded-[8px] flex justify-center items-center"
                        id="tableReqNew"
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
                    <button
                      className="bg-[#F95737] text-white rounded-[30px] px-2 py-[5px] border border-primeryFirst hover:border-white"
                      onClick={() => {
                        setIsTableModal(true);
                      }}
                    >
                      Select Table
                    </button>
                  </Form.Item>
                </div>
              </div>
              <div>
                <Form.Item className=" mb-2">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorTextPlaceholder: "#6d6d6d",
                      },
                    }}
                  >
                    <Input.TextArea
                      placeholder="Customer's Request"
                      className="bg-[#F9E8E5] p-1"
                      rows={3}
                    />
                  </ConfigProvider>
                </Form.Item>
              </div>
            </div>

            <div className={`bg-[#4B4B4B] p-2 mt-[10px] ${!isParty && "hidden"}`}>
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
                        suffixIcon={
                          <BiSolidDownArrow className="text-[15px]  text-[#ffffff]" />
                        }
                      >
                        {partyTiming.map((item) => (
                          <Option className="hover:opacity-80" value={item.value}>
                            <SlotOption
                              item={item}
                              key={item.value}
                            />
                          </Option>
                        ))}
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
                        suffixIcon={
                          <BiSolidDownArrow className="text-[15px]  text-[#ffffff]" />
                        }
                      >
                        {partySlots.map((item) => (
                          <Option className="hover:opacity-80" value={item.value}>
                            <div className="h-[60px] selectSlot px-1 font-medium flex gap-3">
                              <div>
                                <div className="flex gap-2 items-center">
                                  <p className="w-[50px] ">Name</p>
                                  <div className="w-[150px] ">
                                    <span className="bg-[#A2A2A2] block w-full px-2 rounded-[6px] leading-6">
                                      {item.label}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <p className="w-[50px]">Person </p>
                                  <div className="w-[150px]">
                                    <span className="bg-[#A2A2A2] block w-full px-2 rounded-[6px]  leading-6">
                                      {item.data.person_start_count + " to " + item.data.person_end_count}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#3C3C3C] text-white my-1 p-1 w-[50px] rounded-[8px]">
                                <p className="text-wrap leading-5 text-center">
                                  AED {item.data.price}
                                </p>
                              </div>
                            </div>
                          </Option>
                        ))}
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
                          <InputNumber placeholder="1,000.00" className="bg-[#F9E8E5]" />
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
                                      opacity: `${selectedTime == "timepicker" ? "1" : 0.7
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
                    {/* <div className="w-[70%] flex justify-between items-center gap-[6px]">
                    <div className="flex items-center gap-1 w-full">
                      <span className="text-[#F3DECF]">Before</span>

                      {timeOptions.map((option) => (
                        <div
                          key={option.value}
                          className={`bg-primeryFirst text-white border-2 rounded-[8px] relative h-[35px] px-[6px] flex justify-center items-center cursor-pointer
              ${selectedTime === option.value ? "border-white" : "opacity-70"}`}
                          onClick={() => setSelectedTime(option.value)}
                        >
                          <p>{option.label}</p>
                          {selectedTime === option.value && (
                            <div className="absolute w-[20px] h-[20px] top-[-6px] right-[-6px] bg-primeryFirst border-2 rounded-full flex justify-center items-center">
                              <GiCheckMark />
                            </div>
                          )}
                        </div>
                      ))}

                      <button
                        onClick={handleArrowToggle}
                        className="h-[35px] w-[35px] bg-black text-white flex justify-center items-center rounded-[8px] border-2 border-black hover:border-white active:border-primeryFirst cursor-pointer"
                      >
                        <RiArrowRightDoubleFill className="text-3xl" />
                      </button>
                    </div>

                    {beforeArrow && (
                      <div className="flex items-center justify-end gap-1 ">
                        <span className="text-[#F3DECF]">Or</span>
                        <div className="flex gap-1 items-center">
                          <span className="text-[#F3DECF]">at</span>
                          <Form.Item className="w-full mb-0 ">
                            <ConfigProvider
                              theme={{
                                token: {
                                  colorTextPlaceholder: "#f8f8f8",
                                  colorBgBase: "#F95737",
                                },
                              }}
                            >
                              <TimePicker
                                className="pl-1 pr-0 border-2 border-white "
                                style={{ opacity: "0.7" }}
                                placeholder="10:30PM"
                                prevIcon={<CloseCircleOutlined />}
                                suffixIcon={
                                  <PiClockCountdown className="text-xl text-[#272727]" />
                                }
                              />
                            </ConfigProvider>
                          </Form.Item>
                        </div>
                      </div>
                    )}
                  </div> */}
                  </>
                )}
              </div>
              <div className="p-3 text-white flex justify-between items-center gap-8">
                <div className="flex items-center">
                  <p className="uppercase w-[80px]"> chat with customer</p>
                  <img src={wApp} alt="" width={40} />
                </div>
                <div className=" text-white flex justify-center items-center gap-4">
                  <button className="bg-primeryFirst hover:bg-transparent rounded-[8px] leading-4 py-[2px] px-5  w-[120px] border hover:border-white active:bg-primerySecond uppercase">
                    add <br /> items
                  </button>

                  <button className="bg-primeryFirst hover:bg-transparent rounded-[8px] leading-4 py-[2px] px-5  w-[120px] border hover:border-white active:bg-primerySecond uppercase">
                    save & close
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
      <BookingTableModal
        open={isTableModal}
        closeModal={setIsTableModal}
      />
    </>
  );
}

export default NewBooking;
