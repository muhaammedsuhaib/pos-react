import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const listItems = createAsyncThunk(
  'items/itemlist',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/items/list`, {
        params,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getLoginToken()}`,
        }
      });
      return response.data; // return the response if successful
    } catch (error) {
      // Check if the error response is available
      if (error.response) {
        return rejectWithValue(error.response.data); // use rejectWithValue for error handling
      } else {
        return rejectWithValue('An unexpected error occurred.');
      }
    }
  }
);


export const changeItemStatus = createAsyncThunk(
  'items/change-item-status',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/items/change-item-status', data, {
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
