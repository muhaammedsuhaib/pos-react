import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order_history: false,
  kitchen_detailed_view: false,
  kitchen_search_view: false,
  pos_page_type: "",
  notification_page: false,
};

export const globalSlice = createSlice({
  name: "order_history",
  initialState,
  reducers: {
    setOpenHistory: (state, action) => {
      state.order_history = action.payload;
    },
    setKitchenDetailed: (state, action) => {
      state.kitchen_detailed_view = action.payload;
    },
    setKitchenSerachView: (state, action) => {
      state.kitchen_search_view = action.payload;
    },

    setPageType: (state, action) => {
      state.pos_page_type = action.payload;
    },
    setNotificationPage: (state, action) => {
      state.notification_page = action.payload;
    },
  },
});

export const {
  setOpenHistory,
  setKitchenDetailed,
  setKitchenSerachView,
  setPageType,
  setNotificationPage,
} = globalSlice.actions;
export default globalSlice.reducer;
