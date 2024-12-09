/* eslint-disable react/prop-types */
import { ConfigProvider, DatePicker, Form, Input, Modal, Select } from "antd";
import "./reservationModal.css";
import { Option } from "antd/es/mentions";
import { BiSolidDownArrow } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { MdDateRange } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import TextArea from "antd/es/input/TextArea";
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const ReservationModal = ({ openModal, setOpenModal }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [textArea, setTextArea] = useState(false);
  const [reservationType, setReservationType] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: '',
        preferredCountries: ['ae', 'us', 'gb'],
        separateDialCode: true,
      });
      inputRef.current.addEventListener("open:countrydropdown", () => {
        const countryList = document.querySelector(".iti__country-list");
        if (countryList) {
          countryList.style.top = 'auto';
          countryList.style.bottom = `${inputRef.current.offsetHeight}px`; 
        
        }
      });


      inputRef.current.addEventListener("close:countrydropdown", () => {
        const countryList = document.querySelector(".iti__country-list");
        if (countryList) {
          countryList.style.top = ''; 
          countryList.style.bottom = ''; 
        }
      });
    }
  }, []);

  const handleReservationTypeChange = (value) => {
    setReservationType(value);
  };

  const onDateChange = (date) => {
    setSelectedDate(date ? dayjs(date).format("DD/MM/YYYY HH:mm") : null);
  };
  // const prefixSelector = (
  //   <Form.Item className="m-0 w-[70px] h-[40px] p-0">
  //     <Select
  //       className="w-full focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-none h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] phonePrefix p-0"
  //       value={"+971"}
  //       suffixIcon={<BiSolidDownArrow />}
  //     >
  //       <Option value="86">+971</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );
  return (
    <Modal
      open={openModal}
      onCancel={() => setOpenModal(false)}
      onOk={() => setOpenModal(false)}
      footer={null}
      title="BOOKING / RESERVATION"
      width={650}
      className="paymentPoUp posPopup"
    >
      <div className="w-full pb-[10px] pt-[30px] px-[25px]">
        <div className="w-full">
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  labelColor: "#fff",
                },
              },
            }}
          >
            <Form layout="vertical">
              <div className="w-full grid grid-flow-row grid-cols-2 gap-x-[35px]">
                <div className="">
                  <Form.Item
                    label="Phone"
                    name={"phone"}
                    rules={[{ required: true }]}
                    colon={false}
                    className="p-0"
                  >
                    <input ref={inputRef} type="tel" placeholder="Phone Number" className="w-full bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] reservationSelect hover:border-primeryFirst hover:border-[1px]"/>
                  </Form.Item>
                  <Form.Item
                    label="Reservation Type"
                    rules={[{ required: true }]}
                    name={"restype"}
                    colon={false}
                  >
                    <Select
                      onChange={handleReservationTypeChange}
                      className="bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] reservationSelect hover:border-primeryFirst hover:border-[1px]"
                      placeholder="Reservetion Type"
                      suffixIcon={<BiSolidDownArrow />}
                    >
                      <Option value="Dine-in">Dine-in</Option>
                      <Option value="Buffet">Buffet</Option>
                      <Option value="Party">Party</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Event Date and Time"
                    name={"date"}
                    rules={[{ required: true }]}
                    colon={false}
                  >
                    <DatePicker
                      onChange={onDateChange}
                      value={
                        selectedDate
                          ? dayjs(selectedDate, "DD/MM/YYYY HH:mm")
                          : null
                      }
                      format="DD/MM/YYYY HH:mm"
                      showTime
                      suffixIcon={<MdDateRange />}
                      className="w-full bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px]"
                      placeholder="01/10/2032 12:50"
                    />
                  </Form.Item>
                  {reservationType === "Party" ? (
                    <Form.Item
                      label="Party Timing"
                      name={"partyTime"}
                      colon={false}
                    >
                      <Select
                        className="bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px] reservationSelect text-[12px]"
                        placeholder="Party Time"
                        suffixIcon={<BiSolidDownArrow />}
                      >
                        <Option
                          value="Any day | 10:00 Am - 01:00 PM | (20% OFF)"
                          className="text-[10px]"
                        >
                          Any day | 10:00 Am - 01:00 PM | (20% OFF)
                        </Option>
                        <Option
                          value="Any day | 10:00 Am - 01:00 PM | (21% OFF)"
                          className="text-[10px]"
                        >
                          Any day | 10:00 Am - 01:00 PM | (20% OFF)
                        </Option>
                        <Option
                          value="Any day | 10:00 Am - 01:00 PM | (22% OFF)"
                          className="text-[10px]"
                        >
                          Any day | 10:00 Am - 01:00 PM | (20% OFF)
                        </Option>
                      </Select>
                    </Form.Item>
                  ) : (
                    ""
                  )}
                  <div
                    className="w-full flex items-center space-x-[10px] text-[12px] cursor-pointer"
                    onClick={() => setTextArea(!textArea)}
                  >
                    <p className="text-gray-400">Any Special Request?</p>{" "}
                    <BiSolidDownArrow className="text-primeryFirst" />
                  </div>

                  <div
                    className={`transition-all duration-700  overflow-hidden ${
                      textArea
                        ? "max-h-[150px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <Form.Item className="mt-[10px]">
                      <TextArea
                        rows={3}
                        className="bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px]"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="">
                  <Form.Item
                    label="Name"
                    name={"name"}
                    colon={false}
                    rules={[{ required: true }]}
                  >
                    <Input
                      className=" focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px] bookingInput"
                      placeholder="Name"
                    />
                  </Form.Item>
                  {reservationType !== "Party" ? (
                    <Form.Item
                      label="Number of Guests"
                      name={"number"}
                      colon={false}
                    >
                      <Input
                        className="bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px]"
                        placeholder="Number of Guests"
                      />
                    </Form.Item>
                  ) : (
                    ""
                  )}
                  {reservationType === "Party" ? (
                    <>
                      <Form.Item
                        label="Party Package"
                        name={"partyPackage"}
                        colon={false}
                      >
                        <Select
                          className="bookingInput focus:outline-none outline-none border-none focus:border-black bg-[#E8E8E8] rounded-[3px] h-[35px] focus:bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:border-primeryFirst hover:border-[1px] reservationSelect text-[12px]"
                          placeholder="Party Package"
                          suffixIcon={<BiSolidDownArrow />}
                        >
                          <Option value="0 - 15 person">0 - 15 person</Option>
                          <Option value="0 - 25 person">0 - 25 person</Option>
                          <Option value="0 - 35 person">0 - 35 person</Option>
                        </Select>
                      </Form.Item>
                      <div className="w-full">
                        <p className="text-[12px] text-gray-400">
                          Party-hall rental & Service change
                        </p>
                        <div className="w-full rounded-[5px] overflow-hidden">
                          <div className="w-full bg-[#949292] py-[5px] px-[5px] text-[12px] text-white">
                            AED 50
                          </div>
                          <div className="w-full bg-[#D6DCE5] p-[3px]">
                            <div className="w-full">
                              <p className="font-bold text-[12px] text-green-900">
                                Free Facilities
                              </p>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  2-3 Hourse free venue use
                                </p>
                              </div>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  Exlusive Party-Hall
                                </p>
                              </div>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  Long table set-up
                                </p>
                              </div>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  Karooke/ TV / Videoke
                                </p>
                              </div>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  One free-buffet for Organizer
                                </p>
                              </div>
                              <div className="w-full flex items-center space-x-[5px]">
                                <p className="w-[13px] h-[13px] bg-green-900 rounded-full flex items-center justify-center text-white text-[10px]">
                                  <TiTick />
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  Decoration allowed
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Form>
          </ConfigProvider>
          <div className="w-full pt-[10px] flex justify-center items-center">
            <button className="bg-primeryFirst px-4 py-1 rounded-full text-white border-2 border-transparent hover:border-black active:bg-black">
              CONFIRM DETAILS
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReservationModal;
