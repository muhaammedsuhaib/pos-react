import { ConfigProvider, DatePicker, Input, Select } from "antd";
import { BsCash } from "react-icons/bs";
import { FaCheck, FaPerson } from "react-icons/fa6";
import './tableContent.css'
import foodIcon from "../../../public/images/pos-category-images/food_16144752[1].svg";
import quickActionIcon from "../../../public/images/pos-category-images/Quick Action[1].svg";
import clockIcon from "../../../public/Clock_Icon.svg";
const tableDate = [
    {
      key: "1",
      orderId: 12345,
      dateAndTime: {
        date: "04 Aug 2024",
        time: "10:38 pm",
        timeAgo: "15 Hrs ago",
      },
      customer: {
        name: "Ceilo",
        phone: "+971501984309",
      },
      orderType: {
        type: "Pickup",
        time: "10:38 pm",
      },
      tableNo: 1,
      payment: {
        amount: "257.25",
        paymentStatus: "PAID",
      },
      status: "Pending",
    },
    {
      key: "2",
      orderId: 12345,
      dateAndTime: {
        date: "04 Aug 2024",
        time: "10:38 pm",
        timeAgo: "15 Hrs ago",
      },
      customer: {
        name: "Ceilo",
        phone: "+971501984309",
      },
      orderType: {
        type: "Pickup",
        time: "10:38 pm",
      },
      tableNo: 1,
      payment: {
        amount: "257.25",
        paymentStatus: "UNPAID",
      },
      status: "Completed",
    },
    {
      key: "3",
      orderId: 12345,
      dateAndTime: {
        date: "04 Aug 2024",
        time: "10:38 pm",
        timeAgo: "15 Hrs ago",
      },
      customer: {
        name: "Ceilo",
        phone: "+971501984309",
      },
      orderType: {
        type: "Pickup",
        time: "10:38 pm",
      },
      tableNo: 1,
      payment: {
        amount: "257.25",
        paymentStatus: "UNPAID",
      },
      status: "Completed",
    },
    {
      key: "4",
      orderId: 12345,
      dateAndTime: {
        date: "04 Aug 2024",
        time: "10:38 pm",
        timeAgo: "15 Hrs ago",
      },
      customer: {
        name: "Ceilo",
        phone: "+971501984309",
      },
      orderType: {
        type: "Pickup",
        time: "10:38 pm",
      },
      tableNo: 1,
      payment: {
        amount: "257.25",
        paymentStatus: "UNPAID",
      },
      status: "Pending",
    },
    {
      key: "5",
      orderId: 12345,
      dateAndTime: {
        date: "04 Aug 2024",
        time: "10:38 pm",
        timeAgo: "15 Hrs ago",
      },
      customer: {
        name: "Ceilo",
        phone: "+971501984309",
      },
      orderType: {
        type: "Pickup",
        time: "10:38 pm",
      },
      tableNo: 1,
      payment: {
        amount: "257.25",
        paymentStatus: "UNPAID",
      },
      status: "Pending",
    },

  ];

  const tableData = tableDate;


function TableContents() {
  return (
    <table className=" table-auto border-collapse w-full ">
    <thead className="bg-primeryFirst">
      <tr>
        <th className="px-1 py-2 max-w-[80px] border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white'">Order #.</p>
            <Input className="bg-white w-full  hover:border-black rounded-md hover:border-[1px] tableInput" placeholder="Search.." />
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white'">Date/Time.</p>
            <ConfigProvider
            theme={{
              token:{
                colorTextPlaceholder:'#515151'
              }
            }}
            >

            <DatePicker
            
              onKeyDown={(e) => {
                e.preventDefault();
                return false;
              }}
              placeholder="Select date"
              className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
            />
            </ConfigProvider>
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className="text-white'">Customer</p>
            <Input className="bg-white w-full  hover:border-black rounded-md hover:border-[1px] tableInput" placeholder="Search.." />
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white'">Order Type .</p>
            <Select
              placeholder="Select"
              className="text-ellipsis w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
              optionFilterProp="label"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white'">Table No.</p>
            <Select
              placeholder="Select"
              className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
              optionFilterProp="label"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-white'">Payment</p>
            <Select
              placeholder="Select"
              className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
              optionFilterProp="label"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </th>
        <th className="px-1 py-2 border-r border-[#FDBCAF] border-dotted custome_th_style">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-green-600'">Status</p>
            <Select
              placeholder="Select"
              className="w-full  hover:border-black rounded-md hover:border-[1px] tableInput"
              optionFilterProp="label"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </th>
        <th className="px-2 py-2 custome_th_style">ACTION</th>
      </tr>
    </thead>
    <tbody className="h-[300px] overflow-y-scroll ">
      {tableData.map((row, index) => (
        <tr
          key={index}
          className={`text-center custome_table_row ${
            index % 2 === 0 ? "bg-[#FFEDEB]" : "bg-[#FFDCD5]"
          }`}
        >
          <td className="border left_td px-1 py-1 custome_td_style text-red-600">
            {row.orderId}
          </td>
          <td className="border px-1 py-1 custome_td_style">
            <div className="flex flex-col gap-1">
              <span className="block text-red-500">
                {row.dateAndTime.date}
              </span>
              <div className="flex gap-1 items-center justify-center">
                <img src={clockIcon} alt="icon" className="w-[10px]" />
                <span className="text-gray-500">
                  {row.dateAndTime.time}
                </span>
              </div>
              <span className="block bg-yellow-400 rounded-sm">
                {row.dateAndTime.timeAgo}
              </span>
            </div>
          </td>
          <td className="border px-1 py-1 custome_td_style">
            <span className="block text-red-500">{row.customer.name}</span>
            <span className="block">{row.customer.phone}</span>
          </td>
          <td className="border px-1 py-1 custome_td_style">
            <span className="block text-red-500">{row.orderType.type}</span>
            <span className="block text-gray-500">
              {row.orderType.time}
            </span>
          </td>
          <td className="border px-1 py-1 custome_td_style">
            <div className="flex flex-col items-center">
              <span className="text-red-500">Table {row.tableNo}</span>
              <span className="flex gap-1 items-center">
                <FaPerson size={17} color="#FF5534" /> {row.tableNo}
              </span>
            </div>
          </td>
          <td className="border px-1 py-1 custome_td_style">
            <span className="flex items-center gap-1 justify-center">
              <BsCash size={17} color="green" /> {row.payment.amount}
            </span>
            <span
              className={`block rounded-sm text-white text-center ${
                row.payment.paymentStatus === "PAID"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {row.payment.paymentStatus}
            </span>
          </td>
          <td className="border px-1 py-1 custome_td_style">
            {row.status === "Pending" ? (
              <div className="w-full flex justify-center items-center gap-1 bg-blue-400 text-white rounded-sm">
                <span>Pending</span>
                <div className="animate-spin">⏳</div>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-1 bg-green-600 text-white rounded-sm">
                <FaCheck className="text-white" /> <span>COMPLETED</span>
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
      ))}
    </tbody>
  </table>
  )
}

export default TableContents