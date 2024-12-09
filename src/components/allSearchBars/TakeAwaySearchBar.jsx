import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, Input, Select } from "antd"
import { BiSolidDownArrow } from "react-icons/bi"
import { orderStatuses } from "../utils/utils";
import { selectOrderPaymentTypes } from "../../reducer/orders/reducer";
function TakeAwaySearchBar() {
  const paymentTypes = useSelector(selectOrderPaymentTypes);
  const [orderPayamentList, setOrderPayamentList] = useState([]);
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
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
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
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
            placeholder="Customer Name"
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
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
            placeholder="Item Name"
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>

        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
          placeholder="Pay status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={orderPayamentList}
        />
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
          placeholder="Order status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={orderStatuses}
        />
      </div>
    </div>
  )
}

export default TakeAwaySearchBar