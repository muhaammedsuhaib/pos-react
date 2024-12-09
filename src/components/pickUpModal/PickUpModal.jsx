import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ConfigProvider, DatePicker, Modal, Radio, Select } from "antd"
import { FaCheck } from "react-icons/fa6"
import user from "../../../public/UserprofileWhite.svg";
import './pickUpModal.css'
import { selectOrderTypeDetails } from "../../reducer/orders/reducer";
import { convertTo12Hour } from "../utils/utils";
import Customer from "../customer/Customer";
import { FiSearch } from "react-icons/fi";
import { selectActiveCustomers } from "../../reducer/customer/reducer";
const PickUpModal = ({ openModal, setOpenModal }) => {
  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  const customerDetails = useSelector(selectActiveCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState('today')
  const [selectedSlot, setSelectedSlot] = useState("");
  const [pickupPoints, setPickupPoints] = useState([]);
  const [pickupTimeSlots, setPickupTimeSlots] = useState([]);
  const [customerOptions, setCustomerOptions] = useState([]);
  const [isCustomerModal, setIsCustomerModal] = useState(false);
  useEffect(() => {
    if (customerDetails && customerDetails.data && Array.isArray(customerDetails.data)) {
      const datas = [];
      customerDetails.data.map((item) => {
        datas.push({
          value: item.id,
          label: `${item.customer_name} [${item.phone}]`,
          data: item
        })
      });
      setCustomerOptions(datas);
    }
  }, [customerDetails]);
  useEffect(() => {
    if (orderTypeDetails && orderTypeDetails.data) {
      if (orderTypeDetails.data.forms) {
        const datas = [];
        const datasPackage = [];
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'pickup_points') {
            form.data.map((item, index) => {
              if (index == 0 && selectedOption == '') {
                setSelectedOption(item.id);
              }
              datas.push({
                value: item.id,
                label: item.name,
                data: item,
              });
            });
            setPickupPoints(datas);
          }
          setTimeout(() => {
            if (form.name == 'time_slots') {
              if (selectedDate === 'today') {
                form.data.today.map((time, index) => {
                  if (index == 0 && selectedSlot == '') {
                    setSelectedSlot(time);
                  }
                  datasPackage.push({
                    value: time,
                    label: time,
                    data: time,
                  });
                });
              } else {
                form.data.others.map((time, index) => {
                  if (index == 0 && selectedSlot == '') {
                    setSelectedSlot(time);
                  }
                  datasPackage.push({
                    value: time,
                    label: time,
                    data: time,
                  });
                });
              }
              setPickupTimeSlots(datasPackage);
            }
          }, 15);
        });
      } else {
        setPickupPoints([]);
        setPickupTimeSlots([]);
      }
    } else {
      setPickupPoints([]);
      setPickupTimeSlots([]);
    }

  }, [orderTypeDetails, selectedDate, openModal]);
  const handleRadioChange = (e) => {
    setSelectedSlot('');
    if (e && e.target && e.target.value) {
      setSelectedDate(e.target.value);
    } else {
      setSelectedDate(e);
    }
  };
  const options = [
    { label: "Abu Dhabi City (Other Streets) - AED 7.00", value: "Abu Dhabi City (Other Streets)" },
    { label: "Reem Island - AED 15.00", value: "Reem Island" },
    { label: "Muroor Area - AED 12.00", value: "Muroor Area" },
    { label: "Al Mushrif Area - AED 15.00", value: "Al Mushrif Area" },
    { label: "Musaffah - AED 60.00", value: "Musaffah" },
    { label: "Abu Dhabi City (Electra & Najdah) - AED 5.00", value: "Abu Dhabi City (Electra & Najdah)" },
  ];
  const timeSlots = [
    "10:00 pm - 11:00 pm",
    "11:00 pm - 12:00 am",
    "12:00 am - 1:00 am",
    "1:00 am - 2:00 am",
    "2:00 am - 3:00 am",
    "3:00 am - 4:00 am",
    "4:00 am - 5:00 am",
    "5:00 am - 6:00 am",
    "6:00 am - 7:00 am",
    "7:00 am - 8:00 am",
    "8:00 am - 9:00 am",
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
  ];
  return (
    <Modal
      title="PICK-UP"
      open={openModal}
      onOk={() => {
        if (setOpenModal) setOpenModal(false)
      }}
      onCancel={() => {
        if (setOpenModal) setOpenModal(false)
      }}
      footer={false}
      width={650}
      className="posPopup deliveryPopup"
      onClose={() => {
        if (setOpenModal) setOpenModal(false)
      }}
    >
      <div className="modal-body p-3">
        <div className="relative flex items-center">
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
              className="w-full"
              placeholder="Select Customer"
              allowClear
              value={selectedCustomer}
              defaultValue={selectedCustomer}
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
              // options={[
              //   {
              //     value: "Jessica Alba (+971506688553)",
              //     label: "Jessica Alba (+971506688553)",
              //   },
              // ]}
              options={customerOptions}
              onChange={(value) => { setSelectedCustomer(value); }}
            />
          </ConfigProvider>
          <div
            className="bg-primeryFirst h-[33px] w-[45px] rounded-lg ml-1 flex justify-center items-center border border-primeryFirst hover:border-white active:border-primeryFirst cursor-pointer"
            onClick={() => setIsCustomerModal(true)}
          >
            <img src={user} alt="" width={30} />
          </div>
          <Customer
            show={isCustomerModal}
            hide={setIsCustomerModal}
            savedCustomer={(id) => {
              setSelectedCustomer(id);
              console.log(id, 'id');
              setIsCustomerModal(false);
            }}
          />
        </div>
        <div>
          <h4 className="pb-4 text-[12px] font-medium text-[#fff]">
            Select Pickup Area
          </h4>
          <div className="flex flex-wrap gap-3">
            {pickupPoints.map((option) => (
              <label
                key={option.value}
                className={`delivery-tab py-1 px-5 rounded-[3px] relative cursor-pointer ${selectedOption === option.value ? "active bg-[#F95433] text-white" : "text-[#4b4b4b] bg-[#F9D8D1]"
                  }`}
                // onClick={() => setSelectedOption(option.value)}
                htmlFor={option.value + '_radio'}
              >
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => setSelectedOption(option.value)}
                  className="hidden"
                  id={option.value + '_radio'}
                />
                <span>{option.label}</span>
                {selectedOption === option.value && (
                  <div className="delivery-tab-check absolute -top-2 -right-2 border-2 border-white w-[20px] h-[20px] flex justify-center items-center bg-[#F95433] rounded-full">
                    <FaCheck className="p-[1px]" />
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-[12px] font-medium text-[#fff] pb-3">
            Pickup Date <sup className="text-[15px] text-[#ff3b3b]">*</sup>
          </h4>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#1DA2F1", // Custom color when checked
                colorPrimaryHover: "#4393c0", // Custom hover color
              },
              components: {
                Radio: {
                  buttonSolidCheckedBg: "#1DA2F1", // Background color of checked radio
                  colorPrimary: "#1DA2F1", // Radio button's primary color
                },
              },
            }}
          >
            <Radio.Group className="flex gap-3" onChange={handleRadioChange} value={selectedDate}>
              <div
                className="flex items-center gap-4 bg-[#F9D8D1] text-[#7742E5] font-bold px-5 py-[3px] rounded-[4px] cursor-pointer"
                onClick={() => handleRadioChange('today')}
              >
                <Radio className="custom-black-radio2" value="today">Today</Radio>
              </div>
              <div
                className="flex items-center gap-4 bg-[#F9D8D1] text-[#7742E5] font-bold px-5 py-[3px] rounded-[4px] cursor-pointer"
                onClick={() => handleRadioChange('others')}
              >
                <Radio className="custom-black-radio2" value="others">Others</Radio>
              </div>
            </Radio.Group>
            {selectedDate === 'others' && (
              <div className="mt-[5px]">
                <DatePicker className="w-[265px]" />
              </div>
            )}
          </ConfigProvider>

        </div>

        <div className="mt-5">
          <h4 className="text-[12px] font-medium text-[#fff] pb-3">
            Pickup time <sup className="text-[15px] text-[#ff3b3b]">*</sup>
          </h4>
          <div className="grid grid-cols-6 gap-3 h-[34vh] overflow-y-scroll py-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#999999] [&::-webkit-scrollbar-thumb]:bg-[#ff3b3b] dark:[&::-webkit-scrollbar-track]:bg-[#999999] dark:[&::-webkit-scrollbar-thumb]:bg-[#ff3b3b]">
            {pickupTimeSlots.map((slot, index) => (
              <label
                key={index}
                className={`py-1 px-3 rounded-[3px] flex flex-col items-center justify-center font-semibold max-h-[10vh] cursor-pointer relative ${selectedSlot === slot ? "bg-[#F95433] text-white" : "bg-[#F9D8D1] text-[#4b4b4b]"}`}
                onClick={() => setSelectedSlot(slot.value)}
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot.value}
                  checked={selectedSlot === slot.value}
                  onChange={() => setSelectedSlot(slot.value)}
                  className="hidden"
                />
                <span>{convertTo12Hour(slot.label.split(" - ")[0])}</span> <span>-</span> <span>{convertTo12Hour(slot.label.split(" - ")[1])}</span>
                {selectedSlot === slot.value && (
                  <div className="delivery-tab-check absolute -top-2 -right-2 border-2 border-white w-[20px] h-[20px] flex justify-center items-center bg-[#F95433] rounded-full">
                    <FaCheck className="p-[1px] text-white" />
                  </div>
                )}
              </label>
            ))}

          </div>

          <div className="flex justify-center mt-5 confirm_details">
            <button
              className="bg-primeryFirst px-4 py-1 rounded-full text-white border-2 border-transparent hover:border-black active:bg-black"
              onClick={() => {
                if (setModalOpen) setModalOpen(false);
              }}
            >
              CONFIRM DETAILS
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PickUpModal