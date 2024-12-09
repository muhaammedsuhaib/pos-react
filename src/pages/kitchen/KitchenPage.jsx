import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input, Select } from "antd";
import { BiSolidDownArrow } from "react-icons/bi";
import "../../index.css";
import KitchenNewOrder from "./../../components/kitchenItems/kirchen_newOrder/KitchenNewOrder";
import Kitchen_accepted from "../../components/kitchenItems/kitchen_accepted/Kitchen_accepted";
import Kitchen_completed from "../../components/kitchenItems/kitchen_completed/Kitchen_completed";
import Kitchen_served from "../../components/kitchenItems/kitchen_served/Kitchen_served";
import Kitchen_sidebar from "../../components/kitchenItems/kitchen_sidebar/Kitchen_sidebar";
import KichenNewOrderFewDetail from "../../components/kitchenItems/kirchen_newOrder/KichenNewOrderFewDetail";
import KitchenAcceptedFewDetails from "../../components/kitchenItems/kitchen_accepted/KitchenAcceptedFewDetails";
import KitchenCompletedFewDeatils from "../../components/kitchenItems/kitchen_completed/KitchenCompletedFewDeatils";
import KitchenServedFewDetails from "../../components/kitchenItems/kitchen_served/KitchenServedFewDetails";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./kitchen.css";

const KitchenPage = () => {
  const [activeTab, setActiveTab] = useState("cooking");
  const kitchenDetailedView = useSelector(
    (state) => state.orderHistory?.kitchen_detailed_view
  );
  const kitchensearchView = useSelector(
    (state) => state.orderHistory?.kitchen_search_view
  );

  const accepted_data = [
    {
      data: [
        {
          id: 1,
          text: "Chicken Badya",
        },
        {
          id: 2,
          text: "Chicken Saleek",
        },
        {
          id: 3,
          text: "Chicken Kabsah",
        },
      ],
    },
    {
      data: [
        {
          id: 1,
          text: "Goursan",
        },
      ],
    },
  ];

  const newOrder_data = [
    {
      data: [
        {
          id: 1,
          text: "Lamp Chunk Soup",
        },
        {
          id: 2,
          text: "Veg & lamp Stew",
        },
      ],
    },
    {
      data: [
        {
          id: 1,
          text: "Goursan",
        },
        {
          id: 2,
          text: "Shrimp Kabsah",
        },
      ],
    },
  ];

  return (
    <div className="w-full custom_height bg-primeryFirst flex rounded-tr-[20px] rounded-tl-[20px] xl:p-[15px] p-[10px] relative z-[1000] ">
      <div className="absolute top-[-6px] left-[49%] 2xl:left-[45%] twoTabs space-x-[-35px] nav-sub-tabs">
        {/* top-[-23px] xl:right-[25%] md:right-[30%] sm:right-[50%] */}

        <button
          onClick={() => {
            setActiveTab("not_started");
            // setPage('dine_in_not started');
          }}
          className={`z-[-50] uppercase relative ${
            activeTab === "not_started"
              ? "bg-[#515151] text-white active z-[2]"
              : " bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          not started
        </button>
        <button
          onClick={() => {
            setActiveTab("cooking");
            // setPage('all_cooking');
          }}
          className={`z-[-50] relative ${
            activeTab === "cooking"
              ? "bg-[#b54c4c] text-white active z-[2]"
              : "bg-[#D6DCE5] text-black  z-[1] font-semibold"
          }`}
        >
          COOKING
        </button>
        <button
          onClick={() => {
            setActiveTab("done");
            // setPage('dine_in_done');
          }}
          className={`z-[-50] relative ${
            activeTab === "done"
              ? "bg-[#515151] text-white active z-[2]"
              : " bg-[#D6DCE5] text-black z-[1] font-semibold"
          }`}
        >
          DONE
        </button>
      </div>
      {/* Sidebar or items list */}
      <div className="bg-primeryFirst pt-10">
        <Kitchen_sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full h-full bg-[#D5DCE4] rounded-xl relative z-[2500] mt-2">
        <div className="w-full py-[10px] flex justify-center flex-col items-center space-y-[5px]">
          {kitchensearchView == true && (
            <div className="w-full grid grid-flow-row grid-cols-7 md:px-[10px] xl:px-[15px] gap-[10px] filterSearchDiv ">
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
                  className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
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
                  className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
                  placeholder="Customer Name"
                  suffix={<SearchOutlined />}
                />
              </ConfigProvider>
              <Select
                className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
                placeholder="Table"
                suffixIcon={<BiSolidDownArrow className="text-white" />}
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
                  className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
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
                  className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
                  placeholder="Waiter"
                  suffix={<SearchOutlined />}
                />
              </ConfigProvider>
              <Select
                className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
                placeholder="Pay status"
                suffixIcon={<BiSolidDownArrow className="text-white" />}
              />
              <Select
                className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black  border-black focus:border-white  hover:bg-black hover:border-primeryFirst hover:border-[1px]"
                placeholder="Order status"
                suffixIcon={<BiSolidDownArrow className="text-white" />}
              />
            </div>
          )}
          <div className="grid grid-cols-4 grid-flow-row gap-2 xl:gap-5 w-full overflow-y-auto px-[10px] ">
            <div className="h-[40px] bg-[#DBAE55] flex items-center justify-between px-[4px] rounded-[20px]">
              <div className="h-[33px] w-[33px] rounded-full bg-[#FDFAE8] flex items-center justify-center">
                <img
                  src="/public/images/kitchenHeader/notification_11341354.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center text-white font-medium text-[17px]">
                NEW KOT
              </div>
              <div className="h-[33px] w-[33px] rounded-full bg-[#FDFAE8] flex items-center justify-center text-black text-[25px] font-medium pt-[3px]">
                <span> 3</span>
              </div>
            </div>
            <div className="h-[40px] bg-[#B33E3C] flex items-center justify-between px-[4px] rounded-[20px]">
              <div className="h-[33px] w-[33px] rounded-full bg-[#DCC0BF] flex items-center justify-center">
                <img
                  src="/public/images/kitchenHeader/cooking_2728879 (1).svg"
                  alt=""
                  className="w-[20px]"
                />
              </div>
              <div className="flex items-center justify-center text-white font-medium text-[17px]">
                COOKING
              </div>
              <div className="h-[33px] w-[33px] rounded-full bg-[#DCC0BF] flex items-center justify-center text-black text-[25px] font-medium pt-[3px]">
                <span> 5</span>
              </div>
            </div>
            <div className="h-[40px] bg-[#63A654] flex items-center justify-between px-[4px] rounded-[20px]">
              <div className="h-[33px] w-[33px] rounded-full bg-[#DCFBE7] flex items-center justify-center">
                <img
                  src="/public/images/kitchenHeader/restaurant_10860258.svg"
                  alt=""
                  className="w-[20px]"
                />
              </div>
              <div className="flex items-center justify-center text-white font-medium text-[17px]">
                READY TO SERVE
              </div>
              <div className="h-[33px] w-[33px] rounded-full bg-[#DCFBE7] flex items-center justify-center text-black text-[25px] font-medium pt-[3px]">
                <span> 5</span>
              </div>
            </div>
            <div className="h-[40px] bg-[#468999] flex items-center justify-between px-[4px] rounded-[20px]">
              <div className="h-[33px] w-[33px] rounded-full bg-[#D8ECEF] flex items-center justify-center">
                <img
                  src="/public/images/kitchenHeader/restaurant_12384316.svg"
                  alt=""
                  className="w-[25px]"
                />
              </div>
              <div className="flex items-center justify-center text-white font-medium text-[17px]">
                READY TO SERVE
              </div>
              <div className="h-[33px] w-[33px] rounded-full bg-[#D8ECEF] flex items-center justify-center text-black text-[25px] font-medium pt-[3px]">
                <span> 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area below the search */}
        {kitchenDetailedView == true ? (
          <div
            className="grid grid-cols-4 gap-2 xl:gap-5 w-full h-full overflow-y-auto bg-[#515151] rounded-t-2xl rounded-b-xl p-[10px] "
            style={{
              height: kitchensearchView
                ? "calc(100% - 90px)"
                : "calc(100% - 50px)",
            }}
          >
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#FEF2F2] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#F7653C] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>9</span>
              </div>
              <p>NEW ORDER</p>
              <span>
                <img src="/public/images/kitchensIcons/KOT Printer.png" alt="icon" width={35} />
              </span>
            </div> */}
              {newOrder_data.map((item, ind) => (
                <KitchenNewOrder key={ind} itemData={item} />
              ))}
            </div>
            <div className="w-full h-fit max-h-full  px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#D9EEF1] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#478A99] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>ACCEPTED</p>
              <span>
                <img src="/public/images/kitchensIcons/accept.png" alt="icon" width={25} />
              </span>
            </div> */}
              {accepted_data.map((item, ind) => (
                <Kitchen_accepted key={ind} itemData={item} />
              ))}
            </div>
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#DCFCE7] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#28A745] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>COMPLETED</p>
              <span>
                <img src="/public/images/kitchensIcons/complete.png" alt="icon" width={25} />
              </span>
            </div> */}
              <Kitchen_completed />
            </div>
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#FEFBE8] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#DBAF56] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>SERVED</p>
              <span>
                <img src="/public/images/kitchensIcons/served.png" alt="icon" width={25} />
              </span>
            </div> */}
              <Kitchen_served />
            </div>
          </div>
        ) : (
          <div
            className="grid grid-cols-4 gap-2 xl:gap-5 w-full h-full overflow-y-auto bg-[#515151] rounded-t-2xl rounded-b-xl p-[10px] "
            style={{ height: "calc(100% - 50px)" }}
          >
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#FEF2F2] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#F7653C] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>9</span>
              </div>
              <p>NEW ORDER</p>
              <span>
                <img src="/public/images/kitchensIcons/KOT Printer.png" alt="icon" width={35} />
              </span>
            </div> */}
              {newOrder_data.map((item, ind) => (
                <KichenNewOrderFewDetail key={ind} itemData={item} />
              ))}
            </div>
            <div className="w-full h-fit max-h-full  px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#D9EEF1] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#478A99] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>ACCEPTED</p>
              <span>
                <img src="/public/images/kitchensIcons/accept.png" alt="icon" width={25} />
              </span>
            </div> */}
              {accepted_data.map((item, ind) => (
                <KitchenAcceptedFewDetails key={ind} itemData={item} />
              ))}
            </div>
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#DCFCE7] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#28A745] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>COMPLETED</p>
              <span>
                <img src="/public/images/kitchensIcons/complete.png" alt="icon" width={25} />
              </span>
            </div> */}
              <KitchenCompletedFewDeatils />
            </div>
            <div className="w-full h-fit max-h-full px-1 pt-1 pb-2">
              {/* <div className="w-full bg-[#FEFBE8] p-1 flex items-center justify-between rounded-sm">
              <div
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#DBAF56] rounded-md text-white"
                style={{ boxShadow: "0 0 3px 0px black" }}
              >
                <span>2</span>
              </div>
              <p>SERVED</p>
              <span>
                <img src="/public/images/kitchensIcons/served.png" alt="icon" width={25} />
              </span>
            </div> */}
              <KitchenServedFewDetails />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KitchenPage;
