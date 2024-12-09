import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Pin_modal from "./pages/Pin_modal";

function App() {
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      {location.pathname != '/expense' && location.pathname != '/petty-cash' ?
        <>
          <div className="w-full h-screen flex flex-col">
            <div className="w-full flex-shrink-0 h-[50px]">
              <Navbar setPinModalOpen={setPinModalOpen} />
            </div>
            <div className="flex-grow h-[calc(100vh - 50px)]">
              <Outlet />
            </div>
          </div>
          <Pin_modal openModal={pinModalOpen} setOpenModal={setPinModalOpen} />
        </>
        :
        <Outlet />
      }

    </>
  );
}

export default App;
