import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const runningOrders = createAsyncThunk(
  'orders/orders-running-orders',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/running-orders', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const orderTypeRequest = createAsyncThunk(
  'orders/orders-type-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/order-types', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const orderTypeDetailsRequest = createAsyncThunk(
  'orders/orders-type-details-request',
  async (data) => {
    try {
      const response = await axios.get(`${base_url}/orders/order-type-details${data.id ? `/${data.id}` : ''}`, {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const orderPaymentTypeRequest = createAsyncThunk(
  'orders/order-payment-type-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/payment-types', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const dineInTableRequest = createAsyncThunk(
  'orders/get-table-list-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/get-table-list', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const bookingTableRequest = createAsyncThunk(
  'orders/get-booking-table-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/booking-tables', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const dineInTableAreaRequest = createAsyncThunk(
  'orders/get-table-area-list-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/orders/get-table-area', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const restaurantUserRequest = createAsyncThunk(
  'orders/get-restaurant-user-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/staff/list', {
        params: data,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });


  export const saveOrder = createAsyncThunk(
    'orders/save-order-request',
    async (data) => {
      console.log('Data received in saveOrder:', data); // Log the incoming data
  
      try {
        if (!data || typeof data !== 'object') {
          console.error('Data is invalid or null');
          return false;
        }
  
        const response = await axios.post(base_url + '/orders/save-order', data, {
          headers: {
            'Authorization': `Bearer ${getLoginToken()}`,
          },
        });
  
        return response.data;
      } catch (error) {
        if (error.response) {
          return error.response.data;
        } else {
          return false;
        }
      }
    }
  );
  