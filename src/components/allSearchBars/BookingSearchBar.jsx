import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, DatePicker, Input, Select } from "antd"
import { BiSolidDownArrow } from "react-icons/bi"
import { selectOrderPaymentTypes, selectOrderTypeDetails } from "../../reducer/orders/reducer";
import { orderStatuses } from "../utils/utils"
function BookingSearchBar() {
  const paymentTypes = useSelector(selectOrderPaymentTypes);
  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  const [orderPayamentList, setOrderPayamentList] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);
  useEffect(() => {
    if (orderTypeDetails && orderTypeDetails.data) {
      if (orderTypeDetails.data.forms) {
        const datas = [{ value: '', label: 'All' }];
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'reservation_type') {
            form.data.map((item) => {
              datas.push({
                value: item.id,
                label: item.name
              });
            });
          }
        });
        setBookingTypes(datas);
      }
    }
  }, [orderTypeDetails]);
  useEffect(() => {
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
  }, [paymentTypes]);
  return (
    <div className="w-full bg-[#7A7A7A] h-[50px] flex items-center">
      <div className="w-full bg-[#7A7A7A]  grid grid-flow-row grid-cols-7 md:px-[10px] xl:px-[15px] gap-[10px] filterSearchDiv ">
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                activeBg: "#77B99C",
              },
            },
            token: {
              colorTextPlaceholder: "#fff",
              // pl
            },
          }}
        >
      <DatePicker
        className=" h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-primerySecond border-primerySecond focus:border-white  hover:bg-primerySecond hover:border-primeryFirst hover:border-[1px] "
        placeholder="Booking Date"
        suffixIcon={<CalendarOutlined className="text-black"/>}
        />
      </ConfigProvider>
      <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBg: "#000",
              },
            },
            token: {
              colorTextPlaceholder: "#bebcbc",
            },
          }}
        >
      <Input
        className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
        placeholder="Order No."
        suffix={<SearchOutlined />}
        />
      </ConfigProvider>
      <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBg: "#000",
              },
            },
            token: {
              colorTextPlaceholder: "#bebcbc",
            },
          }}
        >
          <Input
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
            placeholder="Booking Date"
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
          placeholder="Booking Type"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={bookingTypes}
        />
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
          placeholder="Pay status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={orderPayamentList}
        />
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
          placeholder="Order status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={orderStatuses}
        />
      </div>
    </div>
  )
}

export default BookingSearchBar