import React from "react";
import CheckBox from "../../customeCheckbox/CheckBox.jsx";
import "../summary.css";
import { ConfigProvider, Input } from "antd";

function ExpenseSummary() {
  const handleChange = (value) => {
    console.log("changed:", value);
  };
  return (
    <div className="pt-4">
      <div className="flex gap-2 py-1">
        <div className="w-[10px] h-[35px] bg-[#F79E8D]"></div>
        <h3 className="text-2xl font-medium text-white content-heading">
          Expense Summary
        </h3>
      </div>
      <div className="py-2 p-1 xl:p-3 space-y-2">
        <div className=" flex justify-between items-center gap-3 w-full 3xl:w-[95%]">
          <div className="h-[35px] bg-primeryFirst text-white rounded-[30px] flex justify-between items-center w-[75%] 3xl:w-[70%] px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-[12px] 3xl:text-[16px] ">
                total payable to suppliers :
              </p>
            </div>
            <div className="w-[52%]">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div className="w-[100%] h-full rounded-[30px] pregress-bar "></div>
                <p className="text-[#3C6325] font-semibold hidden">100%</p>
              </div>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">AED 1,553.75</p>
            </div>
          </div>
          <div className="w-[3%]">
            <CheckBox onChange={handleChange} />
          </div>
          <div className="w-[25%] 3xl:w-[30%]">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#858585",
                },
              }}
            >
              <Input
                className="bg-black border-none h-[35px]"
                placeholder="Note"
              />
            </ConfigProvider>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-3 w-full 3xl:w-[95%]">
          <div className="h-[35px] bg-[#F7C6BD] rounded-[30px] flex justify-between items-center w-[75%] 3xl:w-[70%] px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-[12px] 3xl:text-[16px] ">paid from bank account</p>
            </div>
            <div className="w-[52%]">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div className="w-[21%] h-full rounded-[30px] pregress-bar "></div>
                <p className="text-[#3C6325] font-semibold">21%</p>
              </div>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">AED 2,753.35</p>
            </div>
          </div>
          <div className="w-[3%]">
            <CheckBox onChange={handleChange} />
          </div>
          <div className="w-[25%] 3xl:w-[30%]">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#858585",
                },
              }}
            >
              <Input
                className="bg-black border-none h-[35px]"
                placeholder="Note"
              />
            </ConfigProvider>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-3 w-full 3xl:w-[95%]">
          <div className="h-[35px] bg-[#F7C6BD] rounded-[30px] flex justify-between items-center w-[75%] 3xl:w-[70%] px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-[12px] 3xl:text-[16px] ">paid from today&apos;s cash sale</p>
            </div>
            <div className="w-[52%]">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div className="w-[13%] h-full rounded-[30px] pregress-bar "></div>
                <p className="text-[#3C6325] font-semibold">13%</p>
              </div>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">AED 739.33</p>
            </div>
          </div>
          <div className="w-[3%]">
            <CheckBox onChange={handleChange} />
          </div>
          <div className="w-[25%] 3xl:w-[30%]">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#858585",
                },
              }}
            >
              <Input
                className="bg-black border-none h-[35px]"
                placeholder="Note"
              />
            </ConfigProvider>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-3 w-full 3xl:w-[95%]">
          <div className="h-[35px] bg-primeryFirst text-white rounded-[30px] flex justify-between items-center w-[75%] 3xl:w-[70%] px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-[12px] 3xl:text-[16px] ">balance total payable</p>
            </div>
            <div className="w-[52%]">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div className="w-[79%] h-full rounded-[30px] pregress-bar "></div>
                <p className="text-[#3C6325] font-semibold">79%</p>
              </div>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">AED 533.95</p>
            </div>
          </div>
          <div className="w-[3%]">
            <CheckBox onChange={handleChange} />
          </div>
          <div className="w-[25%] 3xl:w-[30%]">
            <ConfigProvider
              theme={{
                token: {
                  colorTextPlaceholder: "#858585",
                },
              }}
            >
              <Input
                className="bg-black border-none h-[35px]"
                placeholder="Note"
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;
