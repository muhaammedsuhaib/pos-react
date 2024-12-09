import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchOutlined } from "@ant-design/icons"
import { ConfigProvider, Input, Select } from "antd"
import { BiSolidDownArrow } from "react-icons/bi"
import { orderStatuses } from "../utils/utils"
import { selectOrderTypeDetails } from '../../reducer/orders/reducer'
function AggregatorSearchBar() {
  const [aggregators, setAggregators] = useState([]);

  const orderTypeDetails = useSelector(selectOrderTypeDetails);
  useEffect(() => {
    if (orderTypeDetails && orderTypeDetails.data) {
      if (orderTypeDetails.data.forms) {
        const datas = [{ value: '', label: 'All' }];;
        orderTypeDetails.data.forms.map((form) => {
          if (form.name == 'aggregator') {
            form.data.map((item) => {
              datas.push({
                value: item.id,
                label: item.title
              });
            });
          }
        });
        setAggregators(datas);
      }
    }
  }, [orderTypeDetails]);
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
            className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
            placeholder="Item Name"
            suffix={<SearchOutlined />}
          />
        </ConfigProvider>
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
          placeholder="Aggregator "
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          allowClear
          options={aggregators}
        />
        <Select
          className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px] "
          placeholder="Order status"
          suffixIcon={<BiSolidDownArrow className="text-white" />}
          options={orderStatuses}
          allowClear
        />
      </div>
    </div>
  )
}

export default AggregatorSearchBar