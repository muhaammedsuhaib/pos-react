import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const listCategories = createAsyncThunk(
  'categories/listCategories',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/categories/list`, {
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



export const listspecialCategories = createAsyncThunk(
  'categories/specialCategories',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/categories/special-list`, {
        params: {
          ...params, // Existing params if any
          special_category: true, // Adding the special_category parameter
        },
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
