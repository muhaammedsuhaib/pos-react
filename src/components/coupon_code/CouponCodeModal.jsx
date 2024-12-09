/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import "./couponCode.css";
import CouponGenerate from "../coupon_generate/CouponGenerate";

const CouponCodeModal = ({ openModal, setOpenModal }) => {
  const [couponGenerate, setCouponGenerate] = useState(false);

  return (
    <>
      <Modal
        title="Coupon Code"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
        className="posPopup coupon_code_modal"
        footer={false}
        width={750}
        centered
        
      >
        <div className="coupon_code_table pb-3 pt-1 bg-[#515151]">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="pl-3 ">Title</th>
                <th className="">Coupon Code</th>
                <th className="">Flat Amount</th>
                <th className="">% of Order</th>
                <th colSpan={2}></th>
              </tr>
            </thead>
            <tbody>
              <tr className="not_eligible ">
                <td className="pl-3">
                  <span>Government Staff</span>
                </td>
                <td className="text-center">
                  <span>MLM20</span>
                </td>
                <td className="text-center">
                  <span>N/A</span>
                </td>
                <td className="text-center">
                  <span>15%</span>
                </td>

                <td className="w-[100px] pl-2">
                  <div className="flex items-center justify-between gap-2 w-full  action-btns">
                    <div className="w-[30px] h-[30px] bg-primeryFirst rounded-[5px] flex ">
                      <button
                        className=" w-full h-full flex justify-center items-center "
                        onClick={() => setCouponGenerate(true)}
                      >
                        <IoIosEye className="text-[25px] hover:text-black" />
                      </button>
                    </div>
                    <div className="px-5 mr-4 bg-[#CBC9C9] py-1  rounded-[5px]">
                      <button className="uppercase">Apply</button>
                    </div>
                  </div>
                </td>
                <td className="pl-4 font-bold w-[110px] text-primeryFirst">Not Eligible</td>
              </tr>
              <tr className="eligible">
                <td className="pl-3">
                  <span>Summer Treat</span>
                </td>
                <td className="text-center">
                  <span>MLM20</span>
                </td>
                <td className="text-center">
                  <span>N/A</span>
                </td>
                <td className="text-center">
                  <span>15%</span>
                </td>
                <td className="w-[100px] pl-2">
                  <div className="flex items-center justify-between gap-2 w-full  action-btns">
                    <div className="w-[30px] h-[30px] bg-primeryFirst rounded-[5px] flex ">
                      <button
                        className=" w-full h-full flex justify-center items-center "
                        onClick={() => setCouponGenerate(true)}
                      >
                        <IoIosEye className="text-[25px] hover:text-black" />
                      </button>
                    </div>
                    <div className="px-5 mr-4 bg-[#00AC4E] py-1  rounded-[5px]">
                      <button className="uppercase">Apply</button>
                    </div>
                  </div>
                </td>
                <td className="font-bold pl-4 w-[110px]">Eligible</td>
              </tr>
              <tr className="eligible">
                <td className="pl-3">
                  <span>Affiliate</span>
                </td>
                <td className="text-center">
                  <span>MLM20</span>
                </td>
                <td className="text-center">
                  <span>N/A</span>
                </td>
                <td className="text-center">
                  <span>15%</span>
                </td>
                <td className="w-[100px] pl-2">
                  <div className="flex items-center justify-between gap-2 w-full  action-btns">
                    <div className="w-[30px] h-[30px] bg-primeryFirst rounded-[5px] flex ">
                      <button
                        className=" w-full h-full flex justify-center items-center "
                        onClick={() => setCouponGenerate(true)}
                      >
                        <IoIosEye className="text-[25px] hover:text-black" />
                      </button>
                    </div>
                    <div className="px-5 mr-4 bg-[#00AC4E] py-1  rounded-[6px]">
                      <button className="uppercase">Apply</button>
                    </div>
                  </div>
                </td>
                <td className="font-bold pl-4 w-[110px]">Eligible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>

      <CouponGenerate
        openModal={couponGenerate}
        setOpenModal={setCouponGenerate}
      />
    </>
  );
};

export default CouponCodeModal;
