import { createSlice } from '@reduxjs/toolkit';
import * as actions from './action';

const createInitialState = (message = 'Not Loaded', loading = false, data = {}) => ({
  data: data,
  status: false,
  message,
  loading,
});
const initialState = {
  customer_list: createInitialState(),
  customer_exists: createInitialState(),
  save_csutomer: createInitialState(),
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    clearCheckCustomer: (state) => {
      const customer_exists = createInitialState();
      return { ...state, customer_exists: customer_exists };
    },
    clearSaveCustomer: (state) => {
      const save_csutomer = createInitialState();
      return { ...state, save_csutomer: save_csutomer };
    },
    updateCustomerList: (state, action) => {
      const customer_list = action.payload;
      return { ...state, customer_list: customer_list };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.activeCustomerRequest.fulfilled, (state, action) => {
        const customer_list = action.payload;
        return { ...state, customer_list: { ...customer_list, loading: false } };
      })
      .addCase(actions.activeCustomerRequest.pending, (state) => {
        return { ...state, customer_list: { ...state.customer_list, loading: true } };
      })
      .addCase(actions.activeCustomerRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          customer_list: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.checkCustomerExistsRequest.fulfilled, (state, action) => {
        const customer_exists = action.payload;
        return { ...state, customer_exists: { ...customer_exists, loading: false } };
      })
      .addCase(actions.checkCustomerExistsRequest.pending, (state) => {
        return { ...state, customer_exists: { ...state.customer_exists, loading: true } };
      })
      .addCase(actions.checkCustomerExistsRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          customer_exists: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.saveCustomerRequest.fulfilled, (state, action) => {
        const save_csutomer = action.payload;
        return { ...state, save_csutomer: { ...save_csutomer, loading: false } };
      })
      .addCase(actions.saveCustomerRequest.pending, (state) => {
        return { ...state, save_csutomer: { ...state.save_csutomer, loading: true } };
      })
      .addCase(actions.saveCustomerRequest.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          save_csutomer: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });
  }
});

export default customerSlice.reducer;
export const customerActions = customerSlice.actions;

export const selectActiveCustomers = (state) => state?.customers?.customer_list;
export const selectCustomerExists = (state) => state?.customers?.customer_exists;
export const selectSaveCustomer = (state) => state?.customers?.save_csutomer;