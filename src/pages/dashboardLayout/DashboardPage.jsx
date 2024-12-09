import React, { useState } from "react";
import DashboardSidebar from "../../components/dashboardSidebar/DashboardSidebar";

import DashboardSalesContent from "../../components/dashboradSalesComponents/dashboardSalesContent/DashboardSalesContent";
import DashboardDailyCloseContent from "../../components/dashbordDailyCloseComponets/dashboardDailyCloseContent/DashboardDailyCloseContent";
import DashboardContent from "../../components/dashboard_content/DashboardContent";

import "./dash.css";

function DashboardPage() {
  const [dashboardPage, setDashboardPage] = useState("day-closing");
  const [saleSub, setSaleSub] = useState("sales-trend");
  const [activeTab, setActiveTab] = useState("sales");
  return (
    <div className="w-full custom_height bg-primeryFirst flex rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000]">
      <div className="absolute top-[-6px] left-[21%] 2xl:left-[25.2%] twoTabs space-x-[-35px] nav-sub-tabs">
        {/* top-[-23px] xl:right-[25%] md:right-[30%] sm:right-[50%] */}
        <button
          onClick={() => {
            setActiveTab("sales");
            // setPage('all_sales');
          }}
          className={`z-[-50] relative ${
            activeTab === "sales"
              ? "bg-[#515151] text-white active z-[2] "
              : "bg-[#D6DCE5] text-black z-[1] font-semibold "
          }`}
        >
          SALES
        </button>

        <button
          onClick={() => {
            setActiveTab("expense");
            // setPage('pos_expense');
          }}
          className={`z-[-50] relative ${
            activeTab === "expense"
              ? "bg-[#515151] text-white active z-[2]"
              : "bg-[#D6DCE5] text-black z-[1] font-semibold "
          }`}
        >
          EXPENSE
        </button>

        <button
          onClick={() => {
            setActiveTab("attendance");
            // setPage('pos_attendance');
          }}
          className={`z-[-50] relative ${
            activeTab === "attendance"
              ? "bg-[#515151] text-white active z-[2]"
              : activeTab === "sales"
              ? "bg-[#D6DCE5] text-black z-[-1] font-semibold"
              : "bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          ATTENDANCE
        </button>
      </div>
      <div className="bg-primeryFirst pt-4">
        <DashboardSidebar
          DBpage={dashboardPage}
          setDBpage={setDashboardPage}
          saleSub={saleSub}
          setSaleSub={setSaleSub}
        />
      </div>

      {dashboardPage === "day-closing" && <DashboardDailyCloseContent />}
      {dashboardPage === "sales" && (
        <DashboardSalesContent saleSub={saleSub} setSaleSub={setSaleSub} />
      )}
      {dashboardPage === "dashboard" && <DashboardContent />}
    </div>
  );
}

export default DashboardPage;
