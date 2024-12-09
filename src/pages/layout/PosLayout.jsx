import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section30 from "../../components/sectionRightMain/sectionRight/Section30";
import SectionLeftContent from "../../components/sectionLeftContent/SectionLeftContent";
import PickupOrderHistory from "../../components/pickup_order_history/PickupOrderHistory";
import {
  dineInTableAreaRequest,
  dineInTableRequest,
  orderPaymentTypeRequest,
  orderTypeRequest,
  restaurantUserRequest,
} from "../../reducer/orders/action";
import debounce from "lodash.debounce";
import { selectOrderFilter } from "../../reducer/orders/reducer";
import { activeCustomerRequest } from "../../reducer/customer/action";
import "./style.css";
import NotificationPage from "../../components/notification_page/NotificationPage";
function PosLayout() {
  const notification_page = useSelector(
    (item) => item.orderHistory.notification_page
  );
  const [page, setPage] = useState("all_orders");
  const [activeTab, setActiveTab] = useState("orders");
  const dispatch = useDispatch();
  const orderFilter = useSelector(selectOrderFilter);
  const orderTypeFetch = useCallback(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      dispatch(
        orderTypeRequest({
          order_date: orderFilter.data.date,
        })
      );
    } else {
      dispatch(orderTypeRequest());
    }
  }, [dispatch, orderFilter, page]);
  const fetchPettyCash = useCallback(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      dispatch(
        dineInTableRequest({
          date: orderFilter.data.date,
        })
      );
    } else {
      dispatch(dineInTableRequest());
    }
    dispatch(dineInTableAreaRequest());
    dispatch(orderPaymentTypeRequest());
    dispatch(activeCustomerRequest());
    dispatch(
      restaurantUserRequest({
        type: "staff",
      })
    );
  }, [dispatch, orderFilter]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      orderTypeFetch();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [orderTypeFetch]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      fetchPettyCash();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [fetchPettyCash]);
  const history = useSelector((state) => state.orderHistory?.order_history);
  return (
    <div className="w-full bg-[#FF5534] flex xl:space-x-[15px] space-x-[10px] rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000]">
      <div className="absolute top-[-6px] left-[36%] 2xl:left-[35.8%] twoTabs space-x-[-35px] nav-sub-tabs">
        {/* top-[-23px] xl:right-[25%] md:right-[30%] sm:right-[50%] */}
        <button
          onClick={() => {
            setActiveTab("orders");
            setPage("all_orders");
          }}
          className={`z-[-50] relative ${
            activeTab === "orders"
              ? "bg-[#515151] text-white active z-[2]"
              : "bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          ORDERS
        </button>
        <button
          onClick={() => {
            setActiveTab("items");
            setPage("dine_in_items");
          }}
          className={`z-[-50] relative ${
            activeTab === "items"
              ? "bg-[#515151] text-white active z-[2]"
              : "bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          ITEMS
        </button>
        <button
          onClick={() => {
            setActiveTab("expense");
            setPage("pos_expense");
          }}
          className={`z-[-50] relative ${
            activeTab === "expense"
              ? "bg-[#515151] text-white active z-[2]"
              : activeTab === "orders"
              ? "bg-[#D6DCE5] text-black z-[-1] font-semibold"
              : "bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          EXPENSE
        </button>
      </div>
      <div className="xl:w-[70%] w-[65%] bg-[#515151] rounded-[20px] flex flex-col z-[1000] mt-2">
        {notification_page ? (
          <NotificationPage />
        ) : (
          <SectionLeftContent page={page} setPage={setPage} />
        )}
      </div>
      <div className="xl:w-[30%] w-[35%] bg-[#515151] rounded-[20px]  overflow-y-hidden mt-1">
        <Section30 page={page} />
      </div>
      {history == true && (
        <div className="absolute w-[460px] top-[20px] bg-[#5CAC88] xl:right-[30%] right-[35%] order-history-box rounded-[20px] overflow-y-scroll ">
          <PickupOrderHistory />
        </div>
      )}
    </div>
  );
}

export default PosLayout;
