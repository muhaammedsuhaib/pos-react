import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const loginRequestFromToken = createAsyncThunk(
  'login/user-logn-from-token',
  async (data) => {
    // console.log(data, 'data');
    try {
      const response = await axios.post(base_url + '/auth', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  });

export const checkSupervisorPassword = createAsyncThunk(
  'login/check-supervisor-password',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/check-supervisor-password', data, {
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