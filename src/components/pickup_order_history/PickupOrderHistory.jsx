import React from "react";
import "./pickup_order.css";
import check from "../../../public/check-bordered.png";
import { Input } from "antd";

export default function PickupOrderHistory() {
  return (
    <div className="p-2 pt-2 pr-6">
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
          <div className="w-[4px] bg-white flex-grow"></div>
        </div>
        <div className=" flex-grow">
          <div className="grid grid-cols-2 gap-x-3 gap-y-[6px] w-full pb-[6px]">
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm w-[80px]">Order#</span>
              <Input className="bg-transparent border-2 border-[#C2E5C0] h-[30px]" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm  w-[80px] text-right">Type</span>
              <Input className="bg-transparent border-2 border-[#C2E5C0] h-[30px]" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm  w-[80px] text-right">Table#</span>
              <Input className="bg-transparent border-2 border-[#C2E5C0] h-[30px]" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm  w-[80px] text-right">Waiter</span>
              <Input className="bg-transparent border-2 border-[#C2E5C0] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#C2E5C0] p-2 pb-1 rounded-[8px] mb-2">
            <div className="flex justify-between items-center gap-2">
              <div className="bg-[#5AA885] rounded-2xl w-[65%] py-[1px] pl-3 flex items-center">
                <h5 className="uppercase text-white text-[12px]">
                  kot created
                </h5>
              </div>
              <div className="text-[#F65332] w-[35%] text-[13px] flex justify-between">
                <span>Andrew</span>
                <span>&#8739;</span>
                <span>1:30 PM</span>
              </div>
            </div>
            <div className="px-2 p-1 text-[11px] ">
              <div className="flex ">
                <div className="w-[55%] flex justify-between">
                  <span>Iced Tea Pitcher(medium)</span>
                  <span className="text-[#F65332] ">-</span>
                </div>
                <div className="w-[20%] text-right">
                  <span className="text-[#F65332]">3</span>
                  <span>&nbsp;x&nbsp;</span>
                  <span>25.25</span>
                </div>
                <div className="w-[25%] flex justify-between pl-3">
                  <span className="text-[#F65332]">=</span>
                  <span>AED 75.75</span>
                </div>
              </div>
              <div className="flex">
                <div className="w-[55%] flex justify-between">
                  <span>Iced Tea Pitcher(medium)</span>
                  <span className="text-[#F65332] ">-</span>
                </div>
                <div className="w-[20%] text-right">
                  <span className="text-[#F65332]">3</span>
                  <span>&nbsp;x&nbsp;</span>
                  <span>25.25</span>
                </div>
                <div className="w-[25%] flex justify-between pl-3">
                  <span className="text-[#F65332]">=</span>
                  <span>AED 75.75</span>
                </div>
              </div>
              <div className="flex">
                <div className="w-[55%] flex justify-between">
                  <span>Iced Tea Pitcher(medium)</span>
                  <span className="text-[#F65332] ">-</span>
                </div>
                <div className="w-[20%] text-right">
                  <span className="text-[#F65332]">3</span>
                  <span>&nbsp;x&nbsp;</span>
                  <span>25.25</span>
                </div>
                <div className="w-[25%] flex justify-between pl-3">
                  <span className="text-[#F65332]">=</span>
                  <span>AED 75.75</span>
                </div>
              </div>
              <div className="flex">
                <div className="w-[55%] flex justify-between">
                  <span>Iced Tea Pitcher(medium)</span>
                  <span className="text-[#F65332] ">-</span>
                </div>
                <div className="w-[20%] text-right">
                  <span className="text-[#F65332]">3</span>
                  <span>&nbsp;x&nbsp;</span>
                  <span>25.25</span>
                </div>
                <div className="w-[25%] flex justify-between pl-3">
                  <span className="text-[#F65332]">=</span>
                  <span>AED 75.75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
          <div className="w-[4px] bg-white flex-grow"></div>
        </div>
        <div className="bg-[#C2E5C0] flex-grow p-2 pb-1 rounded-[8px] mt-1 mb-2">
          <div className="flex justify-between items-center gap-2">
            <div className="bg-[#5AA885] rounded-2xl w-[65%] py-[1px] pl-3 flex items-center">
              <h5 className="uppercase text-white text-[12px]">kot created</h5>
            </div>
            <div className="text-[#F65332] w-[35%] text-[13px] flex justify-between">
              <span>Andrew</span>
              <span>&#8739;</span>
              <span>1:35 PM</span>
            </div>
          </div>
          <div className="px-2 p-1 space-y-[1px] text-[11px]">
            <div className="flex ">
              <div className="w-[55%] flex justify-between">
                <span className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px] bg-[#00AC4E] rounded-full text-white text-xl flex justify-center items-center">
                    +
                  </div>
                  <span>Iced Tea Pitcher(medium)</span>
                </span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[55%] flex justify-between">
                <span className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px] bg-[#00AC4E] rounded-full text-white text-xl flex justify-center items-center">
                    +
                  </div>
                  <span>Iced Tea Pitcher(medium)</span>
                </span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[55%] flex justify-between">
                <span className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px] bg-[#F90000] rounded-full text-white text-xl flex justify-center items-center">
                    -
                  </div>
                  <span className="line-through">Iced Tea Pitcher(medium)</span>
                </span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right line-through">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span className="line-through">AED 75.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
          <div className="w-[4px] bg-white flex-grow"></div>
        </div>
        <div className="bg-[#C2E5C0] flex-grow p-2 pb-1 rounded-[8px] mt-1 mb-2">
          <div className="flex justify-between items-center gap-2">
            <div className="bg-[#5AA885] rounded-2xl w-[65%] py-[1px] pl-3 flex items-center">
              <h5 className="uppercase text-white text-[12px]">
                order type modified
              </h5>
            </div>
            <div className="text-[#F65332] w-[35%] text-[13px] flex justify-between">
              <span>Andrew</span>
              <span>&#8739;</span>
              <span>1:45 PM</span>
            </div>
          </div>
          <div className="px-2 p-1 space-y-[1px]">
            <div className="flex text-[11px]">
              <table>
                <tr>
                  <td className="w-[50px] ">From:</td>
                  <td>Dine-in</td>
                </tr>
                <tr>
                  <td>To:</td>
                  <td>Take-Away</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
          <div className="w-[4px] bg-white flex-grow"></div>
        </div>
        <div className="bg-[#C2E5C0] flex-grow p-2 pb-1 rounded-[8px] mt-1 mb-2">
          <div className="flex justify-between items-center gap-2">
            <div className="bg-[#5AA885] rounded-2xl w-[65%] py-[1px] pl-3 flex items-center">
              <h5 className="uppercase text-white text-[12px]">
                customer modified
              </h5>
            </div>
            <div className="text-[#F65332] w-[35%] text-[13px] flex justify-between">
              <span>Andrew</span>
              <span>&#8739;</span>
              <span>1:45 PM</span>
            </div>
          </div>
          <div className="px-2 p-1 space-y-[1px]">
            <div className="flex text-[11px]">
              <table>
                <tr>
                  <td className="w-[50px] ">From:</td>
                  <td>Walk-in</td>
                </tr>
                <tr>
                  <td>To:</td>
                  <td>Mohammed (+971507684455)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
          <div className="w-[4px] bg-white flex-grow"></div>
        </div>
        <div className="bg-[#C2E5C0] flex-grow p-2 pb-1 rounded-[8px] mt-1 mb-2">
          <div className="flex justify-between items-center gap-2">
            <div className="bg-[#5AA885] rounded-2xl w-[65%] py-[1px] pl-3 flex items-center">
              <h5 className="uppercase text-white text-[12px]">paid</h5>
            </div>
            <div className="text-[#F65332] w-[35%] text-[13px] flex justify-between">
              <span>Andrew</span>
              <span>&#8739;</span>
              <span>1:45 PM</span>
            </div>
          </div>
          <div className="px-2 p-1 text-[11px] ">
            <div className="flex ">
              <div className="w-[55%] flex justify-between">
                <span>Iced Tea Pitcher(medium)</span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[55%] flex justify-between">
                <span>Iced Tea Pitcher(medium)</span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[55%] flex justify-between">
                <span>Iced Tea Pitcher(medium)</span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[55%] flex justify-between">
                <span>Iced Tea Pitcher(medium)</span>
                <span className="text-[#F65332] ">-</span>
              </div>
              <div className="w-[20%] text-right">
                <span className="text-[#F65332]">3</span>
                <span>&nbsp;x&nbsp;</span>
                <span>25.25</span>
              </div>
              <div className="w-[25%] flex justify-between pl-3">
                <span className="text-[#F65332]">=</span>
                <span>AED 75.75</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[55%] flex justify-between">
                <table className="paid-table my-1">
                  <tr>
                    <td className="w-[50px]">Cash</td>
                    <td className="w-[50px]">500.00</td>
                  </tr>
                  <tr>
                    <td>Master</td>
                    <td>300.00</td>
                  </tr>
                  <tr>
                    <td>Visa</td>
                    <td>200.00</td>
                  </tr>
                </table>
              </div>
              <div className="w-[45%] border-t border-slate-400 total-section">
                <div className="flex">
                  <div className="w-[45%] text-right ">
                    <span className="text-[#F65332]">Discount</span>
                  </div>
                  <div className="w-[55%] flex justify-between pl-[11px] ">
                    <span className="text-[#F65332]">=</span>
                    <span>AED 375.75</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[45%] text-right">
                    <span className="text-[#F65332]">VAT 5%</span>
                  </div>
                  <div className="w-[55%] flex justify-between pl-[11px] ">
                    <span className="text-[#F65332]">=</span>
                    <span>AED 75.75</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[45%] text-right">
                    <span className="text-[#F65332]">Delivery</span>
                  </div>
                  <div className="w-[55%] flex justify-between pl-[11px] ">
                    <span className="text-[#F65332]">=</span>
                    <span>AED 75.75</span>
                  </div>
                </div>
                <div className="flex border-t border-slate-400 ">
                  <div className="w-[45%] text-right">
                    <span className="text-[#F65332] uppercase">Total</span>
                  </div>
                  <div className="w-[55%] flex justify-between pl-[11px] ">
                    <span className="text-[#F65332]">=</span>
                    <span>AED 75.75</span>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-slate-400 mb-[2px]"></div>
                <div className="h-[1px] w-full bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center">
          <div className="w-[35px] h-[35px] rounded-full bg-white p-2">
            <img src={check} alt="check mark" />
          </div>
        </div>
        <div className="flex-grow rounded-[8px] my-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#fff] rounded-2xl w-[35%] py-[1px] pl-3 flex items-center">
              <h5 className="uppercase text-black text-[12px]">settled</h5>
            </div>
            <div className="text-[#fff] w-[35%] text-[13px] flex justify-between">
              <span>Andrew</span>
              <span>&#8739;</span>
              <span>1:45 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
