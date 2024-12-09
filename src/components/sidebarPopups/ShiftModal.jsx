import { ConfigProvider, Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function ShiftModal({ setOpenModal, title }) {
  return (
    <>
      {" "}
      <Modal
        className="posPopup "
        footer={null}
        title={title}
        width={650}
        open
        onCancel={() => setOpenModal("")}
      >
        <div className="bg-[#F9E7E5] p-2">
          <div className="flex flex-col items-center gap-1 justify-center p-2">
            <div className="w-[250px] h-auto bg-[#F9CAC0] px-6 py-3 rounded-[16px] text-center flex flex-col justify-center items-center gap-4">
              <h5 className="uppercase text-[16px] font-bold">
                cash in register drawer
              </h5>
              <div
                className="bg-white w-[160px] py-2 rounded-[30px]"
                style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.6)" }}
              >
                <span className="text-2xl font-bold text-[#517F3B]">
                  755.50
                </span>
              </div>
              <button
                className="uppercase bg-[#3E3E3E] text-white px-5 py-[2px] rounded-[30px]"
                style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.6)" }}
              >
                validate
              </button>
            </div>
            <span className="text-[15px] text-[#00AC4E]">
              Validated Successfully
            </span>
          </div>
          <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#000",
                },
              }}
            >
              <TextArea
                placeholder="Comment"
                className="bg-[#F9F9F9] rounded-xl"
                rows={3}
              ></TextArea>
            </ConfigProvider>
          </Form.Item>
          <div className="bg-[#D1D7E0] rounded-xl p-2">
            <h5 className="uppercase text-[13px] font-bold pb-1">
              shift report
            </h5>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 cursor-pointer hover:text-primeryFirst">
                <div
                  className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center"
                  style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.4)" }}
                >
                  <img
                    src="/public/images/dashboradSales/screen_5621734.svg"
                    alt=""
                    className="w-[28px]"
                  />
                </div>
                <span className="text-[12px] font-medium">Show & Print</span>
              </div>
              <div className="flex items-center gap-1  cursor-pointer hover:text-primeryFirst">
                <div
                  className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center"
                  style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.4)" }}
                >
                  <img
                    src="/public/images/dashboradSales/whatsapp.svg"
                    alt=""
                    className="w-[28px]"
                  />
                </div>
                <span className="text-[12px] font-medium">Share WhatsApp</span>
              </div>
              <div className="flex items-center gap-1  cursor-pointer hover:text-primeryFirst">
                <div
                  className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center"
                  style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.4)" }}
                >
                  <img
                    src="/public/images/dashboradSales/folder.svg"
                    alt=""
                    className="w-[28px]"
                  />
                </div>
                <span className="text-[12px] font-medium">Export to Excel</span>
              </div>
              <div className="flex items-center gap-1  cursor-pointer hover:text-primeryFirst">
                <div
                  className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center"
                  style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.4)" }}
                >
                  <img
                    src="/public/images/dashboradSales/folder.svg"
                    alt=""
                    className="w-[28px]"
                  />
                </div>
                <span className="text-[12px] font-medium">Export to PDF</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-4 pb-2">
            <button className="uppercase bg-primeryFirst border active:bg-[#F96546] active:text-white hover:bg-transparent hover:border-primeryFirst hover:text-primeryFirst text-white rounded-[30px] px-5">
              confirm & log off
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ShiftModal;
