import React from "react";
import FilterBar from "../../components/dashbordDailyCloseComponets/filterBar/FilterBar";
import SummaryContents from "../../components/dashbordDailyCloseComponets/summaryContents/SummaryContents";

function PosDayClose() {
  return (
    <>
      <div className="flex-grow w-full h-full bg-[#545454] rounded-xl overflow-hidden">
        <FilterBar />
        <SummaryContents />
      </div>
    </>
  );
}

export default PosDayClose;
