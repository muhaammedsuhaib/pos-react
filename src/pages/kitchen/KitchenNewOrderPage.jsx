import { SearchOutlined } from "@ant-design/icons"
import KichenNewOrderFewDetail from "../../components/kitchenItems/kirchen_newOrder/KichenNewOrderFewDetail"
import KitchenNewOrder from "../../components/kitchenItems/kirchen_newOrder/KitchenNewOrder"
import Kitchen_accepted from "../../components/kitchenItems/kitchen_accepted/Kitchen_accepted"
import KitchenAcceptedFewDetails from "../../components/kitchenItems/kitchen_accepted/KitchenAcceptedFewDetails"
import Kitchen_completed from "../../components/kitchenItems/kitchen_completed/Kitchen_completed"
import KitchenCompletedFewDeatils from "../../components/kitchenItems/kitchen_completed/KitchenCompletedFewDeatils"
import Kitchen_served from "../../components/kitchenItems/kitchen_served/Kitchen_served"
import KitchenServedFewDetails from "../../components/kitchenItems/kitchen_served/KitchenServedFewDetails"
import { ConfigProvider, Input, Select } from "antd"
import { BiSolidDownArrow } from "react-icons/bi"
import { useSelector } from "react-redux"


function KitchenNewOrderPage() {
    const kitchenDetailedView = useSelector((state)=>state.orderHistory?.kitchen_detailed_view)
    const kitchensearchView = useSelector((state)=>state.orderHistory?.kitchen_search_view)
  return (
    <div className="flex-grow w-full h-full bg-[#D5DCE4] rounded-xl">
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
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
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
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
              placeholder="Customer Name"
              suffix={<SearchOutlined />}
              />
            </ConfigProvider>
            <Select
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
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
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
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
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
              placeholder="Waiter"
              suffix={<SearchOutlined />}
              />
            </ConfigProvider>
            <Select
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
              placeholder="Pay status"
              suffixIcon={<BiSolidDownArrow className="text-white" />}
            />
            <Select
              className="searchInput h-[30px] outline-none focus:bg-black rounded-[20px] text-white bg-black border-none hover:bg-black "
              placeholder="Order status"
              suffixIcon={<BiSolidDownArrow className="text-white" />}
            />
          </div>
          )}
          <div className="grid grid-cols-4 grid-flow-row gap-2 xl:gap-5 w-full overflow-y-auto px-[10px] ">
            <div className="h-[40px] bg-[#DBAE55] flex items-center justify-between px-[4px] rounded-[20px]">
              <div className="h-[33px] w-[33px] rounded-full bg-[#FDFAE8] flex items-center justify-center">
                <img src="/public/images/kitchenHeader/notification_11341354.svg" alt="" />
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
                <img src="/public/images/kitchenHeader/cooking_2728879 (1).svg" alt="" className="w-[20px]" />
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
                <img src="/public/images/kitchenHeader/restaurant_10860258.svg" alt="" className="w-[20px]"/>
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
                <img src="/public/images/kitchenHeader/restaurant_12384316.svg" alt="" className="w-[25px]" />
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
          style={{ height: kitchensearchView ? "calc(100% - 90px)" : "calc(100% - 50px)" }}
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
          
              <KitchenNewOrder  />
          
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
          
              <Kitchen_accepted />
         
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
           
              <KichenNewOrderFewDetail />
         
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
           
              <KitchenAcceptedFewDetails />
         
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
  )
}

export default KitchenNewOrderPage