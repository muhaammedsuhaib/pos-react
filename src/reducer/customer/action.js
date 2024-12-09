import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, getLoginToken } from "../../components/utils/utils";

export const activeCustomerRequest = createAsyncThunk(
  'customer/active-customer-request',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/customer/list', {
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

export const checkCustomerExistsRequest = createAsyncThunk(
  'customer/check-customer-exists-request',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/customer/check-customer-phone', data, {
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

export const saveCustomerRequest = createAsyncThunk(
  'customer/save-customer-request',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/customer/save', data, {
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