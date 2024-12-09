import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const createInitialState = (
  message = "Not Loaded",
  loading = false
) => ({
  data: {},
  status: false,
  message,
  loading,
});

const initialState = {
  SalesTrend: createInitialState(),
  SalesSummary: createInitialState(),
  SalesPaymentSummary: createInitialState(),
  OrderSummary: createInitialState(),
  ExtraChargesSummary: createInitialState(),
  TopSoldItems: createInitialState(),
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Sales Trend
    builder
      .addCase(actions.listAllSalesTrend.pending, (state) => {
        state.SalesTrend.loading = true;
        state.SalesTrend.message = "Loading...";
      })
      .addCase(actions.listAllSalesTrend.fulfilled, (state, action) => {
        state.SalesTrend.loading = false;
        state.SalesTrend.status = true;
        state.SalesTrend.data = action.payload;
        state.SalesTrend.message = "Loaded Successfully";
      })
      .addCase(actions.listAllSalesTrend.rejected, (state) => {
        state.SalesTrend.loading = false;
        state.SalesTrend.status = false;
        state.SalesTrend.message = "Failed to Load";
      });

    // Sales Summary
    builder
      .addCase(actions.listOverallSalesSummary.pending, (state) => {
        state.SalesSummary.loading = true;
        state.SalesSummary.message = "Loading...";
      })
      .addCase(actions.listOverallSalesSummary.fulfilled, (state, action) => {
        state.SalesSummary.loading = false;
        state.SalesSummary.status = true;
        state.SalesSummary.data = action.payload;
        state.SalesSummary.message = "Loaded Successfully";
      })
      .addCase(actions.listOverallSalesSummary.rejected, (state) => {
        state.SalesSummary.loading = false;
        state.SalesSummary.status = false;
        state.SalesSummary.message = "Failed to Load";
      });

    // Payment Summary
    builder
      .addCase(actions.listPaymentSummary.pending, (state) => {
        state.SalesPaymentSummary.loading = true;
        state.SalesPaymentSummary.message = "Loading...";
      })
      .addCase(actions.listPaymentSummary.fulfilled, (state, action) => {
        state.SalesPaymentSummary.loading = false;
        state.SalesPaymentSummary.status = true;
        state.SalesPaymentSummary.data = action.payload;
        state.SalesPaymentSummary.message = "Loaded Successfully";
      })
      .addCase(actions.listPaymentSummary.rejected, (state) => {
        state.SalesPaymentSummary.loading = false;
        state.SalesPaymentSummary.status = false;
        state.SalesPaymentSummary.message = "Failed to Load";
      });

    // Order Summary
    builder
      .addCase(actions.listOrderSummary.pending, (state) => {
        state.OrderSummary.loading = true;
        state.OrderSummary.message = "Loading...";
      })
      .addCase(actions.listOrderSummary.fulfilled, (state, action) => {
        state.OrderSummary.loading = false;
        state.OrderSummary.status = true;
        state.OrderSummary.data = action.payload;
        state.OrderSummary.message = "Loaded Successfully";
      })
      .addCase(actions.listOrderSummary.rejected, (state) => {
        state.OrderSummary.loading = false;
        state.OrderSummary.status = false;
        state.OrderSummary.message = "Failed to Load";
      });

    // Extra Charges Summary
    builder
      .addCase(actions.listExtraChargesSummary.pending, (state) => {
        state.ExtraChargesSummary.loading = true;
        state.ExtraChargesSummary.message = "Loading...";
      })
      .addCase(actions.listExtraChargesSummary.fulfilled, (state, action) => {
        state.ExtraChargesSummary.loading = false;
        state.ExtraChargesSummary.status = true;
        state.ExtraChargesSummary.data = action.payload;
        state.ExtraChargesSummary.message = "Loaded Successfully";
      })
      .addCase(actions.listExtraChargesSummary.rejected, (state) => {
        state.ExtraChargesSummary.loading = false;
        state.ExtraChargesSummary.status = false;
        state.ExtraChargesSummary.message = "Failed to Load";
      });
    // Top sold items summary
    builder
      .addCase(actions.listTopSoldItems.pending, (state) => {
        state.TopSoldItems.loading = true;
        state.TopSoldItems.message = "Loading...";
      })
      .addCase(actions.listTopSoldItems.fulfilled, (state, action) => {
        state.TopSoldItems.loading = false;
        state.TopSoldItems.status = true;
        state.TopSoldItems.data = action.payload;
        state.TopSoldItems.message = "Loaded Successfully";
      })
      .addCase(actions.listTopSoldItems.rejected, (state) => {
        state.TopSoldItems.loading = false;
        state.TopSoldItems.status = false;
        state.TopSoldItems.message = "Failed to Load";
      });
  },
});

export default salesSlice.reducer;
export const selectSalesTrend = (state) => state.sales.SalesTrend;
export const selectSalesSummary = (state) => state?.sales?.SalesSummary;
export const selectSalesPaymentSummary = (state) =>
  state?.sales?.SalesPaymentSummary;
export const selectOrderSummary = (state) => state?.sales?.OrderSummary;
export const selectExtraChargesSummary = (state) =>
  state?.sales?.ExtraChargesSummary;
export const selectTopSoldItems = (state) => {console.log(state)};