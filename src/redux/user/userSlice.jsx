import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order_history: false,
  kitchen_detailed_view: false,
  kitchen_search_view: false
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
    }
  },
});

export const { setOpenHistory, setKitchenDetailed, setKitchenSerachView } =
  globalSlice.actions;
export default globalSlice.reducer;
