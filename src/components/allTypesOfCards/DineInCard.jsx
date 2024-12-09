import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Select } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import dineInImg from "../../../public/images/pos-category-images/dining-table_15725489.svg";
import foodIcon from "../../../public/images/pos-category-images/food_16144752[1].svg";
import quickActionIcon from "../../../public/images/pos-category-images/Quick Action[1].svg";
import { useSelector } from "react-redux";
import { selectStaffDetails } from "../../reducer/orders/reducer";
function DineInCard({ color, tableNo, customer, orderId, setPage, person_count, is_edit }) {
  const navigate = useNavigate();
  const staffList = useSelector(selectStaffDetails)
  const [showStaffList, setShowStaffList] = useState([]);
  useEffect(() => {
    if (staffList && staffList.data && Array.isArray(staffList.data)) {
      const dataList1 = [{ value: '', label: '' }];
      staffList.data.map((item) => {
        dataList1.push({
          value: item.id,
          label: item.name
        });
      });
      setShowStaffList(dataList1);
    }
  }, [staffList]);
  const handleSwitchClick = (e, type = null) => {
    e.stopPropagation();
    if (type && type === 'item') {
      setPage('dine_in_items');
    }
  };
  return (
    <div
      className="bg-white h-[180px] rounded-[15px] p-[10px] relative hover:border-[4px] duration-75 active:bg-primeryFirst hover:border-primeryFirst card-wrapper"
      onClick={() => {
        if (setPage && !is_edit) setPage('dine_in_items');
      }}
    >
      <div className="flex justify-center absolute left-[50%] -translate-x-[50%] bottom-[97%] gap-x-[5px]">
        <div
          className="w-[40px] h-[40px] cursor-pointer bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon"
          onClick={(e) => handleSwitchClick(e, 'item')}
        >
          <img src={foodIcon} alt="" className="w-[30px]" />
        </div>
        <div
          className="w-[40px] h-[40px] cursor-pointer bg-[#FF5838] rounded-full flex justify-center items-center border-[3px] border-white active:border-primeryFirst card-top-icon"
          onClick={(e) => handleSwitchClick(e, 'action')}
        >
          <img src={quickActionIcon} alt="" className="w-[25px]" />
        </div>
      </div>
      <div className={`w-full h-[133px] rounded-[10px] ${color == 'green' ? 'bg-[#466D2C] ' : 'bg-[#C00000]'} mediumShadow`}>
        <div className="px-[10px]">
          <div className="w-full">
            <div className="w-[full] rounded-[20px] font-medium text-center text-white text-[14px]">
              {tableNo ? tableNo : 'NO TABLE'}
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-[50px]">
            <img src={dineInImg} alt="" className="w-[50px]" />
          </div>
          <div className="w-full h-[40px] flex items-center justify-center mt-[-12px]">
            <div className="w-full bg-white h-[23px] relative flex items-center justify-center smallShadow">
              <div
                className="w-[30px] h-[30px] absolute left-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black"
                onClick={(e) => handleSwitchClick(e, 'minus')}
              >
                <button className="text-white ">
                  <p className="h-[2px] w-[10px] bg-white"></p>
                </button>
              </div>
              <div
                className="w-[30px] h-[30px] absolute right-[-5px] top-[-4px] border-[3px] bg-[#006FC0] rounded-full flex justify-center items-center hover:border-black active:bg-black"
                onClick={(e) => handleSwitchClick(e, 'plus')}
              >
                <button className="text-white">
                  <PlusOutlined />
                </button>
              </div>
              <div className="">{person_count}</div>
            </div>
          </div>
          <div
            className="w-full bg-white rounded-[5px] flex flex-row items-center pl-[5px] overflow-hidden smallShadow hover:border-gray-600 hover:border-2"
            onClick={(e) => handleSwitchClick(e)}
          >
            {/* <div className="text-[12px] font-semibold">Waiter:</div> */}
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    activeBorderColor: "#fff",
                    colorBorder: "#fff",
                    hoverBorderColor: "#fff",
                    boxShadow: false,
                    boxShadowSecondary: false,
                    fontSize: "12px",
                    placeholderColor: "#7A7A7A",
                  },
                },
              }}
            >
              <Select
                className="w-full outline-none focus:outline-none border-none focus:border-none flex-1 text-[12px] h-[25px]"
                options={showStaffList}
                suffixIcon={<BiSolidDownArrow className="text-black" />}
                onClick={(e) => handleSwitchClick(e)}
                placeholder="Waiter"
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <div className="w-full text-[12px] pl-[5px] leading-[13px]">
        <p className="whitespace-nowrap text-ellipsis">{customer}</p>
        <p className="font-medium">{orderId ? 'ID:' + orderId : ''}</p>
      </div>
    </div>
  )
}

export default DineInCard