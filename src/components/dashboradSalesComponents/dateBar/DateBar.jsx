import { CalendarOutlined } from "@ant-design/icons";
import { ConfigProvider, Select } from "antd";
import { Option } from "antd/es/mentions";
import { FaArrowRight } from "react-icons/fa6";
import { DatePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { dateRangePreset } from "../../utils/utils";

const { RangePicker } = DatePicker;
function DateBar({ selectedDate, setSelectedDate }) {
  const currentDate = dayjs();
  const [selectrange, setSelectRange] = useState("Today");
  const handleDateChange = (dates) => {
    if (dates) {
      setSelectedDate(dates);
      setSelectRange("custom");
    } else {
      setSelectedDate([currentDate, currentDate]);
    }
  };
  const handlePresetClick = (range) => {
    setSelectRange(range);
    let startDate, endDate;
    if (range === "Today") {
      startDate = currentDate;
      endDate = currentDate;
    } else if (range === "This Week") {
      const startOfWeek = currentDate.startOf("week");
      const endOfWeek = currentDate.endOf("week");
      startDate = startOfWeek;
      endDate = endOfWeek;
    } else if (range === "This Month") {
      const startOfMonth = currentDate.startOf("month").startOf("day"); // Start of the month, with specific day
      const endOfMonth = currentDate.endOf("month").endOf("day"); // End of the month, with specific day
      startDate = startOfMonth;
      endDate = endOfMonth;
      console.log(endDate);
    }

    setSelectedDate([startDate, endDate]);
  };

  return (
    <div className="w-full py-[10px] flex items-center justify-center">
      <div className="w-[700px] bg-primeryFirst h-[50px] rounded-[30px] flex items-center justify-center gap-x-[10px]">
        {/* <ConfigProvider theme={
                {
                    components:{
                        Select:{
                            hoverBorderColor: null,
                            clearBg:'#E6E6E7',
                            activeBorderColor:null,
                            activeOutlineColor:null,
                            selectorBg:'#E6E6E7'
                        }
                    },
                    token:{
                        colorBgBase:'#E6E6E7',
                        borderRadius:20
                    }
                }
            }> */}
        {/* <DatePicker
            className="w-[290px]"
            value={selectedDate} 
            onChange={handleDateChange} // Capture the selected date
          /> */}
        {/* <RangePicker/> */}
        {/* <Select className="w-[200px]" suffixIcon={<CalendarOutlined className="text-black rounded-[20px]"/> } defaultValue={'Today'}>
            <Option value="Today">Today</Option>
            </Select> */}
        {/* </ConfigProvider> */}
        {/* <div className="px-[30px] bg-[#FDAC9C] flex items-center gap-x-[10px] text-[0.8rem] h-[32px] rounded-[20px]">
                <div className="">{formatDate(selectedDate)}</div>
                <FaArrowRight />
                <div className="">{formatDate(selectedDate)}</div>
            </div> */}

        <div className="bg-primeryFirst w-full flex gap-3 p-2 rounded-[30px] mb-0">
          <div className="w-[40%]">
            <RangePicker
              onChange={handleDateChange}
              className="rounded-[30px] h-[35px]"
              defaultValue={selectedDate}
              format="DD-MM-YYYY"
              value={selectedDate}
            />
          </div>
          <div className="w-[60%] flex 3xl:gap-3 justify-between bg-white rounded-[30px] h-[35px] p-[5px]">
            <div
              className={`rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ${
                selectrange === "Today" && "bg-primeryFirst text-white"
              }`}
              onClick={() => handlePresetClick("Today")}
            >
              Today
            </div>
            <div
              className={`rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ${
                selectrange === "This Week" && "bg-primeryFirst text-white"
              }`}
              onClick={() => handlePresetClick("This Week")}
            >
              This Week{" "}
            </div>
            <div
              className={`rounded-[30px] w-[32%] bg-[#ffdfdb] hover:bg-primeryFirst hover:text-white hover:shadow-lg active:bg-transparent  cursor-pointer text-[12px] 3xl:text-[15px] text-center border border-[#EEBBAF] ${
                selectrange === "This Month" && "bg-primeryFirst text-white"
              }`}
              onClick={() => handlePresetClick("This Month")}
            >
              {" "}
              This Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateBar;
