/* eslint-disable react/prop-types */

import menuIcon from "/Menu.svg";
import settingsIcon from "/Settings.svg";
import "./sidebar.css";
import checklistIcon from "/checklist.svg";
import workIcon from "/Work.svg";
import expenseIcon from "/Expense.svg";
import optionIcon from "/Option.svg";
import wallet from "/Petty.svg";
import { useState } from "react";
import SettingsModal from "../sidebarPopups/SettingsModal";
import ShiftModal from "../sidebarPopups/ShiftModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageType } from "../../reducer/user/userSlice";

const Sidebar = ({ toggle, setToggle, ...props }) => {
  const [selectedItem, setSelectedItem] = useState("pos");
  const [selectedSub, setSelectedSub] = useState("");

  const [openModal, setOpenModal] = useState("");

  const [settingsOpenModal, setSettingsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const items = [
    {
      id: 1,
      name: "POS",
      icon: <img src={menuIcon} accessKey="icon" width={25} />,
      link: "pos",
      subItems: [],
    },
    {
      id: 2,
      name: "KITCHEN DISPLAY",
      icon: <img src={checklistIcon} accessKey="icon" width={25} />,
      link: "kds",
      subItems: [],
    },
    {
      id: 3,
      name: "EXPENSE",
      icon: <img src={expenseIcon} accessKey="icon" width={25} />,
      link: "expense",
      subItems: [],
    },
    {
      id: 4,
      name: "PETTY CASH",
      icon: <img src={wallet} accessKey="icon" width={25} />,
      link: "pettycash",
      subItems: [],
    },
    {
      id: 5,
      name: "SHIFT (CASHIER)",
      icon: <img src={menuIcon} accessKey="icon" width={25} />,
      link: "shift",
      subItems: [
        {
          name: "START NEW SHIFT",
          link: "startNewShift",
        },
        {
          name: "END SHIFT",
          link: "endShift",
        },
      ],
    },
    {
      id: 6,
      name: "DAY CLOSE",
      icon: <img src={workIcon} accessKey="icon" width={25} />,
      link: "dayclose",
      subItems: [],
    },
    {
      id: 7,
      name: "CRM (CUSTOMERS)",
      icon: <img src={settingsIcon} accessKey="icon" width={25} />,
      link: "crm",
      subItems: [],
    },
    {
      id: 8,
      name: "REPORTS",
      icon: <img src={settingsIcon} accessKey="icon" width={25} />,
      link: "reports",
      subItems: [],
    },
    {
      id: 9,
      name: "TRANSACTIONS",
      icon: <img src={settingsIcon} accessKey="icon" width={25} />,
      link: "transactions",
      subItems: [],
    },
    {
      id: 10,
      name: "BACK-OFFICE",
      icon: <img src={settingsIcon} accessKey="icon" width={25} />,
      link: "backoffice",
      subItems: [],
    },
  ];

  const navigate = useNavigate();

  return (
    <div
      className={`${
        toggle ? "block" : "hidden"
      } absolute max-w-[250px] w-full h-screen bg-[#FF5534] left-0 top-0 z-[1500] `}
      style={{ boxShadow: "0 0 10px -2px black" }}
    >
      <div className="overflow-y-auto h-full flex flex-col">
        <div className="flex justify-end w-full px-1 py-2 ">
          <button
            className="px-2 py-3 bg-black rounded-full shadow-lg "
            onClick={() => setToggle(false)}
          >
            <img src={optionIcon} alt="" width={25} className="rotate-180" />
          </button>
        </div>
        <div className="flex flex-col justify-between  flex-grow">
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col w-auto ml-4 pl-[5px] py-[8px]  hover:bg-[#fff] cursor-pointer ${
                  item.link === selectedItem
                    ? "bg-white text-primeryFirst"
                    : " text-white"
                } rounded-tl-[12px] rounded-bl-[12px] hover:text-[#ff5634] hover:font-semibold `}
                onClick={() => {
                  setSelectedItem(item.link);
                  dispatch(setPageType(item.link));
                  if (item.link === "dayclose") {
                    navigate("/pos/pos-day-close");
                  } else if (item.link === "crm") {
                    navigate("/pos/crm-customers");
                  } else if (item.link === "transactions") {
                    navigate("/pos/transactions");
                  } else {
                    navigate("/");
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-[40px] h-[40px] bg-primeryFirst py-[3px] flex justify-center items-center rounded-[12px] "
                    style={{ boxShadow: "0 0 10px -3px black" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[15px]">{item.name}</span>
                </div>
                {item.link === selectedItem && item.subItems?.length > 0 && (
                  <div className="w-full pl-[40px] flex flex-col  mt-[10px]">
                    {item.subItems.map((it, index) => (
                      <div
                        className={`pl-[5px] text-[0.7rem] py-[5px] rounded-md uppercase ${
                          selectedSub === it.link
                            ? "bg-primeryFirst text-white"
                            : "hover:bg-black"
                        } `}
                        key={index}
                        onClick={() => {
                          {
                            setSelectedSub(it.link);
                            setOpenModal(it.link);
                          }
                        }}
                      >
                        {it.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className={`w-[56px] m-4 p-[8px] py-[8px] text-white my-2  ${
              "settings" === selectedItem
                ? "bg-white text-primeryFirst"
                : " text-white"
            } hover:bg-[#fff] rounded-[12px] hover:text-[#ff5634] hover:font-semibold cursor-pointer`}
            onClick={() => {
              setSelectedItem("settings");
              setSettingsOpenModal(true);
              navigate("/");
            }}
          >
            <span
              className="w-[40px] h-[40px] bg-[#ff5634] py-[3px] flex justify-center items-center rounded-[12px] "
              style={{ boxShadow: "0 0 10px -3px black" }}
            >
              <img src={settingsIcon} alt="" accessKey="icon" width={25} />
            </span>
            <a href="" className="text-[15px]"></a>
          </div>
        </div>
      </div>

      <SettingsModal
        openModal={settingsOpenModal}
        setOpenModal={setSettingsOpenModal}
      />

      {openModal === "startNewShift" && (
        <ShiftModal setOpenModal={setOpenModal} title={"NEW SHIFT"} />
      )}
      {openModal === "endShift" && (
        <ShiftModal setOpenModal={setOpenModal} title={"CLOSE SHIFT"} />
      )}
      {/* {openModal === "dayclose" && (
        <DayCloseModal setOpenModal={setOpenModal} />
      )} */}
    </div>
  );
};

export default Sidebar;
