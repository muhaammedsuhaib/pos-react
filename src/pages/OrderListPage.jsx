import { ConfigProvider, Switch } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import OrderList_table from "../components/orderList_table/OrderList_table";
import "../index.css";
import { useCallback, useEffect, useState } from "react";
import { dineInTableRequest, orderPaymentTypeRequest, orderTypeRequest } from "../reducer/orders/action";
import debounce from "lodash.debounce";
import { selectOrderFilter } from "../reducer/orders/reducer";
const OrderListPage = () => {
  const dispatch = useDispatch();
  const orderFilter = useSelector(selectOrderFilter);
  const [showCompleted, setShowCompleted] = useState(false);
  const fetchPettyCash = useCallback(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      dispatch(orderTypeRequest({
        order_date: orderFilter.data.date
      }));
      dispatch(dineInTableRequest({
        date: orderFilter.data.date
      }));
    } else {
      dispatch(orderTypeRequest());
      dispatch(dineInTableRequest());
    }
    dispatch(orderPaymentTypeRequest());
  }, [dispatch, orderFilter]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      fetchPettyCash();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [fetchPettyCash]);
  return (
    <>
      <div className="flex justify-end p-2 gap-1 ">
        <p className="text-white">COMPLETED</p>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                colorPrimary: "green",
                colorBgContainerDisabled: "red",
                handleBg: "white",
              },
            },
          }}
        >
          <Switch
            checkedChildren="SHOW"
            unCheckedChildren="HIDE"
            defaultChecked={showCompleted}
            value={showCompleted}
            onChange={setShowCompleted}
            className="custome-table-switch"
          />
        </ConfigProvider>
      </div>
      <OrderList_table
        completed={showCompleted}
      />
    </>
  );
};

export default OrderListPage;
