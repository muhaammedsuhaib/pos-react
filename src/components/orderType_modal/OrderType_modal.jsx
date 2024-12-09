/* eslint-disable react/prop-types */
import dineIn from "../../../public/images/pos-category-images/dining-table_15725489.svg";
import deliveryImg from "../../../public/images/pos-category-images/food-delivery_8004323.svg";
import pickup from "../../../public/images/pos-category-images/takeaway_7217445.svg";
import booking from "../../../public/images/pos-category-images/withdrawal_6926414.svg";
import takwaway from "../../../public/images/pos-category-images/take-away_11529049.svg";
import aggregator from "../../../public/images/pos-category-images/order-food_7217466.svg";
import { Modal } from "antd";
import "./orderType_modal.css"

const OrderType_modal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      title="select order type"
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
      footer={false}
      width={650}
      className="posPopup orderTypePopup "
    >
      <div className=" modal-body">
        <div className="grid grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14 p-8">
          <div className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]">
            <div className="h-[75%] flex">
              <img src={dineIn} alt="" width={70} className="mx-auto" />
            </div>
            <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
              Dine-in
            </div>
          </div>
          <div className="order-type-item pt-2 active bg-[#74B698] rounded-[25px] h-[120px]">
            <div className="h-[75%] flex">
              <img src={deliveryImg} alt="" width={70} className="mx-auto" />
            </div>
            <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
              delivery
            </div>
          </div>
          <div className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]">
            <div className="h-[75%] flex">
              <img src={pickup} alt="" width={70} className="mx-auto" />
            </div>
            <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
              pick-up
            </div>
          </div>
          <div className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]">
            <div className="h-[75%] flex">
              <img src={booking} alt="" width={70} className="mx-auto" />
            </div>
            <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
              booking
            </div>
          </div>
          <div className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]">
            <div className="h-[75%] flex">
              <img src={takwaway} alt="" width={70} className="mx-auto" />
            </div>
            <div className="order-type-item-box text-center font-semibold uppercase border-2 py-[6px] bg-[#74B698] text-white rounded-[25px]">
              take away
            </div>
          </div>
          <div className="order-type-item pt-2 bg-[#74B698] rounded-[25px] h-[120px]">
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
  );
};

export default OrderType_modal;
