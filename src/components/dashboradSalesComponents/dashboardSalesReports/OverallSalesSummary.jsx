import { Radio } from "antd";
import { useEffect, useState } from "react";
import DateBar from "../dateBar/DateBar";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectSalesSummary } from "../../../reducer/sales/reducer";
import { listOverallSalesSummary } from "../../../reducer/sales/actions";

function OverallSalesSummary() {
  const dispatch = useDispatch();
  const overallsalesdetails = useSelector(selectSalesSummary);
  const salesData = overallsalesdetails?.data;

  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);

  const convertDateFormat = (date) => {
    return date.format("YYYY-MM-DD");
  };

  useEffect(() => {
    const fetchSalesTrendData = () => {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      dispatch(
        listOverallSalesSummary({
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
      );
    };

    fetchSalesTrendData();
  }, [selectedDate, dispatch]);

  return (
    <div>
      <div className="flex justify-between h-[30px] mt-5 items-center">
        <div className="flex space-x-[10px] items-center">
          <div className="w-[7px] h-9 bg-primeryFirst "></div>
          <h1 className="text-white text-[1rem] font-medium">
            Overall Sales Summary
          </h1>
        </div>
        <div className="ml-auto">
          <DateBar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      <div className="w-full px-[10px] mt-[20px]">
        <div className="w-full bg-[#EEEEF1]  rounded-[20px] p-[10px] overflow-hidden">
          <div className="w-full h-full ">
            <div className="h-[35px] bg-primeryFirst text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
              <div className="w-[30%]">
                <p className="uppercase font-medium text-sm xl:text-[16px]">
                  other sales
                </p>
              </div>
              <div className="w-[52%]">
                <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                  <div
                    className=" h-full rounded-[30px] pregress-bar "
                    style={{ width: `${salesData?.overallSales?.percentage}` }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold hidden">
                    {salesData?.overallSales?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">{`${salesData?.overallSales?.value}`}</p>
              </div>
            </div>
            <div className="w-full grid grid-flow-row grid-cols-2 gap-[10px] mt-[10px]">
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    item discounts :
                  </p>
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-end progress-container">
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.itemDiscounts?.percentage}
                    </p>
                    <div
                      className="h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.itemDiscounts?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.itemDiscounts?.value}
                  </p>
                </div>
              </div>
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    order discounts :
                  </p>
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-end progress-container">
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.orderDiscounts?.percentage}
                    </p>
                    <div
                      className="w-[21%] h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.orderDiscounts?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.orderDiscounts?.value}
                  </p>
                </div>
              </div>
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    coupon discounts :
                  </p>
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-end progress-container">
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.couponDiscounts?.percentage}
                    </p>
                    <div
                      className=" h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.couponDiscounts?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.couponDiscounts?.value}
                  </p>
                </div>
              </div>
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    delivery charges :
                  </p>
                </div>
                <div className="w-[50%]"></div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-start progress-container">
                    <div
                      className="h-full rounded-[30px] pregress-bar "
                      style={{
                        width: `${salesData?.deliveryCharges?.percentage}`,
                      }}
                    ></div>
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.deliveryCharges?.percentage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.deliveryCharges?.value}
                  </p>
                </div>
              </div>
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    tips :
                  </p>
                </div>
                <div className="w-[50%]"></div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-start progress-container">
                    <div
                      className=" h-full rounded-[30px] pregress-bar "
                      style={{ width: `${salesData?.tips?.percentage}` }}
                    ></div>
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.tips?.percentage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.tips?.value}
                  </p>
                </div>
              </div>
              {/* grid */}
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    service charges :
                  </p>
                </div>
                <div className="w-[50%]"></div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-start progress-container">
                    <div
                      className="w-[13%] h-full rounded-[30px] pregress-bar "
                      style={{
                        width: `${salesData?.serviceCharges?.percentage}`,
                      }}
                    ></div>
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.serviceCharges?.percentage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.serviceCharges?.value}
                  </p>
                </div>
              </div>

              {/* grid close */}
            </div>

            <div className="h-[35px] bg-primeryFirst text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3 mt-[10px]">
              <div className="w-[30%]">
                <p className="uppercase font-medium text-sm xl:text-[16px]">
                  net sales (before tax)
                </p>
              </div>
              <div className="w-[52%]">
                <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                  <div
                    className="h-full rounded-[30px] pregress-bar "
                    style={{
                      width: `${salesData?.netSalesBeforeTax?.percentage}`,
                    }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold ">
                    {salesData?.netSalesBeforeTax?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">
                  {salesData?.netSalesBeforeTax?.value}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-flow-row grid-cols-2 gap-[10px] mt-[10px]">
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    vat (5%) :
                  </p>
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-end progress-container">
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.vatAmount?.percentage}
                    </p>
                    <div
                      className="h-full rounded-[30px] pregress-bar-orange "
                      style={{ width: `${salesData?.vatAmount?.percentage}` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    {salesData?.vatAmount?.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[35px] bg-black text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3 mt-[10px]">
              <div className="w-[30%]">
                <p className="uppercase font-medium text-sm xl:text-[16px]">
                  net sales (with 5% vat)
                </p>
              </div>
              <div className="w-[52%]">
                <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                  <div
                    className=" h-full rounded-[30px] pregress-bar "
                    style={{
                      width: `${salesData?.netSalesAfterTax?.percentage}`,
                    }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold ">
                    {salesData?.netSalesAfterTax?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">
                  {salesData?.netSalesAfterTax?.value}
                </p>
              </div>
            </div>

            <div className="w-full pl-[20px] mt-[30px]">
              <div className="w-[100%] grid grid-flow-row grid-cols-3 gap-[20px] pb-[10px]">
                <div className="flex flex-col gap-y-[20px] justify-between">
                  <div className="flex items-center space-x-[10px]">
                    <Radio className="custom-black-radio" />
                    <h1>Summary</h1>
                  </div>
                  <div className="flex items-center space-x-[10px]">
                    <Radio className="custom-black-radio" />
                    <h1>Details</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                  <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img
                        src="/public/images/dashboradSales/screen_5621734.svg"
                        alt=""
                        className="w-[20px]"
                      />
                    </div>
                    <h1>Show & Print</h1>
                  </div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img
                        src="/public/images/dashboradSales/folder.svg"
                        alt=""
                        className="w-[20px]"
                      />
                    </div>
                    <h1>Export to Excel</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[20px]">
                  <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img
                        src="/public/images/dashboradSales/whatsapp.svg"
                        alt=""
                        className="w-[20px]"
                      />
                    </div>
                    <h1>Share WhatsApp</h1>
                  </div>
                  <div className="flex items-center space-x-[10px]">
                    <div className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center">
                      <img
                        src="/public/images/dashboradSales/folder.svg"
                        alt=""
                        className="w-[20px]"
                      />
                    </div>
                    <h1>Export to PDF</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverallSalesSummary;
