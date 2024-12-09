import React from "react";
import PosDayClose from "../pos-day-close/PosDayClose";
import CRMcustomer from "../crm-customer/CRMcustomer";
import Transactions from "../transactions/Transactions";
import { useSelector } from "react-redux";

function SidebarPage() {
  const pageType = useSelector((item) => item.orderHistory.pos_page_type);
  console.log(pageType);
  return (
    <>
      <div className="w-full bg-[#FF5534] flex xl:space-x-[15px] space-x-[10px] rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000]">
        {pageType === "dayclose" && <PosDayClose />}
        {pageType === "crm" && <CRMcustomer />}
        {pageType === "transactions" && <Transactions />}
      </div>
    </>
  );
}

export default SidebarPage;
