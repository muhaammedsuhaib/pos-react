import { Radio } from "antd";
import { useEffect, useState } from "react";
import DateBar from "../dateBar/DateBar";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectSalesSummary } from "../../../reducer/sales/reducer";
import { listOverallSalesSummary } from "../../../reducer/sales/actions";
import LoadingOverlay from "./components/LoadingOverlay";
import useExportPdf from "./hooks/useExportPdf";
import * as XLSX from "xlsx";

function OverallSalesSummary() {
  const { isSavingPdf, exportPdf } = useExportPdf();

  const dispatch = useDispatch();
  const data = useSelector(selectSalesSummary);

  const salesData = data?.data;
  const currentDate = dayjs();

  const [selectedDate, setSelectedDate] = useState([currentDate, currentDate]);

  const [selectedOption, setSelectedOption] = useState("summary");

  const convertDateFormat = (date) => {
    return date.format("YYYY-MM-DD");
  };
  const handleChange = (value) => {
    setSelectedOption(value);
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

  const handleExportPdf = () => {
    try {
      const formattedStartDate = convertDateFormat(selectedDate[0]);
      const formattedEndDate = convertDateFormat(selectedDate[1]);

      exportPdf(
        formattedStartDate,
        formattedEndDate,
        selectedOption,
        "get-overall-url"
      );
    } catch (error) {
      console.log("Export error sales overall", error);
    }
  };

  const handleExportExl = () => {
    // Define static information to be included in the Excel export
    const restaurantInfo = [
      ["Restaurant:", "Mamas La Mesa Restaurant"],
      ["Branch:", "Mamas La Mesa Restaurant"],
      ["Date Range:", "2024-12-14"],
    ];

    // Define headers for the table
    const headers = ["Description", "Value", "Percentage"];

    // Prepare the data rows for the table
    const data = [
      ["Overall Sales", "AED 0", "0%"],
      ["Item Discounts", "AED 0", "0%"],
      ["Order Discounts", "AED 0", "0%"],
      ["Coupon Discounts", "AED 0", "0%"],
      ["Delivery Charges", "AED 0", "0%"],
      ["Tips", "AED 0", "0%"],
      ["Service Charges", "AED 0", "0%"],
      ["Net Sales Before Tax", "AED 0", "0%"],
      ["VAT Amount", "AED 0", "0%"],
      ["Net Sales After Tax", "AED 0", "0%"],
    ];

    // Combine the static restaurant info and table data
    const combinedData = [
      ...restaurantInfo, // Restaurant info at the top
      [], // Empty row for spacing
      headers, // Table headers
      ...data, // Table rows
    ];

    // Create a worksheet from the combined data
    const worksheet = XLSX.utils.aoa_to_sheet(combinedData);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Write the workbook to a buffer and create a file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });

    // Use FileSaver to save the file
    saveAs(file, `expense_${dayjs().format("YYYY_MM_DD")}.xlsx`);
  };

  if (isSavingPdf) return <LoadingOverlay />;
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
                  GROSS SALES
                </p>
              </div>
              <div className="w-[52%]">
                <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                  <div
                    className=" h-full rounded-[30px] pregress-bar "
                    style={{ width: `${salesData?.gross_total?.percentage}` }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold ">
                    {salesData?.gross_total?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">
                  AED {`${salesData?.gross_total?.amount}`}
                </p>
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
                      {salesData?.item_discount?.percentage}
                    </p>
                    <div
                      className="h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.item_discount?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.item_discount?.amount}
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
                      {salesData?.order_discount?.percentage}
                    </p>
                    <div
                      className="w-[21%] h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.order_discount?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.order_discount?.amount}
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
                      {salesData?.coupon_discount?.percentage}
                    </p>
                    <div
                      className=" h-full rounded-[30px] pregress-bar-orange"
                      style={{
                        width: `${salesData?.coupon_discount?.percentage}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.coupon_discount?.amount}
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
                        width: `${salesData?.delivery_charge?.percentage}`,
                      }}
                    ></div>
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.delivery_charge?.percentage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.delivery_charge?.amount}
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
                    AED {salesData?.tips?.amount}
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
                        width: `${salesData?.service_charge?.percentage}`,
                      }}
                    ></div>
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.service_charge?.percentage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.service_charge?.amount}
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
                      width: `${salesData?.net_sale_before_tax?.percentage}`,
                    }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold ">
                    {salesData?.net_sale_before_tax?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">
                  AED {salesData?.net_sale_before_tax?.amount}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-flow-row grid-cols-2 gap-[10px] mt-[10px]">
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-l-[30px] flex justify-between items-center w-full  px-5 pr-3">
                <div className="">
                  <p className="uppercase font-medium text-sm xl:text-[16px]">
                    vat ({salesData?.vat?.percentage}) :
                  </p>
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center justify-end progress-container">
                    <p className="text-[#3C6325] font-semibold">
                      {salesData?.vat?.percentage}
                    </p>
                    <div
                      className="h-full rounded-[30px] pregress-bar-orange "
                      style={{ width: `${salesData?.vat?.percentage}` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="h-[35px] bg-[#FFDDD4] text-black rounded-r-[30px] flex justify-end items-center w-full  px-5 pr-3">
                <div className="w-[20%] flex justify-end">
                  <p className="font-bold text-sm xl:text-[16px]">
                    AED {salesData?.vat?.amount}
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[35px] bg-black text-white rounded-[30px] flex justify-between items-center w-full  px-5 pr-3 mt-[10px]">
              <div className="w-[30%]">
                <p className="uppercase font-medium text-sm xl:text-[16px]">
                  net sales (with {salesData?.vat?.percentage} vat)
                </p>
              </div>
              <div className="w-[52%]">
                <div className="w-full h-[20px] rounded-[30px] bg-[#DDEAD2] flex gap-2 items-center progress-container">
                  <div
                    className=" h-full rounded-[30px] pregress-bar "
                    style={{
                      width: `${salesData?.net_sale_with_tax?.percentage}`,
                    }}
                  ></div>
                  <p className="text-[#3C6325] font-semibold ">
                    {salesData?.net_sale_with_tax?.percentage}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex justify-end">
                <p className="font-bold text-sm xl:text-[16px]">
                  AED {salesData?.net_sale_with_tax?.amount}
                </p>
              </div>
            </div>

            <div className="w-full pl-[20px] mt-[30px]">
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
                    <div
                      className="w-[30px] h-[30px] bg-white p-[2px] rounded-md flex items-center justify-center"
                      onClick={() => handleExportExl()}
                    >
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
        </div>
      </div>
    </div>
  );
}

export default OverallSalesSummary;
