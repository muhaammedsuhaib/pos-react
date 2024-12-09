import React from "react";
import "./dashboard.css";
import PieChart from "./pie_chart/PieChart";
import RevenueVsExpense from "./revenueVSexpense/RevenueVsExpense";
import TopCards from "./top_cards/TopCards";
import PaymentMethod from "./payment_method/PaymentMethod";
import TopSeller from "./top_seller/TopSeller";
import OrderType from "./order_type/OrderType";
import CustomerEngagement from "./customer_engagmnt/CustomerEngagement";
import AvgBill from "./avg_bill/AvgBill";
import PettyCash from "./petty_cash/PettyCash";
import { FaBars } from "react-icons/fa";

function DashboardContent() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between bg-primeryFirst relative z-[2500] pl-5 mt-2">
          <TopCards />
        </div>
        <div className="bg-[#283B62] w-full h-[800px] rounded-tl-[30px] rounded-tr-[30px] px-8 py-4 dashboard-container overflow-y-scroll scrollBarHidden">
          <PieChart />
          <div className="grid grid-cols-1 xl:grid-cols-2 py-5 gap-10 3xl:gap-32">
            <div className="w-full space-y-10">
              <div>
                <div className="relative flex space-x-6 mb-4">
                  <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                  <h4>Revenue Vs. Expense</h4>
                </div>
                <RevenueVsExpense />
              </div>
              <div>
                <div className="relative flex space-x-6 mb-4">
                  <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                  <h4>Payment Method</h4>
                </div>
                <PaymentMethod />
              </div>
            </div>
            <div className="w-full">
              <div className="relative flex space-x-6  mb-4">
                <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                <h4>Top Sellers</h4>
              </div>
              <TopSeller />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 py-5 gap-10 3xl:gap-32">
            <div className="w-full space-y-3">
              <div className="relative flex space-x-6">
                <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                <h4>Order Type</h4>
              </div>
              <OrderType />
            </div>
            <div className="w-full space-y-3">
              <div className="relative flex space-x-6">
                <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                <h4>Customer Engagement</h4>
              </div>
              <CustomerEngagement />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 py-5 gap-10 3xl:gap-32">
            <div className="w-full space-y-3">
              <div className="relative flex space-x-6">
                <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                <h4>Petty Cash</h4>
              </div>
              <PettyCash />
            </div>
            <div className="w-full space-y-3">
              <div className="relative flex space-x-6">
                <div className="absolute w-[10px] h-full bg-primeryFirst left-0"></div>
                <h4>Average Bill per Customer</h4>
              </div>
              <AvgBill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
