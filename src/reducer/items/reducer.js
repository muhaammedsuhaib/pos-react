import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';  // Import from actions

export const createInitialState = (message = 'Not Loaded', loading = false) => ({
  data: {},
  status: false,
  message,
  loading,
});

const initialState = {
  listItems: createInitialState(),
  setItemStatus: createInitialState(),
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.listItems.fulfilled, (state, action) => {
        const listItems = action.payload;
        return { ...state, listItems: { ...listItems, loading: false } };
      })
      .addCase(actions.listItems.pending, (state) => {
        return {
          ...state,
          listItems: {
            ...state.listItems,
            loading: true,
          }
        };
      })
      .addCase(actions.listItems.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          listItems: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

      builder
      .addCase(actions.changeItemStatus.fulfilled, (state, action) => {
        const setItemStatus = action.payload;
        return { ...state, setItemStatus: { ...setItemStatus, loading: false } };
      })
      .addCase(actions.changeItemStatus.pending, (state) => {
        return {
          ...state,
          setItemStatus: {
            ...state.setItemStatus,
            loading: true,
          }
        };
      })
      .addCase(actions.changeItemStatus.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          setItemStatus: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          },
        };
      });

  },
});

export default itemsSlice.reducer;
export const categoryActions = itemsSlice.actions;

export const selectItemList = (state) => state.items.listItems;
export const selectChangeItemStatus = (state) => state.items.setItemStatus;
