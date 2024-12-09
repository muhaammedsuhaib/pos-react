import { ConfigProvider, DatePicker, Input, Modal, Radio, Select, Switch } from "antd";
import React from "react";
import "./coupon_gen.css";
import { LuCalendarCheck } from "react-icons/lu";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const { RangePicker } = DatePicker;
const CouponGenerate = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      title="Coupon Code"
      open={openModal}
      onCancel={() => setOpenModal(false)}
      onOk={() => setOpenModal(false)}
      className="posPopup coupon_generate_modal"
      footer={false}
      zIndex={2000}
      width={900}
    >
      <div className="w-full bg-[#515151] coupon_generate_container p-3 ">
        <div className="flex justify-between">


          <div className="flex flex-col gap-2 ">
            <div className="flex items-center">
              <ConfigProvider>
                <Radio className=" custom-white-radio" name="coupon"/>
              </ConfigProvider>
              <span className="uppercase text-white">coupon code</span>
            </div>
            <div className="flex items-center">
              <ConfigProvider>
                <Radio className=" custom-white-radio" name="coupon"/>
              </ConfigProvider>
              <span className="uppercase text-white">discount</span>
            </div>
          </div>

        <div className="flex flex-col gap-2 items-end switch_container  pb-2">

          <div className="">
            {" "}
            <span className="text-[#F95433] font-bold">Status</span> &nbsp;
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    trackHeight: 25,

                    trackPadding: 3,
                  },
                },
              }}
            >
              <Switch checkedChildren="Active" unCheckedChildren="Inactive" className=" switch-outline" />
            </ConfigProvider>
          </div>
          <div>
            {" "}
            <span className="text-[#F95433] font-bold">
              Show on Website Order
            </span>{" "}
            &nbsp;
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    trackHeight: 25,

                    trackPadding: 3,
                  },
                },
              }}
            >
              <Switch checkedChildren="Show" unCheckedChildren="Hide" className=" switch-outline" />
            </ConfigProvider>
          </div>
        </div>
        </div>
        <div className="w-full py-[10px] flex items-center gap-[10px] justify-end">
        <div className="">
            {" "}
            <span className="text-[#F95433] font-bold">Approval required</span> &nbsp;
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    trackHeight: 25,

                    trackPadding: 3,
                  },
                },
              }}
            >
              <Switch checkedChildren="Yes" unCheckedChildren="No" className=" switch-outline" />
            </ConfigProvider>
          </div>
          <div className="flex items-center gap-x-[5px]">
            <span className="text-white">Approver</span>
          <ConfigProvider>
              <Select
              placeholder="Laliebeth (E102)"
              className="w-[160px]"
              suffixIcon={<BiSolidDownArrow className="text-gray-400"/>}
              />
            </ConfigProvider>
          </div>
          <div className="flex items-center gap-x-[5px]">
          <ConfigProvider>
              <Select
              placeholder="WhatsApp OTP"
              className="w-[160px]"
              suffixIcon={<BiSolidDownArrow className="text-gray-400"/>}
              />
            </ConfigProvider>
          </div>
        </div>

        <div className="bg-[#D1D7E0] p-3 rounded-[8px] flex gap-8 justify-between">
          <div className="w-[220px]">
            <h6 className="capitalize font-bold text-sm">Coupon code title</h6>
            <Input
              value="Summer Treat 30%"
              className="border border-gray-400"
            />
          </div>
          <div className="w-[280px]">
            <h6 className="capitalize font-bold text-sm">Coupon code</h6>
            <div className="flex">
              <Input
                value="MLM30"
                className="border border-gray-400 w-[130px]"
              />
              <button
                className="text-white bg-[#F95433] rounded-md px-5 capitalize text-sm"
                style={{ boxShadow: "0px 0px 10px #6f6e6e" }}
              >
                generate Code
              </button>
            </div>
          </div>
          <div className="w-[250px]">
            <h6 className="capitalize font-bold text-sm">
              Coupon valid period
            </h6>
            <RangePicker
              suffixIcon={
                <LuCalendarCheck className="text-black text-[22px]" />
              }
            />
          </div>
        </div>

        <div className="bg-[#D1D7E0] p-3 rounded-[8px] my-5 w-[500px] mx-auto box2">
          <div className=" grid grid-cols-2 gap-3">
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">Flat Amount</h6>
              <div className="flex items-center">
                <div className="radio-btn-main">
                  <input id="amount" type="radio" name="type" value="amount" />
                  <label htmlFor="amount"></label>
                </div>

                <Input
                  placeholder="Amount"
                  className="border border-gray-400"
                />
              </div>
            </div>
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">
                Percentage of Total Order
              </h6>

              <div className="flex items-center">
                <div className="radio-btn-main">
                  <input
                    id="percentage"
                    type="radio"
                    name="type"
                    value="percentage"
                  />
                  <label htmlFor="percentage"></label>
                </div>

                <Input
                  value="Percentage"
                  id="percentageInput"
                  className="border border-gray-600 text-gray-900 "
                  disabled
                />
              </div>
            </div>
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">
                Minimum Order Amount
              </h6>
              <Input placeholder="AED 100" className="border border-gray-400" />
            </div>
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">
                Minimum Discount Amount
              </h6>
              <Input placeholder="AED 30" className="border border-gray-400" />
            </div>
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">
                Max No.of usage of Coupon
              </h6>
              <Input
                placeholder="Unlimited"
                className="border border-gray-400"
              />
            </div>
            <div className="w-[220px]">
              <h6 className="capitalize font-bold text-[13px]">
                No.of Usage Limit per Customer
              </h6>
              <Input
                placeholder="Unlimited"
                className="border border-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#D1D7E0] p-3 rounded-[8px] grid grid-cols-2 gap-x-8 gap-y-3">
          <div>
            <h6 className="capitalize font-bold text-[13px]">
              Valid Order Type(s)
            </h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[{ value: "Dine-in" }, { value: "Delivery" }]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
                // size="large"
              />
            </ConfigProvider>
          </div>

          <div>
            <h6 className="capitalize font-bold text-[13px]">
              Valid on Day(s)
            </h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[{ value: "Saturday" }, { value: "Sunday" }]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
              />
            </ConfigProvider>
          </div>

          <div>
            <h6 className="capitalize font-bold text-[13px]">
              Valid Customer Type(VIP/ Normal)
            </h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[{ value: "VIP" }, { value: "Normal" }]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
                // size="large"
              />
            </ConfigProvider>
          </div>

          <div>
            <h6 className="capitalize font-bold text-[13px]">
              Valid Customers
            </h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[{ value: "Mathew(+971236540)" }]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
              />
            </ConfigProvider>
          </div>

          <div>
            <h6 className="capitalize font-bold text-[13px]">Valid Category</h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[
                  { value: "Summer Treats" },
                  { value: "Grills & Charcoal" },
                ]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
                // size="large"
              />
            </ConfigProvider>
          </div>

          <div>
            <h6 className="capitalize font-bold text-[13px]">Valid Items</h6>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemHeight: 25,
                    multipleItemBg: "#C2DED1",
                    fontSize: 14,
                  },
                },
              }}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // onChange={handleChange}
                options={[
                  { value: "ChickenCharcoal" },
                  { value: "Fish Grilled" },
                ]}
                suffixIcon={<BiSolidDownArrow className="text-lg" />}
                removeIcon={
                  <IoIosClose className="text-lg bg-[#f93e3e] text-white rounded-full" />
                }
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CouponGenerate;
