import { Radio } from "antd";
import { useEffect, useState } from "react";
import DateBar from "../dateBar/DateBar";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { selectSalesPaymentSummary } from "../../../reducer/sales/reducer";
import { listPaymentSummary } from "../../../reducer/sales/actions";
import axios from "axios";
import { base_url, getLoginToken } from "../../utils/utils";

function PaymentSummary() {
  const dispatch = useDispatch();
  const paymentSummarydatas = useSelector(selectSalesPaymentSummary);
  const SummaryData = paymentSummarydatas?.data;
  const [isSvavingPdf, setIsSavingPdf] = useState(false);
  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);

  const convertDateFormat = (date) => {
    return date.format("YYYY-MM-DD");
  };

  useEffect(() => {
    const fetchpaymentsummary = () => {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      dispatch(
        listPaymentSummary({
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
      );
    };

    fetchpaymentsummary();
  }, [selectedDate, dispatch]);

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["CASH", "AGGREGATORS", "CARD", "OTHERS"],
    colors: ["#f97316", "#22c55e", "#ef4444", "#3b82f6"],
    legend: {
      show: false,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    SummaryData?.cash?.count,
    SummaryData?.aggregatorNoon?.count,
    SummaryData?.cardMastercard?.count + SummaryData?.cardVisa?.count,
    SummaryData?.overallSales?.count,
  ];

  const handleExportPdf = async () => {
    const formattedStartDate = convertDateFormat(selectedDate[0]);
    const formattedEndDate = convertDateFormat(selectedDate[1]);
    setIsSavingPdf(true);
    try {
      const url = `${base_url}/sales/get-payment-summary-url`;

      const response = await axios.get(url, {
        params: {
          date: { startDate: formattedStartDate, endDate: formattedEndDate },
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getLoginToken()}`,
        },
      });
      if (response.data && response.data.data) {
        window.open(response.data.data, "_blank");
      }
      setIsSavingPdf(false);
    } catch (error) {
      console.log(error, "error pdf");
      setIsSavingPdf(false);
    }
  };
  return (
    <div>
      <div className="flex w-[70%] justify-between h-[30px] mt-5 items-center">
        <div className="flex space-x-[10px] items-center">
          <div className="w-[7px] h-9 bg-primeryFirst "></div>
          <h1 className="text-white text-[1rem] font-medium">
            Payment Summary
          </h1>
        </div>
        <div className="ml-auto">
          <DateBar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
      <div className="mt-[20px] w-full flex items-center">
        <div className="w-[70%] bg-[#EEEEF1] rounded-[20px] p-[10px] flex flex-col gap-y-[10px]">
          {/* bar start */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                cash
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{ width: `${SummaryData?.cash?.percentage}` }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.cash?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.cash?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.cash?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                card-mastercard
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${SummaryData?.cardMastercard?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.cardMastercard?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.cardMastercard?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.cardMastercard?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                card-visa
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className="h-full rounded-[30px] pregress-bar "
                  style={{ width: `${SummaryData?.cardVisa?.percentage}` }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.cardVisa?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.cardVisa?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.cardVisa?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                aggregator-talabat
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${SummaryData?.aggregatorTalabat?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.aggregatorTalabat?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.aggregatorTalabat?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.aggregatorTalabat?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                aggregator-noon
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className="h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${SummaryData?.aggregatorNoon?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.aggregatorNoon?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.aggregatorNoon?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.aggregatorNoon?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                credit-customers
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className="h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${SummaryData?.creditCustomers?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {SummaryData?.creditCustomers?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.creditCustomers?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.creditCustomers?.value}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-black text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                total sales
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${SummaryData?.overallSales?.percentage || "0%"}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold hidden">
                  {SummaryData?.overallSales?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {SummaryData?.overallSales?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                {SummaryData?.overallSales?.value}
              </p>
            </div>
          </div>

          <div className="w-full pl-[20px] mt-[10px]">
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
                  <div
                    className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center"
                    onClick={() => handleExportPdf()}
                  >
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

        <div className="mb-20  grid place-content-center">
          <div className="h-[295px] w-auto relative ml-32">
            <img
              src="./public/images/dashboradSales/Pie chart base-1.png"
              alt=""
              className="h-full w-full"
            />
            <div className="absolute top-[55px] left-[37px]">
              <div
                style={{
                  display: "inline-block",
                  // transform: `rotateX(65deg)`,
                  transformOrigin: "center center",
                  // transition: "transform 0.5s ease",
                }}
              >
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="pie"
                  style={{
                    width: "220px",
                    margin: "auto",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-start mt-3 p-2 space-y-2 ml-10">
              {/* First Row */}
              <div className="flex items-center space-x-10">
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm">CASH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm"> AGGREGATORS </span>
                </div>
              </div>
              {/* Second Row */}
              <div className="flex items-center space-x-10">
                <div className="flex items-center space-x-2">
                  <div className="bg-red-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm">CARD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm">OTHERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSvavingPdf && (
        <div className="absolute top-0 left-0 w-full flex items-center justify-center h-screen bg-[#0000002f]">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#F95433]"></div>
        </div>
      )}
    </div>
  );
}

export default PaymentSummary;
