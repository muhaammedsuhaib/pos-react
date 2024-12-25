import { Radio } from "antd";
import { useEffect, useState } from "react";
import DateBar from "../../dateBar/DateBar";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { selectExtraChargesSummary } from "../../../reducer/sales/reducer";
import { listExtraChargesSummary } from "../../../reducer/sales/actions";
import { base_url, getLoginToken } from "../../utils/utils";
import axios from "axios";
import useExportPdf from "./hooks/useExportPdf";
import LoadingOverlay from "./components/LoadingOverlay";

function ExtraCharges() {
  const { isSavingPdf, exportPdf } = useExportPdf();
  const dispatch = useDispatch();
  const salestrenddatas = useSelector(selectExtraChargesSummary);
  const extrachargedata = salestrenddatas.data;

  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);
  const [selectedOption, setSelectedOption] = useState("summary");
  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["DELIVERY-CHARGES", "TIP", "SERVIECE-CHARGE", "OTHERS"],
    colors: ["#f97316", "#22c55e", "#ef4444", "#3b82f6"],
    legend: {
      show: false,
      position: "bottom",
    },
    dataLabels: {
      enabled: false, // Disable percentage labels
    },
  };

  const chartSeries = [
    extrachargedata?.delivery_charge?.count,
    extrachargedata?.tip?.count,
    extrachargedata?.service_charge?.count,
    extrachargedata?.other?.count,
  ];

  const convertDateFormat = (date) => {
    return date.format("YYYY-MM-DD");
  };

  useEffect(() => {
    const fetchExtraChargrData = () => {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      dispatch(
        listExtraChargesSummary({
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        })
      );
    };

    fetchExtraChargrData();
  }, [selectedDate, dispatch]);
  const handleExportPdf = () => {
    try {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      exportPdf(
        formattedStartDate,
        formattedEndDate,
        selectedOption,
        "get-extra-charge-url"
      );
    } catch (error) {
      console.log("Export error extra charge", error);
    }
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div>
      <div className="flex w-[70%] justify-between h-[30px] mt-5 items-center">
        <div className="flex space-x-[10px] items-center">
          <div className="w-[7px] h-9 bg-primeryFirst "></div>
          <h1 className="text-white text-[1rem] font-medium">Extra Charges</h1>
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
                delivery charges
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${extrachargedata?.delivery_charge?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {extrachargedata?.delivery_charge?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {extrachargedata?.delivery_charge?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                AED {extrachargedata?.delivery_charge?.amount}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                tips
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className="h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${extrachargedata?.tip?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {extrachargedata?.tip?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {extrachargedata?.tip?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                AED {extrachargedata?.tip?.amount}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                service charges
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className=" h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${extrachargedata?.service_charge?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {extrachargedata?.service_charge?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {extrachargedata?.service_charge?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                AED {extrachargedata?.service_charge?.amount}
              </p>
            </div>
          </div>
          {/* bar */}
          <div className="h-[35px] bg-[#FFDDD4] text-black rounded-[30px] flex justify-between items-center w-full  px-5 pr-3">
            <div className="w-[30%]">
              <p className="uppercase font-medium text-sm xl:text-[16px]">
                others
              </p>
            </div>
            <div className="w-[52%] flex gap-[5px] items-center">
              <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                <div
                  className="w-[15%] h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${extrachargedata?.other?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {extrachargedata?.other?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {extrachargedata?.other?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                AED {extrachargedata?.other?.amount}
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
                  className="w-[100%] h-full rounded-[30px] pregress-bar "
                  style={{
                    width: `${extrachargedata?.total?.percentage}`,
                  }}
                ></div>
                <p className="text-[#3C6325] font-semibold ">
                  {extrachargedata?.total?.percentage}
                </p>
              </div>
              <p className="font-semibold text-primeryFirst">
                {extrachargedata?.total?.count}
              </p>
            </div>
            <div className="w-[20%] flex justify-end">
              <p className="font-bold text-sm xl:text-[16px]">
                AED {extrachargedata?.total?.amount}
              </p>
            </div>
          </div>

          <div className="w-full pl-[20px] mt-[10px]">
            <div className="w-[100%] grid grid-flow-row grid-cols-3 gap-[20px] pb-[10px]">
              <div className="flex flex-col gap-y-[20px] justify-between">
                <div className="flex items-center space-x-[10px]">
                  <Radio
                    className="custom-black-radio"
                    value="summary"
                    checked={selectedOption === "summary"}
                    onChange={() => handleChange("summary")}
                  />
                  <h1>Summary</h1>
                </div>
                <div className="flex items-center space-x-[10px]">
                  <Radio
                    className="custom-black-radio"
                    value="details"
                    checked={selectedOption === "details"}
                    onChange={() => handleChange("details")}
                  />
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
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm uppercase">
                    delivery charges
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm uppercase"> tips</span>
                </div>
              </div>
              {/* Second Row */}
              <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-2">
                  <div className="bg-red-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm uppercase">
                    service charges
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-500 w-4 h-4 rounded-md"></div>
                  <span className="text-white text-sm uppercase">OTHERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[250px] w-[320px] relative ml-32">
          <img
            src="./public/images/dashboradSales/Pie chart base-2.png"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute top-[-48px] left-[-12px]">
            <div
              style={{
                display: "inline-block",
                transform: `rotateX(65deg)`,
                transformOrigin: "center center",
                transition: "transform 0.5s ease",
              }}
            >
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="pie"
                style={{
                  width: "280px",
                  margin: "auto",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </div> */}
      </div>
      {isSavingPdf && <LoadingOverlay />}
    </div>
  );
}

export default ExtraCharges;
