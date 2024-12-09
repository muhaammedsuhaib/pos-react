import React, { useEffect, useState } from 'react';
import { alert, avatar, expense, kds, live, petty, pos, reserve, store, table, toggler } from '../utils/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from "../sidebar2/Sidebar";
import { selectUserToken } from '../../reducer/login/reducer';
function DashboardLayout({ heading, headingAction, children }) {
  const location = useLocation();
  const user = useSelector(selectUserToken);
  const [alertOpen, setAlertOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (location.pathname == '/expense' || location.pathname == '/petty-cash') {
      import('../../style.css');
    }
  }, [location])
  return (
    <React.Fragment>
      <div className='relative'>
        <nav className="bg-[#575757] px-2 xl:px-4 py-[2px]">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex justify-between leftMenuButton pt-1">
              <ul className="flex gap-3 md:gap-2 xl:gap-5">
                <li>
                  <a
                    href="https://pos.brixbull.ai/admin/dashboard"
                    className="flex flex-col justify-center items-center"
                    target='_blank'
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={live} alt="live img" />
                    </div>
                    <span className="text-white">live</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://pos.brixbull.ai/admin/dashboard"
                    // href='/'
                    className="flex flex-col justify-center items-center"
                    target='_blank'
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={pos} alt="pos img" />
                    </div>
                    <span className="text-white text-sm">pos</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/kitchen"
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={kds} alt="kds img" />
                    </div>
                    <span className="text-white text-sm">kds</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://pos.brixbull.ai/admin/dashboard"
                    className="flex flex-col justify-center items-center"
                    target='_blank'
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={reserve} alt="reserve img" />
                    </div>
                    <span className="text-white text-sm">reserve</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/expense"
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={expense} alt="expense img" />
                    </div>
                    <span className="text-white text-sm">expense</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/petty-cash"
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={petty} alt="petty img" />
                    </div>
                    <span className="text-white text-sm">petty</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://pos.brixbull.ai/admin/dashboard"
                    className="flex flex-col justify-center items-center"
                    target='_blank'
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={store} alt="store img" />
                    </div>
                    <span className="text-white text-sm">store</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="block md:hidden pl-8"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img
                src={toggler}
                alt="toggler"
                width={40}
                className={`transition-transform duration-500 ${sidebarOpen ? "rotate-0" : "rotate-180"
                  }`}
              />
            </div>
            {heading && (
              <div className="hidden md:block py-[6px] px-4 bg-[#F95433] rounded-[5px] uppercase mainMenuButton cursor-pointer" onClick={headingAction ? headingAction : null}>
                <a href="#" className="text-white font-semibold text-sm">
                  {heading}
                </a>
              </div>
            )}
            <div className="rightMenuButton pt-1">
              <ul className="flex gap-3 md:gap-2 xl:gap-5">
                <li>
                  <a
                    href="https://pos.brixbull.ai/admin/dashboard"
                    className="flex flex-col justify-center items-center"
                    target='_blank'
                  >
                    <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                      <img src={table} alt="table img" />
                    </div>
                    <span className="text-white">table</span>
                  </a>
                </li>
                <li>
                  <div
                    className="alert-btn"
                    onClick={() => setAlertOpen(!alertOpen)}
                  >
                    <a
                      href="#"
                      className="flex flex-col justify-center items-center "
                    >
                      <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                        <img src={alert} alt="pos img" />
                      </div>
                      <span className="text-white text-sm">alert</span>
                    </a>
                    {alertOpen && (
                      <div className="alert-dropdown text-sm border">
                        <ul className="divide-y">
                          <li className="notification-textbar">
                            <p className="text-black">You have 0 Notifications</p>
                          </li>
                          <li>
                            <a href="">0 New Orders Today</a>
                          </li>
                          <li>
                            <a href="">0 Package / Restaurant dine-in</a>
                          </li>
                          <li>
                            <a href="">You have 0 Reservations Today</a>
                          </li>
                          <li>
                            <a href="">0 Completed Orders</a>
                          </li>
                          <li>
                            <a href="">0 Cancelled Orders</a>
                          </li>
                          <li>
                            <a href="">0 Deleted Orders</a>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className="alert-notification">0</div>
                  </div>
                </li>
                <li>
                  <div className="freeze-btn">
                    <a
                      href=""
                      className="flex flex-col justify-center items-center"
                    >
                      <div className="h-[35px] w-[35px] p-1 bg-[#F95433] rounded-md border border-white">
                        <img src={kds} alt="kds img" />
                      </div>
                      <span className="text-white text-sm">freeze</span>
                    </a>
                    <div className="freeze-notification">0</div>
                  </div>
                </li>
                <li>
                  <div className="user-info-container">
                    <a href="#" onClick={() => setUserOpen(!userOpen)}>
                      {/* px-2 md:px-0 md:py-0 py-3 sm:p-3 */}
                      <div className="bg-[#FFFFFF] flex gap-2 items-center justify-center rounded-md py-2 px-2">
                        <div>
                          <img className='rounded-full' src={user && user.data && user.data.config && user.data.config.image ? user.data.config.image : avatar} alt="" width={20} />
                        </div>
                        <p className="text-[#ca1e1e] text-sm">{user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}</p>
                      </div>
                    </a>
                    {userOpen && (
                      <div className="user-info border">
                        <div className="user-info-box h-full relative">
                          <div className="flex flex-col justify-center items-center w-full h-[70%]">
                            <img
                              src={user && user.data && user.data.config && user.data.config.image ? user.data.config.image : avatar}
                              alt="user"
                              width={90}
                              height={90}
                              className="rounded-full"
                            />
                            <h3>{user && user.data && user.data.config && user.data.config.name ? user.data.config.name : ''}</h3>
                            <p className="text-[12px]">
                              {user && user.data && user.data.config && user.data.config.member_since ? user.data.config.member_since : ''}
                            </p>
                          </div>
                          <div className="bg-white py-1 text-center">
                            <p className="text-[12px]">
                              {user && user.data && user.data.config && user.data.config.last_login ? user.data.config.last_login : ''}
                            </p>
                          </div>
                          <div className="user-info-bottom px-2 flex justify-between w-full absolute bottom-2 ">
                            <a href="https://pos.brixbull.ai/admin/auth">Profile</a>
                            <a href="https://pos.brixbull.ai/logout">Logout</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={`block md:hidden sidebar h-full transition-transform duration-500 ease-in-out transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {sidebarOpen && <Sidebar />}
        </div>
        <section className="bg-[#F7F7F7]">
          {children}
        </section>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
export default DashboardLayout;