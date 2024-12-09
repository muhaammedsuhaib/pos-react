import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const listPettyCash = createAsyncThunk(
  'pettycash/list-petty-cash',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/list', {
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

export const listPettyCashCategory = createAsyncThunk(
  'pettycash/list-petty-cash-category',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/category', {
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

export const listAllPettyCashCategory = createAsyncThunk(
  'pettycash/list-all-petty-cash-category',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/list-category', {
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

export const savePettyCashCategory = createAsyncThunk(
  'pettycash/save-petty-cash-category',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/petty-cash/save-category', data, {
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

export const savePettyCash = createAsyncThunk(
  'pettycash/save-petty-cash',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/petty-cash/save', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
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

export const changePettyCashCategoryStatus = createAsyncThunk(
  'pettycash/change-petty-cash-category-status',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/petty-cash/change-category-status', data, {
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
export const changeVendorStatus = createAsyncThunk(
  'pettycash/change-vendor-status',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/petty-cash/change-vendor-status', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const getPettyCashLastInHand = createAsyncThunk(
  'pettycash/get-petty-cash-last-in-hand',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/last-cash-in-hand', {
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

export const getPettyCashPaibyList = createAsyncThunk(
  'pettycash/get-petty-cash-paid-by-list',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/get-paid-by-user', {
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

export const getVendors = createAsyncThunk(
  'pettycash/get-vendors',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/get-vendors', {
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

export const getUnsettledVendors = createAsyncThunk(
  'pettycash/get-unsettled-vendors',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/get-unsettled-vendors', {
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

export const listVendors = createAsyncThunk(
  'pettycash/list-vendors',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/petty-cash/list-vendors', {
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

export const savePaymentVendor = createAsyncThunk(
  'pettycash/save-payment-vendor',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/petty-cash/save-vendor', data, {
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