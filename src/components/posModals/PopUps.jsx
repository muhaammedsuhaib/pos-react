import { Button, ConfigProvider, Input, Modal, Radio } from "antd";
import { useState } from "react";
import "./pop.css";

import dineIn from "../../../public/images/pos-category-images/dining-table_15725489.svg";
import deliveryImg from "../../../public/images/pos-category-images/food-delivery_8004323.svg";
import pickup from "../../../public/images/pos-category-images/takeaway_7217445.svg";
import booking from "../../../public/images/pos-category-images/withdrawal_6926414.svg";
import takwaway from "../../../public/images/pos-category-images/take-away_11529049.svg";
import aggregator from "../../../public/images/pos-category-images/order-food_7217466.svg";

import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PopUps() {
  const [orderType, setOrderType] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const navigate = useNavigate();
  const { TextArea } = Input;

  return (
    <div className="container mx-auto pt-10 popups">
      <div className=" h-screen flex gap-4 items-start">
        <a
          href="#"
          className="bg-slate-400 text-white p-5"
          data-toggle="modal"
          onClick={() => setOrderType(true)}
        >
          Order type
        </a>

        <a
          href="#"
          className="bg-slate-400 text-white p-5"
          data-toggle="modal"
          onClick={() => setDelivery(true)}
        >
          Delivery
        </a>
      </div>

      {/* Order type modal */}
      <Modal
        title="select order type"
        open={orderType}
        onOk={() => setOrderType(false)}
        onCancel={() => setOrderType(false)}
        footer={false}
        width={650}
        className="posPopup orderTypePopup"
      >
        <div className=" modal-body">
          <div className="grid grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14 p-8">
            <div
              className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px] "
              onClick={() => {
                navigate("/dine-in");
              }}
            >
              <div className="h-[75%] flex">
                <img src={dineIn} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                Dine-in
              </div>
            </div>
            <div
              className="order-type-item pt-2 active bg-[#74B698] rounded-[25px] h-[120px]"
              onClick={() => {
                navigate("/delivery");
              }}
            >
              <div className="h-[75%] flex">
                <img src={deliveryImg} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                delivery
              </div>
            </div>
            <div
              className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]"
              onClick={() => {
                navigate("/pick-up");
              }}
            >
              <div className="h-[75%] flex">
                <img src={pickup} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                pick-up
              </div>
            </div>
            <div
              className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]"
              onClick={() => {
                navigate("/booking");
              }}
            >
              <div className="h-[75%] flex">
                <img src={booking} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                booking
              </div>
            </div>
            <div
              className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]"
              onClick={() => {
                navigate("/take-away");
              }}
            >
              <div className="h-[75%] flex">
                <img src={takwaway} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                take away
              </div>
            </div>
            <div
              className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]"
              onClick={() => {
                navigate("/aggregator");
              }}
            >
              <div className="h-[75%] flex">
                <img src={aggregator} alt="" width={70} className="mx-auto" />
              </div>
              <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
                aggregator
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* delivery modal */}
      <Modal
        title="delivery"
        open={delivery}
        onOk={() => setDelivery(false)}
        onCancel={() => setDelivery(false)}
        footer={false}
        width={650}
        className="posPopup deliveryPopup"
      >
        <div className=" p-3 bg-[#636363]" style={{backgroundColor:'#636363'}}>
          <div className="flex flex-wrap gap-3">
            <div className="delivery-tab active py-1 px-5 rounded-[3px] relative">
              <span>Abu Dhabi City (Other Streets) - AED 7.00</span>
              <div className="delivery-tab-check absolute  -top-2 -right-2 border-2 border-white w-[20px] h-[20px] flex justify-center items-center bg-[#F95433] rounded-full ">
                <FaCheck className="p-[1px]" />
              </div>
            </div>
            <div className="delivery-tab text-[#4b4b4b] bg-[#F9D8D1] py-1 px-5 rounded-[3px] relative">
              <span>Reem island - AED 15.00</span>
            </div>
            <div className="delivery-tab text-[#4b4b4b] bg-[#F9D8D1] py-1 px-5 rounded-[3px] relative">
              <span>Muroor Area - AED 12.00</span>
            </div>
            <div className="delivery-tab text-[#4b4b4b] bg-[#F9D8D1] py-1 px-5 rounded-[3px] relative">
              <span>Al Mushrif Area - AED 15.00</span>
            </div>
            <div className="delivery-tab text-[#4b4b4b] bg-[#F9D8D1] py-1 px-5 rounded-[3px] relative">
              <span>Musaffah - AED 60.00</span>
            </div>
            <div className="delivery-tab text-[#4b4b4b] bg-[#F9D8D1] py-1 px-5 rounded-[3px] relative">
              <span>Abu Dhabi City (Electra & Najdah) - AED 5.00</span>
            </div>
          </div>

          <div className="pt-6 space-y-3 delivery-address-details">
            <TextArea rows={5} placeholder="Delivery Address *" />
            <Input type="text" placeholder="Google Map link" />
            <div className="flex justify-center">
              <Button className="uppercase rounded-full text-[12px] text-white bg-[#F65333] px-14">
                confirm details
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title="pick-up"
        open={pickup}
        onOk={() => setPickup(false)}
        onCancel={() => setPickup(false)}
        footer={false}
        width={650}
        className="posPopup deliveryPopup"
      >
        <div className=" modal-body p-3">
          <div>
            <h4 className="pb-4 text-[12px] font-extrabold text-[#4A4A4A]">
              Select Pickup Area
            </h4>
            <div className="flex flex-wrap gap-3">
              <div className="delivery-tab active py-1 px-5 rounded-[3px] relative">
                <span>Abu Dhabi City (Other Streets) - AED 7.00</span>
                <div className="delivery-tab-check absolute  -top-2 -right-2 border-2 border-white w-[20px] h-[20px] flex justify-center items-center bg-[#F95433] rounded-full ">
                  <FaCheck className="p-[1px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-[12px] font-extrabold text-[#4A4A4A] pb-3">
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
              <Radio.Group className="flex gap-3">
                <div className="flex items-center gap-4 bg-[#E4DCF6] text-[#7742E5] font-bold px-5 py-[3px] rounded-[4px]">
                  <Radio value="today">Today</Radio>
                </div>

                <div className="flex items-center gap-4 bg-[#E4DCF6] text-[#7742E5] font-bold px-5 py-[3px] rounded-[4px]">
                  <Radio value="others">Others</Radio>
                </div>
              </Radio.Group>
            </ConfigProvider>
          </div>

          <div className="mt-5">
            <h4 className="text-[12px] font-extrabold text-[#4A4A4A] pb-3">
              Pickup time <sup className="text-[15px] text-[#ff3b3b]">*</sup>
            </h4>
            <div className="grid grid-cols-6 gap-3">
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
              <div className="bg-[#F9D8D1] py-1 px-3 rounded-[3px]">
                10:00 am - 10:30 am
              </div>
            </div>
            <div className="text-center bg-[#F9D8D1] mt-2 py-[3px] rounded-[3px]">
              10:30 pm - 11:00 pm
            </div>
            <div className="flex justify-center mt-5 confirm_details">
              <Button className="uppercase rounded-full text-[12px] text-white bg-[#F65333] px-14">
                confirm details
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* AGGREGATOR modal */}
      <Modal
        title="AGGREGATOR"
        open={aggregator}
        onOk={() => setAggregator(false)}
        onCancel={() => setAggregator(false)}
        footer={false}
        width={650}
        className="posPopup aggregatorPopup"
      >
        <div className=" modal-body py-5 px-10">
          <div className="grid grid-cols-3 gap-x-8 gap-y-5">
            <div className="flex flex-col items-center">
              {/* <img src={noon} alt="" /> */}
              <span className="text-white text-[16px]">Noon</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <img src={talabat} alt="" /> */}
              <span className="text-white text-[16px]">Talabat</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <img src={deliveroo} alt="" /> */}
              <span className="text-white text-[16px]">Deliveroo</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <img src={smiles} alt="" /> */}
              <span className="text-white text-[16px]">Smiles</span>
            </div>
          </div>
          <div className="flex justify-center mt-5 confirm_details">
              <Button className="uppercase rounded-full border-none text-[12px] text-white bg-[#F65333] px-14">
                confirm details
              </Button>
            </div>
        </div>
      </Modal>
    </div>
  );
}
