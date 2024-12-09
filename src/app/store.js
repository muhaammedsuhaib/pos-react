import { configureStore } from "@reduxjs/toolkit";
import orderHistoryReducer from "../redux/user/userSlice";

export const store = configureStore({
  reducer: {
    orderHistory: orderHistoryReducer,
  },
});

export default store;
