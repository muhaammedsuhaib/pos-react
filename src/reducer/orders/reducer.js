import { createSlice } from '@reduxjs/toolkit';
import * as actions from './action';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isToday);

const createInitialState = (message = 'Not Loaded', loading = false, data = {}) => ({
  data: data,
  status: false,
  message,
  loading,
});
const initialState = {
  saveOrders: createInitialState(),
  savedOrderDetails: createInitialState(),
  order_list: createInitialState(),
  order_types: createInitialState(),
  order_type_details: createInitialState(),
  table_list: createInitialState(),
  staff_list: createInitialState(),
  booking_table_list: createInitialState(),
  table_area: createInitialState(),
  payment_types: createInitialState(),
  order_view: createInitialState(),
  order_area_filter: createInitialState(),
  order_filter: createInitialState('Not Loaded', false, { orderDate: dayjs().format('YYYY-MM-DD') }),
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    clearSaveOrders: (state) => {
      const saveOrders = createInitialState();
      return { ...state, saveOrders: saveOrders };
    },
    clearOrderList: (state) => {
      const order_list = createInitialState();
      return { ...state, order_list: order_list };
    },
    setOrderView: (state, action) => {
      const order_view = createInitialState();
      return { ...state, order_view: { ...order_view, data: action.payload } };
    },
    setOrderAreaFilter: (state, action) => {
      const order_area_filter = createInitialState();
      return { ...state, order_area_filter: { ...order_area_filter, data: action.payload } };
    },
    setOrderFilter: (state, action) => {
      const order_filter = createInitialState('Not Loaded', false, { date: dayjs().format('YYYY-MM-DD') });
      return { ...state, order_filter: { ...order_filter, data: action.payload } };
    },
    addNewOrder: (state, action) => {
      return { ...state, order_list: action.payload };
    },
    // Action to set saved order details
    setSavedOrderDetails: (state, action) => {
      return { ...state, savedOrderDetails: { data: action.payload, status: true, message: 'Order details saved' } };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actions.runningOrders.fulfilled, (state, action) => {
        const order_list = action.payload;
        return { ...state, order_list: { ...order_list, loading: false } };
      })
      .addCase(actions.runningOrders.pending, (state) => {
        return { ...state, order_list: { ...state.order_list, loading: true } };
      })
      .addCase(actions.runningOrders.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          order_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.orderTypeRequest.fulfilled, (state, action) => {
        const order_types = action.payload;
        return { ...state, order_types: { ...order_types, loading: false } };
      })
      .addCase(actions.orderTypeRequest.pending, (state) => {
        return { ...state, order_types: { ...state.order_types, loading: true } };
      })
      .addCase(actions.orderTypeRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          order_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.dineInTableRequest.fulfilled, (state, action) => {
        const table_list = action.payload;
        return { ...state, table_list: { ...table_list, loading: false } };
      })
      .addCase(actions.dineInTableRequest.pending, (state) => {
        return { ...state, table_list: { ...state.table_list, loading: true } };
      })
      .addCase(actions.dineInTableRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          table_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.orderPaymentTypeRequest.fulfilled, (state, action) => {
        const payment_types = action.payload;
        return { ...state, payment_types: { ...payment_types, loading: false } };
      })
      .addCase(actions.orderPaymentTypeRequest.pending, (state) => {
        return { ...state, payment_types: { ...state.payment_types, loading: true } };
      })
      .addCase(actions.orderPaymentTypeRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          payment_types: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.dineInTableAreaRequest.fulfilled, (state, action) => {
        const table_area = action.payload;
        return { ...state, table_area: { ...table_area, loading: false } };
      })
      .addCase(actions.dineInTableAreaRequest.pending, (state) => {
        return { ...state, table_area: { ...state.table_area, loading: true } };
      })
      .addCase(actions.dineInTableAreaRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          table_area: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.orderTypeDetailsRequest.fulfilled, (state, action) => {
        const order_type_details = action.payload;
        return { ...state, order_type_details: { ...order_type_details, loading: false } };
      })
      .addCase(actions.orderTypeDetailsRequest.pending, (state) => {
        return { ...state, order_type_details: { ...state.order_type_details, loading: true } };
      })
      .addCase(actions.orderTypeDetailsRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          order_type_details: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.bookingTableRequest.fulfilled, (state, action) => {
        const booking_table_list = action.payload;
        return { ...state, booking_table_list: { ...booking_table_list, loading: false } };
      })
      .addCase(actions.bookingTableRequest.pending, (state) => {
        return { ...state, booking_table_list: { ...state.booking_table_list, loading: true } };
      })
      .addCase(actions.bookingTableRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          booking_table_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.restaurantUserRequest.fulfilled, (state, action) => {
        const staff_list = action.payload;
        return { ...state, staff_list: { ...staff_list, loading: false } };
      })
      .addCase(actions.restaurantUserRequest.pending, (state) => {
        return { ...state, staff_list: { ...state.staff_list, loading: true } };
      })
      .addCase(actions.restaurantUserRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          staff_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

      builder
      .addCase(actions.saveOrder.fulfilled, (state, action) => {
        const saveOrders = action.payload;
        state.saveOrders = { ...saveOrders, loading: false };
        state.savedOrderDetails = { data: saveOrders.data, status: true, message: 'Order details saved' };
      })
      .addCase(actions.saveOrder.pending, (state) => {
        return {
          ...state,
          saveOrders: {
            ...state.saveOrders,
            loading: true,
          }
        };
      })
      .addCase(actions.saveOrder.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          saveOrders: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });
  },
});

export default ordersSlice.reducer;
export const ordersActions = ordersSlice.actions;

export const selectRunningOrders = (state) => state?.orders?.order_list;
export const selectOrderTypes = (state) => state?.orders?.order_types;
export const selectOrderTables = (state) => state?.orders?.table_list;
export const selectOrderBookingTables = (state) => state?.orders?.booking_table_list;
export const selectOrderTableArea = (state) => state?.orders?.table_area;
export const selectOrderPaymentTypes = (state) => state?.orders?.payment_types;
export const selectOrderListView = (state) => state?.orders?.order_view;
export const selectOrderFilter = (state) => state?.orders?.order_filter;
export const selectOrderAreaFilter = (state) => state?.orders?.order_area_filter;
export const selectOrderTypeDetails = (state) => state?.orders?.order_type_details;
export const selectStaffDetails = (state) => state?.orders?.staff_list;
export const selectSaveOrder = (state) => state?.orders?.saveOrders;
export const selectSavedOrderDetails = (state) => state?.orders?.savedOrderDetails;