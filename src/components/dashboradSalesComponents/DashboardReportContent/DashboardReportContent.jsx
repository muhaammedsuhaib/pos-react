import { useEffect, useRef } from "react";
import CustomerCredit from "../dashboardSalesReports/CustomerCredit";
import ExtraCharges from "../dashboardSalesReports/ExtraCharges";
import FreeFood from "../dashboardSalesReports/FreeFood";
import ItemDiscounts from "../dashboardSalesReports/ItemDiscounts";
import ItemsCancelled from "../dashboardSalesReports/ItemsCancelled";
import OrderDiscountsExtraCharges from "../dashboardSalesReports/OrderDiscountsExtraCharges";
import OrdersCancelled from "../dashboardSalesReports/OrdersCancelled";
import OrderSummary from "../dashboardSalesReports/OrderSummary";
import OverallSalesSummary from "../dashboardSalesReports/OverallSalesSummary";
import PaymentSummary from "../dashboardSalesReports/PaymentSummary";
import SalesTrends from "../dashboardSalesReports/SalesTrends";
import TopSoldItems from "../dashboardSalesReports/TopSoldItems";

function DashboardReportContent({ saleSub, setSaleSub }) {
  // Create refs for each section
  const refs = {
    "sales-trend": useRef(null),
    "overall-summary": useRef(null),
    "payment-types": useRef(null),
    "order-types": useRef(null),
    "extra-charges": useRef(null),
    "top-selers": useRef(null),
    "order-discounts": useRef(null),
    "item-discounts": useRef(null),
    "orders-cancelled": useRef(null),
    "items-cancelled": useRef(null),
    "customer-credits": useRef(null),
    "free-food": useRef(null),
  };

  // Use useEffect to scroll to the selected section when saleSub changes
  useEffect(() => {
    if (saleSub && refs[saleSub]?.current) {
      refs[saleSub].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [saleSub]);

  return (
    <div
      className="flex flex-col gap-y-[70px] px-[20px] bg-[#404040]  overflow-y-scroll scrollBarHidden"
      style={{ height: "calc(100vh - 19.5rem)" }}
    >
      <div ref={refs["sales-trend"]}>
        <SalesTrends />
      </div>
      <div ref={refs["overall-summary"]}>
        <OverallSalesSummary />
      </div>
      <div ref={refs["payment-types"]}>
        <PaymentSummary />
      </div>
      <div ref={refs["order-types"]}>
        <OrderSummary />
      </div>
      <div ref={refs["extra-charges"]}>
        <ExtraCharges />
      </div>
      <div ref={refs["top-selers"]}>
        <TopSoldItems />
      </div>
      <div ref={refs["order-discounts"]}>
        <OrderDiscountsExtraCharges />
      </div>
      <div ref={refs["item-discounts"]}>
        <ItemDiscounts />
      </div>
      <div ref={refs["orders-cancelled"]}>
        <OrdersCancelled />
      </div>
      <div ref={refs["items-cancelled"]}>
        {/* <ItemsCancelled /> */}
      </div>
      <div ref={refs["customer-credits"]}>
        {/* <CustomerCredit /> */}
      </div>
      <div ref={refs["free-food"]}>
        {/* <FreeFood /> */}
      </div>
    </div>
  );
}

export default DashboardReportContent;
