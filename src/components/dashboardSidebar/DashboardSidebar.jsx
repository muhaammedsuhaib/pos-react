import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './style.css';

function DashboardSidebar({ DBpage, setDBpage, saleSub, setSaleSub }) {
  const [sidebar, setSidebar] = useState(true);

  const items = [
    {
      id: 1,
      name: "day closing",
      icon: (
        <img
          src="/public/images/kitchenSidebar/notification_11341354.svg"
          accessKey="icon"
          width={25}
        />
      ),
      path: "day-closing",
    },
    {
      id: 2,
      name: "sales",
      icon: (
        <img
          src="/public/images/kitchenSidebar/notification_11341354.svg"
          accessKey="icon"
          width={40}
        />
      ),
      path: "sales",
      salesItems: [
        {
          name: "sales trend",
          path: "sales-trend",
        },
        {
          name: "overall summary",
          path: "overall-summary",
        },
        {
          name: "payment types",
          path: "payment-types",
        },
        {
          name: "order types",
          path: "order-types",
        },
        {
          name: "extra charges",
          path: "extra-charges",
        },
        {
          name: "top selers",
          path: "top-selers",
        },
        {
          name: "order discounts",
          path: "order-discounts",
        },
        {
          name: "item discounts",
          path: "item-discounts",
        },
        {
          name: "orders cancelled",
          path: "orders-cancelled",
        },
        {
          name: "items cancelled",
          path: "items-cancelled",
        },
        {
          name: "customer credits",
          path: "customer-credits",
        },
        {
          name: "free food",
          path: "free-food",
        },
      ],
    },
    {
      id: 3,
      name: "expenses",
      icon: (
        <img
          src="/public/images/kitchenSidebar/cooking_2728879 (1).svg"
          accessKey="icon"
          width={25}
        />
      ),
      path: "",
      salesItems: [],
    },
    {
      id: 4,
      name: "petty cash",
      icon: (
        <img
          src="/public/images/kitchenSidebar/restaurant_10860258.svg"
          accessKey="icon"
          width={25}
        />
      ),
      path: "",
      salesItems: [],
    },
    {
      id: 5,
      name: "attendance",
      icon: (
        <img
          src="/public/images/kitchenSidebar/restaurant_12384316.svg"
          accessKey="icon"
          width={30}
        />
      ),
      path: "",
      salesItems: [],
    },
    {
      id: 6,
      name: "dashboard",
      icon: (
        <img
          src="/public/images/kitchenSidebar/restaurant_12384316.svg"
          accessKey="icon"
          width={30}
        />
      ),
      path: "dashboard",
      salesItems: [],
    },
  ];
  return (
    <div
      className=" overflow-y-scroll scrollBarHidden"
      style={{ height: "calc(100vh - 6.7rem)" }}
    >
      <div className="flex justify-end mb-10 mt-1 pr-5">
        <div
          className="arrow-btn text-white border border-primeryFirst hover:border-[#55535372] hover:shadow-xl active:bg-black active:text-white w-[40px] h-[40px] flex justify-center items-center rounded-[10px]"
          // style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.5)" }}
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? (
            <FaChevronLeft className="text-[30px]" />
          ) : (
            <FaChevronRight className="text-[30px] " />
          )}
        </div>
      </div>
      {items.map((item) => (
        <>
          <div
            key={item.id}
            className={`flex flex-col w-auto  ml-4 pr-3 pl-[5px] py-[8px]  my-2 ${
              item.path === DBpage
                ? "bg-white text-primeryFirst font-semibold"
                : "text-white"
            } hover:bg-[#fff] rounded-tl-[12px] rounded-bl-[12px] hover:text-[#ff5634] hover:font-semibold item-dev cursor-pointer duration-100`}
            onClick={() => {
              setDBpage(item.path);
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-[40px] h-[40px] bg-[#ff5634] py-[3px] flex justify-center items-center rounded-[12px] "
                style={{ boxShadow: "0 0 10px -3px black" }}
              >
                {item.icon}
              </span>
              {sidebar && (
                <a
                  href={item.link}
                  className="text-[15px] w-[100px] xl:w-[150px] uppercase"
                >
                  {item.name}
                </a>
              )}
            </div>
            {item.path === DBpage && item.salesItems?.length > 0 && (
              <div className="w-full pl-[25px] flex flex-col gap-[5px] mt-[10px]">
                {item.salesItems.map((it, index) => (
                  <div
                    className={`pl-[5px] text-[0.7rem] py-[5px] rounded-md uppercase ${
                      saleSub === it.path
                        ? "bg-primeryFirst text-white"
                        : "hover:bg-black"
                    } `}
                    key={index}
                    onClick={() => {
                      setSaleSub(it.path);
                    }}
                  >
                    {it.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default DashboardSidebar;
