import React from "react";
import SaleSummary from "../summaries/SaleSummary";
import ExpenseSummary from "../summaries/ExpenseSummary";
import PettycashSummary from "../summaries/PettycashSummary";
import CashregisterSummary from "../summaries/CashregisterSummary";
import DaycloseFooter from "../summaries/DaycloseFooter";

function SummaryContents() {
  return (
    <div className='bg-[#3B3B3B] h-auto rounded-t-[30px] overflow-y-scroll scrollBarHidden' style={{height:'calc(100vh - 10rem)'}}>
      <div className="px-6 xl:px-16 py-10 ">
        <SaleSummary />
        <ExpenseSummary />
        <PettycashSummary />
        <CashregisterSummary />
      </div>
      <div className="bg-black p-3 ">
        <DaycloseFooter />
      </div>
    </div>
  );
}

export default SummaryContents;
