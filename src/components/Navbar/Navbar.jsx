/* eslint-disable react/prop-types */
import { useState } from "react";
import optionIcon from "/Option.svg";
import Lock_screen_icon from "../../../public/lock-screen.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NotificationBox from "../notification_box/NotificationBox";
import { useDispatch } from "react-redux";
import { setNotificationPage } from "../../reducer/user/userSlice";
import CallWaiter from "../notifications/CallWaiter";
const Navbar = ({ setPinModalOpen }) => {
  const dispatch = useDispatch();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("DASHBOARD");
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [waiterPopup, setWaiterPopup] = useState(false);

  return (
    <div className="relative flex items-center justify-between px-2">
      <div className="flex space-x-[10px] w-[200px] 2xl:w-auto">
        <button
          className="px-2 py-3 bg-primeryFirst rounded-full shadow-lg"
          style={{ boxShadow: "0 0 5px -2px black" }}
          onClick={() => setSidebarToggle((prev) => !prev)}
        >
          <img src={optionIcon} alt="option" width={25} />
        </button>
      </div>
      <div>
        <div className="lg-nav relative w-full -mb-2">
          <ul
            className="nav nav-tabs hidden lg:flex space-x-[-50px]"
            id="myTab"
          >
            <li className="nav-item">
              <Link
                to={"/dashboard"}
                className={`price-nav-link ${
                  activeTab === "DASHBOARD" ? "active relative z-[500]" : ""
                }`}
                style={{
                  padding:
                    activeTab === "DASHBOARD" ? "14px 110px" : "14px 50px", // Adjust padding based on the active state
                }}
                onClick={() => handleTabClick("DASHBOARD")}
              >
                DASHBOARD
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/"}
                className={`price-nav-link ${
                  activeTab === "PLACE ORDER" ? "active  relative z-[500]" : ""
                }`}
                style={{
                  padding:
                    activeTab === "PLACE ORDER" ? "14px 120px" : "14px 70px", // Adjust padding based on the active state
                }}
                onClick={() => {
                  handleTabClick("PLACE ORDER");
                  dispatch(setNotificationPage(false));
                }}
              >
                POS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/kitchen"}
                className={`price-nav-link ${
                  activeTab === "ORDER STATUS" ? "active relative z-[500]" : ""
                }`}
                style={{
                  padding:
                    activeTab === "ORDER STATUS" ? "14px 120px" : "14px 70px", // Adjust padding based on the active state
                }}
                onClick={() => handleTabClick("ORDER STATUS")}
              >
                KITCHEN
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-[15px]">
        <div className=" flex items-center space-x-[10px]">
          <div
            className="w-[30px] h-[30px] rounded-md bg-primeryFirst relative flex items-center justify-center cursor-pointer border border-primeryFirst hover:border-black "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute top-[-5px] right-[-5px] w-[15px] h-[15px] text-[12px] rounded-full bg-yellow-300 flex items-center justify-center">
              3
            </div>
            <img
              src="/public/images/notification_6917071.svg"
              alt=""
              className="w-[25px]"
            />

            {isOpen && (
              <div
                className="absolute w-[350px] h-auto bg-[#736E6E] z-[2000] rounded-2xl border-[2px] top-8 right-0 px-2 py-6"
                style={{ boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.3)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-3">
                  <NotificationBox
                    setOpen={setWaiterPopup}
                    type={"call-waiter"}
                    time={"01:18:30 pm"}
                    table={"table-5"}
                    customerName={"Sahad"}
                  />
                  <NotificationBox
                    setOpen={setWaiterPopup}
                    New={true}
                    type={"pickup"}
                    time={"01:18:30 pm"}
                    customerName={"Sahad"}
                  />
                  <NotificationBox
                    setOpen={setWaiterPopup}
                    reminder={true}
                    type={"pickup"}
                    time={"01:18:30 pm"}
                    customerName={"Sahad"}
                  />
                </div>
                <div className="flex justify-center pt-8">
                  <button
                    onClick={() => {
                      dispatch(setNotificationPage(true));
                      setIsOpen(false);
                      navigate("/");
                    }}
                    className="uppercase text-white text-sm bg-primeryFirst hover:bg-black active:bg-transparent px-4 py-[6px] rounded-[20px] border-2"
                  >
                    view all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-[30px] h-[30px] rounded-md bg-primeryFirst relative flex items-center justify-center">
            <div className="absolute top-[-5px] right-[-5px] w-[15px] h-[15px] text-[12px] rounded-full bg-yellow-300 flex items-center justify-center">
              3
            </div>
            <img
              src="/public/images/round-table_7049057.svg"
              alt=""
              className="w-[25px]"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 ">
          <div>
            <img
              src={Lock_screen_icon}
              alt="tv"
              width={50}
              onClick={() => setPinModalOpen(true)}
            />
          </div>
          <div className="text-center flex flex-col">
            <span className="text-[15px] -mb-[2px]">Jennifer</span>
            <span className="font-medium text-[17px] -mt-[2px]">WAITER</span>
          </div>
          <div>
            <img src="/icons8-user-100.png" alt="tv" width={50} />
          </div>
        </div>
      </div>
      <Sidebar toggle={sidebarToggle} setToggle={setSidebarToggle} />

      {waiterPopup && (
        <CallWaiter open={waiterPopup} setOpen={setWaiterPopup} />
      )}
    </div>
  );
};

export default Navbar;
