import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

export const listExpense = createAsyncThunk(
  'expenses/list-expenses',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/expense/list', {
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

export const saveExpense = createAsyncThunk(
  'expenses/save-expense',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/expense/save', data, {
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

export const savePendingInvoice = createAsyncThunk(
  'expenses/save-pedning-invoice',
  async (data) => {
    try {
      const response = await axios.post(base_url + '/expense/save-pending', data, {
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

export const deleteExpense = createAsyncThunk(
  'expenses/delete-expense',
  async (data) => {
    try {
      const response = await axios.delete(base_url + '/expense/delete', {
        params: data,
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

export const listUnpaidExpenses = createAsyncThunk(
  'expenses/list-unpaid-expenses',
  async (data) => {
    try {
      const response = await axios.get(base_url + '/expense/get-unpaid-invoice', {
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