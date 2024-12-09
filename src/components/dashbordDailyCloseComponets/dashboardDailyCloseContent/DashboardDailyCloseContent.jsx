import FilterBar from "../filterBar/FilterBar";
import SummaryContents from "../summaryContents/SummaryContents";

function DashboardDailyCloseContent() {
  return (
    <div className="flex-grow w-full h-full bg-[#545454] rounded-xl overflow-hidden relative z-[2500] mt-2">
      <FilterBar />
      <SummaryContents />
    </div>
  );
}

export default DashboardDailyCloseContent;
