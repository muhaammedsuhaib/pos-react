import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, Input, Select } from "antd"
import { BiSolidDownArrow } from "react-icons/bi"
import { selectOrderPaymentTypes, selectOrderTables, selectOrderTypes } from "../../reducer/orders/reducer";
function AllOrdersSearchBar() {
  const [orderTypeList, setOrderTypeList] = useState([]);
  const [orderTableList, setOrderTableList] = useState([]);
  const [orderPayamentList, setOrderPayamentList] = useState([]);

  const orderTypes = useSelector(selectOrderTypes);
  const orderTables = useSelector(selectOrderTables);
  const paymentTypes = useSelector(selectOrderPaymentTypes);
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
  return (
    <div className="w-full bg-[#7A7A7A] h-[50px] flex items-center">
      <div className="w-full bg-[#7A7A7A] grid grid-flow-row grid-cols-7 md:px-[10px] xl:px-[15px] gap-[10px] filterSearchDiv ">
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
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
          placeholder="Table"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          options={orderTableList}
          allowClear
        />
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
            placeholder="Waiter"
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
          placeholder="Pay status"
          allowClear
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          options={orderPayamentList}
        />
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
          placeholder="Order status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
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
    </div>
  )
}

export default AllOrdersSearchBar