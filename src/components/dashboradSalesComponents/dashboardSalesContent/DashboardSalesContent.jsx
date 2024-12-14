import StatisticCards from "../statisticCards/StatisticCards";
import DateBar from "../dateBar/DateBar";
import DashboardReportContent from "../DashboardReportContent/DashboardReportContent";
import { useState } from "react";
import dayjs from "dayjs";

function DashboardSalesContent({ saleSub, setSaleSub }) {
  const currentDate = dayjs();
 

      // const [selectedDate2,setSelectedDate2]=useState(currentDate.format("DD-MM-YYYY"))
      // const [selectedDate1, setSelectedDate1] = useState(dayjs());
      // const [selectedDate2, setSelectedDate2] = useState(dayjs());
      
  return (
    <div className="flex-grow w-full h-full rounded-xl relative z-[2500] mt-2 bg-[#fe5634]">
      <StatisticCards />
      {/* <DateBar selectedDate={selectedDate} setSelectedDate={setSelectedDate} /> */}
      <DashboardReportContent saleSub={saleSub} setSaleSub={setSaleSub} />
    </div>
  );
}

export default DashboardSalesContent;
