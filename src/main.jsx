import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import DineInItemsPage from "./pages/DineInItemsPage.jsx";

import KitchenPage from "./pages/kitchen/KitchenPage.jsx";
import Auth from './pages/auth/auth.jsx'
import PettyCash from './pages/petty-cash/PettyCash.jsx'
import Expenses from './pages/expense/Expenses.jsx'
import { Provider } from "react-redux";
import store from "./app/store.js";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store as mainStore } from './reducer/store.js'
import PosLayout from "./pages/layout/PosLayout.jsx";
import Notifications from "./pages/notification/Notifications.jsx";
import DashboardPage from "./pages/dashboardLayout/DashboardPage.jsx";
import PosDayClose from "./pages/pos-day-close/PosDayClose.jsx";
import SidebarPage from "./pages/sidebarPages/SidebarPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        // element: <AllOrdersPage />,
        element: <PosLayout />
      },
      {
        path: "/dine-in-items",
        element: <DineInItemsPage />,
      },
      
     
      {
        path: "/kitchen",
        element: <KitchenPage />,
      },

      {
        path: '/auth/:token/:redirect',
        element: <Auth />,
      },
      {
        path: '/petty-cash',
        element: <PettyCash />,
      },
      {
        path: '/expense',
        element: <Expenses />,
      },
      {
        path: '/notification',
        element: <Notifications />,
      },
      {
        path:'/dashboard',
        element:<DashboardPage />
      },
      {
        path:'/pos/:pagename',
        element:<SidebarPage />
      }


    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={mainStore}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
