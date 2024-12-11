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
  OrderDiscounts: createInitialState(),
  ItemDiscounts: createInitialState(),
  OrdersCancelled: createInitialState(),
  CustomerCredit: createInitialState(),
  ItemsCancelled: createInitialState(),
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //sales trend
    builder
      .addCase(actions.listAllSalesTrend.fulfilled, (state, action) => {
        const SalesTrend = action.payload;
        return { ...state, SalesTrend: { ...SalesTrend, loading: false } };
      })
      .addCase(actions.listAllSalesTrend.pending, (state) => {
        return {
          ...state,
          SalesTrend: {
            ...state.SalesTrend,
            loading: true,
          },
        };
      })
      .addCase(actions.listAllSalesTrend.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          SalesTrend: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Sales Trend
    // builder
    //   .addCase(actions.listAllSalesTrend.pending, (state) => {
    //     state.SalesTrend.loading = true;
    //     state.SalesTrend.message = "Loading...";
    //   })
    //   .addCase(actions.listAllSalesTrend.fulfilled, (state, action) => {
    //     state.SalesTrend.loading = false;
    //     state.SalesTrend.status = true;
    //     state.SalesTrend.data = action.payload;
    //     state.SalesTrend.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listAllSalesTrend.rejected, (state) => {
    //     state.SalesTrend.loading = false;
    //     state.SalesTrend.status = false;
    //     state.SalesTrend.message = "Failed to Load";
    //   });

    // sales summery

    builder
      .addCase(actions.listOverallSalesSummary.fulfilled, (state, action) => {
        const SalesSummary = action.payload;
        return { ...state, SalesSummary: { ...SalesSummary, loading: false } };
      })
      .addCase(actions.listOverallSalesSummary.pending, (state) => {
        return {
          ...state,
          SalesSummary: {
            ...state.SalesSummary,
            loading: true,
          },
        };
      })
      .addCase(actions.listOverallSalesSummary.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          SalesSummary: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Sales Summary
    // builder
    //   .addCase(actions.listOverallSalesSummary.pending, (state) => {
    //     state.SalesSummary.loading = true;
    //     state.SalesSummary.message = "Loading...";
    //   })
    //   .addCase(actions.listOverallSalesSummary.fulfilled, (state, action) => {
    //     state.SalesSummary.loading = false;
    //     state.SalesSummary.status = true;
    //     state.SalesSummary.data = action.payload;
    //     state.SalesSummary.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listOverallSalesSummary.rejected, (state) => {
    //     state.SalesSummary.loading = false;
    //     state.SalesSummary.status = false;
    //     state.SalesSummary.message = "Failed to Load";
    //   });

    // payment summary

    builder
      .addCase(actions.listPaymentSummary.fulfilled, (state, action) => {
        const SalesPaymentSummary = action.payload;
        return {
          ...state,
          SalesPaymentSummary: { ...SalesPaymentSummary, loading: false },
        };
      })
      .addCase(actions.listPaymentSummary.pending, (state) => {
        return {
          ...state,
          SalesPaymentSummary: {
            ...state.SalesPaymentSummary,
            loading: true,
          },
        };
      })
      .addCase(actions.listPaymentSummary.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          SalesPaymentSummary: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });
    // Payment Summary
    // builder
    //   .addCase(actions.listPaymentSummary.pending, (state) => {
    //     state.SalesPaymentSummary.loading = true;
    //     state.SalesPaymentSummary.message = "Loading...";
    //   })
    //   .addCase(actions.listPaymentSummary.fulfilled, (state, action) => {
    //     state.SalesPaymentSummary.loading = false;
    //     state.SalesPaymentSummary.status = true;
    //     state.SalesPaymentSummary.data = action.payload;
    //     state.SalesPaymentSummary.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listPaymentSummary.rejected, (state) => {
    //     state.SalesPaymentSummary.loading = false;
    //     state.SalesPaymentSummary.status = false;
    //     state.SalesPaymentSummary.message = "Failed to Load";
    //   });

    // Order Summary
    builder
      .addCase(actions.listOrderSummary.fulfilled, (state, action) => {
        const OrderSummary = action.payload;
        return { ...state, OrderSummary: { ...OrderSummary, loading: false } };
      })
      .addCase(actions.listOrderSummary.pending, (state) => {
        return {
          ...state,
          OrderSummary: {
            ...state.OrderSummary,
            loading: true,
          },
        };
      })
      .addCase(actions.listOrderSummary.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          OrderSummary: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Order Summary
    // builder
    //   .addCase(actions.listOrderSummary.pending, (state) => {
    //     state.OrderSummary.loading = true;
    //     state.OrderSummary.message = "Loading...";
    //   })
    //   .addCase(actions.listOrderSummary.fulfilled, (state, action) => {
    //     state.OrderSummary.loading = false;
    //     state.OrderSummary.status = true;
    //     state.OrderSummary.data = action.payload;
    //     state.OrderSummary.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listOrderSummary.rejected, (state) => {
    //     state.OrderSummary.loading = false;
    //     state.OrderSummary.status = false;
    //     state.OrderSummary.message = "Failed to Load";
    //   });

    // Extra Charges Summary

    builder
      .addCase(actions.listExtraChargesSummary.fulfilled, (state, action) => {
        const ExtraChargesSummary = action.payload;
        return {
          ...state,
          ExtraChargesSummary: { ...ExtraChargesSummary, loading: false },
        };
      })
      .addCase(actions.listExtraChargesSummary.pending, (state) => {
        return {
          ...state,
          ExtraChargesSummary: {
            ...state.ExtraChargesSummary,
            loading: true,
          },
        };
      })
      .addCase(actions.listExtraChargesSummary.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          OrderSummary: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Extra Charges Summary
    // builder
    //   .addCase(actions.listExtraChargesSummary.pending, (state) => {
    //     state.ExtraChargesSummary.loading = true;
    //     state.ExtraChargesSummary.message = "Loading...";
    //   })
    //   .addCase(actions.listExtraChargesSummary.fulfilled, (state, action) => {
    //     state.ExtraChargesSummary.loading = false;
    //     state.ExtraChargesSummary.status = true;
    //     state.ExtraChargesSummary.data = action.payload;
    //     state.ExtraChargesSummary.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listExtraChargesSummary.rejected, (state) => {
    //     state.ExtraChargesSummary.loading = false;
    //     state.ExtraChargesSummary.status = false;
    //     state.ExtraChargesSummary.message = "Failed to Load";
    //   });

    // Top sold items summary

    builder
      .addCase(actions.listTopSoldItems.fulfilled, (state, action) => {
        const TopSoldItems = action.payload;
        return {
          ...state,
          TopSoldItems: { ...TopSoldItems, loading: false },
        };
      })
      .addCase(actions.listTopSoldItems.pending, (state) => {
        return {
          ...state,
          TopSoldItems: {
            ...state.TopSoldItems,
            loading: true,
          },
        };
      })
      .addCase(actions.listTopSoldItems.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          TopSoldItems: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Top sold items summary
    // builder
    //   .addCase(actions.listTopSoldItems.pending, (state) => {
    //     state.TopSoldItems.loading = true;
    //     state.TopSoldItems.message = "Loading...";
    //   })
    //   .addCase(actions.listTopSoldItems.fulfilled, (state, action) => {
    //     state.TopSoldItems.loading = false;
    //     state.TopSoldItems.status = true;
    //     state.TopSoldItems.data = action.payload;
    //     state.TopSoldItems.message = "Loaded Successfully";
    //   })
    //   .addCase(actions.listTopSoldItems.rejected, (state) => {
    //     state.TopSoldItems.loading = false;
    //     state.TopSoldItems.status = false;
    //     state.TopSoldItems.message = "Failed to Load";
    //   });

    builder
      .addCase(actions.listOrderDiscounts.fulfilled, (state, action) => {
        const OrderDiscounts = action.payload;
        return {
          ...state,
          OrderDiscounts: { ...OrderDiscounts, loading: false },
        };
      })
      .addCase(actions.listOrderDiscounts.pending, (state) => {
        return {
          ...state,
          OrderDiscounts: {
            ...state.OrderDiscounts,
            loading: true,
          },
        };
      })
      .addCase(actions.listOrderDiscounts.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          OrderDiscounts: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    builder
      .addCase(actions.listItemDiscounts.fulfilled, (state, action) => {
        const ItemDiscounts = action.payload;
        return {
          ...state,
          ItemDiscounts: { ...ItemDiscounts, loading: false },
        };
      })
      .addCase(actions.listItemDiscounts.pending, (state) => {
        return {
          ...state,
          ItemDiscounts: {
            ...state.ItemDiscounts,
            loading: true,
          },
        };
      })
      .addCase(actions.listItemDiscounts.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          ItemDiscounts: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    builder
      .addCase(actions.listOrdersCancelled.fulfilled, (state, action) => {
        const OrdersCancelled = action.payload;
        return {
          ...state,
          OrdersCancelled: { ...OrdersCancelled, loading: false },
        };
      })
      .addCase(actions.listOrdersCancelled.pending, (state) => {
        return {
          ...state,
          OrdersCancelled: {
            ...state.OrdersCancelled,
            loading: true,
          },
        };
      })
      .addCase(actions.listOrdersCancelled.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          OrdersCancelled: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // Customer Credit

    builder
      .addCase(actions.listCustomerCredit.fulfilled, (state, action) => {
        const CustomerCredit = action.payload;
        return {
          ...state,
          CustomerCredit: { ...CustomerCredit, loading: false },
        };
      })
      .addCase(actions.listCustomerCredit.pending, (state) => {
        return {
          ...state,
          CustomerCredit: {
            ...state.CustomerCredit,
            loading: true,
          },
        };
      })
      .addCase(actions.listCustomerCredit.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          CustomerCredit: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
      });

    // items cancelled
    builder
      .addCase(actions.listItemCancelled.fulfilled, (state, action) => {
        const ItemsCancelled = action.payload;
        return {
          ...state,
          ItemsCancelled: { ...ItemsCancelled, loading: false },
        };
      })
      .addCase(actions.listItemCancelled.pending, (state) => {
        return {
          ...state,
          ItemsCancelled: {
            ...state.ItemsCancelled,
            loading: true,
          },
        };
      })
      .addCase(actions.listItemCancelled.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          ItemsCancelled: {
            data: error,
            status: false,
            loading: false,
            message: "Loaded with error or rejected",
          },
        };
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
export const selectTopSoldItems = (state) => state?.sales?.TopSoldItems;
export const selectOrderDiscounts = (state) => state?.sales?.OrderDiscounts;
export const selectItemDiscounts = (state) => state?.sales?.ItemDiscounts;
export const selectOrdersCancelled = (state) => state?.sales?.OrdersCancelled;
export const selectCustomerCredit = (state) => state?.sales?.CustomerCredit;
export const selectItemCancelled = (state) => state?.sales?.ItemsCancelled;
