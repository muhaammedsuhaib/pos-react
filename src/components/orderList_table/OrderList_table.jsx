import { Input, DatePicker, Select, ConfigProvider } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import "./orderList_table.css";
import foodIcon from "../../../public/images/pos-category-images/food_16144752[1].svg";
import quickActionIcon from "../../../public/images/pos-category-images/Quick Action[1].svg";
import clockIcon from "../../../public/Clock_Icon.svg";
import { FaCheck, FaCross, FaPerson } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { ordersActions, selectOrderFilter, selectOrderPaymentTypes, selectOrderTables, selectOrderTypes, selectRunningOrders } from "../../reducer/orders/reducer";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import TableActionLoader from "../loader/TableActionLoader";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);
const OrderList_table = ({ completed }) => {
  const orderFilter = useSelector(selectOrderFilter);

  const [orderId, setOrderId] = useState(orderFilter && orderFilter.data && orderFilter.data.uid ? orderFilter.data.uid : '');
  const [orderDate, setOrderDate] = useState(orderFilter && orderFilter.data && orderFilter.data.date ? dayjs(orderFilter.data.date, 'YYYY-MM-DD') : dayjs());
  const [customerName, setCustomerName] = useState(orderFilter && orderFilter.data && orderFilter.data.name ? orderFilter.data.name : '');
  const [selectOrderType, setSelectOrderType] = useState(orderFilter && orderFilter.data && orderFilter.data.order_type ? orderFilter.data.order_type : '');
  const [tableNo, setTableNo] = useState(orderFilter && orderFilter.data && orderFilter.data.table_no ? orderFilter.data.table_no : '');
  const [payment, setPayment] = useState(orderFilter && orderFilter.data && orderFilter.data.payment ? orderFilter.data.payment : '');
  const [orderStatus, setOrderStatus] = useState(orderFilter && orderFilter.data && orderFilter.data.status ? orderFilter.data.status : '');

  const [orderTypeList, setOrderTypeList] = useState([]);
  const [orderTableList, setOrderTableList] = useState([]);
  const [orderPayamentList, setOrderPayamentList] = useState([]);

  const orderTypes = useSelector(selectOrderTypes);
  const orderTables = useSelector(selectOrderTables);
  const runningOrder = useSelector(selectRunningOrders);
  const paymentTypes = useSelector(selectOrderPaymentTypes);

  useEffect(() => {
    if (orderFilter && orderFilter.data && orderFilter.data.date) {
      setOrderDate(dayjs(orderFilter.data.date, 'YYYY-MM-DD'));
    }
    if (orderFilter && orderFilter.data && orderFilter.data.uid) {
      setOrderId(orderFilter.data.uid);
    }
    if (orderFilter && orderFilter.data && orderFilter.data.name) {
      setCustomerName(orderFilter.data.name);
    }
    if (orderFilter && orderFilter.data && orderFilter.data.order_type) {
      setSelectOrderType(orderFilter.data.order_type);
    }
    if (orderFilter && orderFilter.data && orderFilter.data.table_no) {
      setTableNo(orderFilter.data.table_no);
    }
    if (orderFilter && orderFilter.data && orderFilter.data.payment) {
      setPayment(orderFilter.data.payment);
    }
    if (orderFilter && orderFilter.data && orderFilter.data.status) {
      setOrderStatus(orderFilter.data.status);
    }
  }, []);

  useEffect(() => {
    if (orderTypes && orderTypes.data && Array.isArray(orderTypes.data)) {
      const dataList1 = [{ value: '', label: 'All' }];
      orderTypes.data.map((item) => {
        dataList1.push({
          value: item.id,
          label: item.name
        });
      });
      setOrderTypeList(dataList1);
    }
    if (paymentTypes && paymentTypes.data && Array.isArray(paymentTypes.data)) {
      const dataList2 = [{ value: '', label: 'All' }];
      paymentTypes.data.map((item) => {
        dataList2.push({
          value: item.id,
          label: item.title
        });
      });
      setOrderPayamentList(dataList2);
    }
    if (orderTables && orderTables.data && Array.isArray(orderTables.data)) {
      const dataList3 = [{ value: '', label: 'All' }];
      orderTables.data.map((item) => {
        dataList3.push({
          value: item.id,
          label: item.name
        });
      });
      setOrderTableList(dataList3);
    }
  }, [orderTypes, orderTables, paymentTypes]);
  const dispatch = useDispatch();
  const fetchDatas = useCallback(() => {
    dispatch(
      ordersActions.setOrderFilter({
        uid: orderId, date: orderDate ? orderDate.format('YYYY-MM-DD') : orderDate,
        name: customerName, order_type: selectOrderType,
        table_no: tableNo, payment, status: orderStatus, completed: completed ? 1 : 0,
      })
    );
  }, [dispatch, orderId, customerName, orderDate, selectOrderType, tableNo, payment, orderStatus, completed]);
  useEffect(() => {
    const debounceDispatch = debounce(() => {
      fetchDatas();
    }, 150);
    debounceDispatch();
    return () => {
      debounceDispatch.cancel();
    };
  }, [fetchDatas]);

  return (
    <div className="w-full h-full overflow-x-scroll table-scroll-bar">
      <table className="table-auto border-collapse w-full ">
        <thead className="bg-primeryFirst sticky top-0 z-10">
          <tr>
            <th className="px-1 py-2 max-w-[80px] border-r border-[#FDBCAF] border-dotted custome_th_style">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-white'">Order #.</p>
                <Input
                  className="bg-white w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
                  placeholder="Search.."
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-white'">Date/Time.</p>
                <ConfigProvider
                  theme={{
                    token: {
                      colorTextPlaceholder: '#515151'
                    }
                  }}
                >
                  <DatePicker
                    onKeyDown={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    placeholder="Select date"
                    className="w-full hover:border-black rounded-md hover:border-[1px] tableInput"
                    value={orderDate}
                    defaultValue={orderDate}
                    onChange={(date) => {
                      if (date.isValid()) {
                        setOrderDate(date);
                      }
                    }}
                  />
                </ConfigProvider>
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
              <div className="flex flex-col justify-center items-center">
                <p className="text-white'">Customer</p>
                <Input
                  className="bg-white w-ful hover:border-black rounded-md hover:border-[1px] tableInput"
                  placeholder="Search.."
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style w-[12%]">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-white'">Order Type</p>
                <Select
                  placeholder="Select"
                  className="text-ellipsis w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
                  optionFilterProp="label"
                  defaultValue={selectOrderType}
                  value={selectOrderType}
                  onChange={(e) => setSelectOrderType(e)}
                  options={orderTypeList}
                />
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style w-[12%]">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-white'">Table No.</p>
                <Select
                  placeholder="Select"
                  className="w-full hover:border-black rounded-md hover:border-[1px] tableInput"
                  value={tableNo}
                  defaultValue={tableNo}
                  onChange={(e) => setTableNo(e)}
                  optionFilterProp="label"
                  options={orderTableList}
                />
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style w-[12%]">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-white'">Payment</p>
                <Select
                  placeholder="Select"
                  className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
                  optionFilterProp="label"
                  value={payment}
                  defaultValue={payment}
                  onChange={(e) => setPayment(e)}
                  options={orderPayamentList}
                />
              </div>
            </th>
            <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style w-[12%]">
              <div className="flex flex-col justify-center items-center">
                <p className=" text-green-600'">Status</p>
                <Select
                  placeholder="Select"
                  className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
                  optionFilterProp="label"
                  value={orderStatus}
                  defaultValue={orderStatus}
                  onChange={(e) => setOrderStatus(e)}
                  options={[
                    {
                      value: "",
                      label: "All",
                    },
                    {
                      value: "0",
                      label: "Pending",
                    },
                    {
                      value: "1",
                      label: "Accepted",
                    },
                    {
                      value: "2",
                      label: "Completed",
                    },
                    {
                      value: "3",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
            </th>
            <th className="px-2 py-2 custome_th_style">
              <div className="flex flex-col items-center justify-center">
                <span>ACTION</span>
                {runningOrder?.loading ?
                  <TableActionLoader
                    color="#fff"
                  />
                  : <></>}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="h-[300px]-- overflow-y-scroll">
          {runningOrder && runningOrder.data && Array.isArray(runningOrder.data) && runningOrder.data.length ? runningOrder.data.map((row, index) => (
            <tr
              key={index}
              className={`text-center custome_table_row ${index % 2 === 0 ? "bg-[#FFEDEB]" : "bg-[#FFDCD5]"
                }`}
            >
              <td className="border left_td px-1 py-1 custome_td_style text-red-600">
                {row.uid}
              </td>
              <td className="border px-1 py-1 custome_td_style">
                <div className="flex flex-col gap-1">
                  <span className="block text-red-500">
                    {dayjs.utc(row.created_at).format('DD MMM YYYY')}
                  </span>
                  <div className="flex gap-1 items-center justify-center">
                    <img src={clockIcon} alt="icon" className="w-[10px]" />
                    <span className="text-gray-500">
                      {dayjs.utc(row.created_at).format('h:s A')}
                    </span>
                  </div>
                  <span className="block bg-yellow-400 rounded-sm">
                    {dayjs().to(dayjs.utc(row.created_at))}
                  </span>
                </div>
              </td>
              <td className="border px-1 py-1 custome_td_style">
                <span className="block text-red-500">{row.name}</span>
                <span className="block">{row.phone}</span>
              </td>
              <td className="border px-1 py-1 custome_td_style">
                <span className="block text-red-500">{row.OrderType.name}</span>
                {row.reservation_date ?
                  <span className="block text-gray-500">
                    {row.reservation_date} {row.reservation_time}
                  </span>
                  :
                  row.reservation_time ?
                    <span className="block text-gray-500">
                      {row.reservation_time}
                    </span>
                    : <></>
                }
                {row.pickup_dates ?
                  <span className="block text-gray-500">
                    {row.pickup_dates} {row.pickup_times}
                  </span>
                  : <></>}
                {row.pickup_times ?
                  <span className="block text-gray-500">
                    {row.pickup_times}
                  </span>
                  : <></>}
                {row.shipping_info ?
                  <span className="block text-gray-500">
                    {row.shipping_info.area} :- {row.shipping_info.cost}
                  </span>
                  : <></>}
              </td>
              <td className="border px-1 py-1 custome_td_style">
                {row.DineInTable ?
                  <div className="flex flex-col items-center">
                    <span className="text-red-500">{row.DineInTable.name}</span>
                    <span className="flex gap-1 items-center">
                      <FaPerson size={17} color="#FF5534" /> {row.total_person}
                    </span>
                  </div>
                  : <></>}
              </td>
              <td className="border px-1 py-1 custome_td_style">
                <span className="flex items-center gap-1 justify-center">
                  <BsCash size={17} color="green" /> {row.total_price}
                </span>
                <span
                  className={`block rounded-sm text-white text-center ${row.is_payment === 1
                    ? "bg-green-500"
                    : "bg-red-500"
                    }`}
                >
                  {row.is_payment == 1 ? 'PAID' : 'UNPAID'}
                </span>
              </td>
              <td className="border px-1 py-1 custome_td_style">
                {row.status == "0" || row.status == "1" ? (
                  <div className={`w-full flex justify-center items-center gap-1 ${row.status == "0" ? `bg-blue-400` : `bg-green-600`} text-white rounded-sm`}>
                    <span>{row.status == "0" ? "Pending" : "Accepted"}</span>
                    <div className="animate-spin">⏳</div>
                  </div>
                ) : (
                  row.status == "2" ?
                    <div className="flex justify-center items-center gap-1 bg-green-600 text-white rounded-sm">
                      <FaCheck className="text-white" /> <span>COMPLETED</span>
                    </div>
                    :
                    <div className="flex justify-center items-center gap-1 bg-red-500 text-white rounded-sm">
                      <FaCross className="text-white" /> <span>Cancelled</span>
                    </div>
                )}
              </td>
              <td className="border right_td px-1 py-1 custome_td_style">
                <div className="flex justify-center items-center gap-1">
                  <div
                    className="p-1 bg-primeryFirst rounded-md border-2 border-transparent hover:border-black active:bg-black"
                    style={{ boxShadow: "0 0 5px -2px black" }}
                  >
                    <img
                      src={quickActionIcon}
                      alt="icon"
                      className="w-[17px] xl:w-[25px]"
                    />
                  </div>
                  <div
                    className="p-[2px] bg-primeryFirst rounded-md border-2 border-transparent hover:border-black active:bg-black"
                    style={{ boxShadow: "0 0 5px -2px black" }}
                  >
                    <img
                      src={foodIcon}
                      alt="icon"
                      className="w-[20px] xl:w-[30px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          )) :
            <tr>
              <td className="text-center text-[#fff]" colSpan={8}>No Orders !</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderList_table;
