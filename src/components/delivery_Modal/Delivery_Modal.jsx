/* eslint-disable react/prop-types */
import { ConfigProvider, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaCheck } from "react-icons/fa6";
import user from "../../../public/UserprofileWhite.svg";
import "./delivery_modal.css"
import { useEffect, useState } from "react";
import { selectOrderTypeDetails } from "../../reducer/orders/reducer";
import { useSelector } from "react-redux";
import Customer from "../customer/Customer";
import { selectActiveCustomers } from "../../reducer/customer/reducer";
import { FiSearch } from "react-icons/fi";
const Delivery_Modal = ({ openModal, setOpenModal }) => {
  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  const customerDetails = useSelector(selectActiveCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [pickupPoints, setPickupPoints] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
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
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'delivery_area') {
            form.data.map((item, index) => {
              if (index == 0 && selectedOption == '') {
                setSelectedOption(item.id);
              }
              datas.push({
                value: item.id,
                label: item.area,
                data: item,
              });
            });
          }
        });
        setPickupPoints(datas);
      } else {
        setPickupPoints([]);
      }
    } else {
      setPickupPoints([]);
    }
  }, [orderTypeDetails]);

  const options = [
    { label: "Abu Dhabi City (Other Streets) - AED 7.00", value: "Abu Dhabi City (Other Streets)" },
    { label: "Reem Island - AED 15.00", value: "Reem Island" },
    { label: "Muroor Area - AED 12.00", value: "Muroor Area" },
    { label: "Al Mushrif Area - AED 15.00", value: "Al Mushrif Area" },
    { label: "Musaffah - AED 60.00", value: "Musaffah" },
    { label: "Abu Dhabi City (Electra & Najdah) - AED 5.00", value: "Abu Dhabi City (Electra & Najdah)" },
  ];

  return (
    <Modal
      title="delivery"
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={false}
      width={650}
      className="posPopup deliveryPopup"
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
        <div className="flex flex-wrap gap-3 max-h-[17.5vh] overflow-y-scroll py-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#999999] [&::-webkit-scrollbar-thumb]:bg-[#ff3b3b] dark:[&::-webkit-scrollbar-track]:bg-[#999999] dark:[&::-webkit-scrollbar-thumb]:bg-[#ff3b3b]">
          {pickupPoints.map((option) => (
            <label
              key={option.value}
              className={`delivery-tab py-1 px-5 rounded-[3px] relative cursor-pointer ${selectedOption === option.value ? "active bg-[#F95433] text-white" : "text-[#4b4b4b] bg-[#F9D8D1]"
                }`}
              onClick={() => setSelectedOption(option.value)}
            >
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => setSelectedOption(option.value)}
                className="hidden"
              />
              <span>{option.label} - {option.data.cost}</span>
              {selectedOption === option.value && (
                <div className="delivery-tab-check absolute -top-2 -right-2 border-2 border-white w-[20px] h-[20px] flex justify-center items-center bg-[#F95433] rounded-full">
                  <FaCheck className="p-[1px]" />
                </div>
              )}
            </label>
          ))}
        </div>

        <div className="pt-6 space-y-3 delivery-address-details">
          <TextArea rows={5} placeholder="Delivery Address *" />
          <Input type="text" placeholder="Google Map link" />
          <div className="flex justify-center">
            <button className="bg-primeryFirst px-4 py-1 rounded-full text-white border-2 border-transparent hover:border-black active:bg-black">
              CONFIRM DETAILS
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Delivery_Modal;
