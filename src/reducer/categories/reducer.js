import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';  // Import from actions

export const createInitialState = (message = 'Not Loaded', loading = false) => ({
  data: {},
  status: false,
  message,
  loading,
});

const initialState = {
  listCategories: createInitialState(),
  listspecialCategories: createInitialState(),
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.listCategories.fulfilled, (state, action) => {
        const listCategories = action.payload;
        return { ...state, listCategories: { ...listCategories, loading: false } };
      })
      .addCase(actions.listCategories.pending, (state) => {
        return {
          ...state,
          listCategories: {
            ...state.listCategories,
            loading: true,
          }
        };
      })
      .addCase(actions.listCategories.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          listCategories: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });


      builder
      .addCase(actions.listspecialCategories.fulfilled, (state, action) => {
        const listspecialCategories = action.payload;
        return { ...state, listspecialCategories: { ...listspecialCategories, loading: false } };
      })
      .addCase(actions.listspecialCategories.pending, (state) => {
        return {
          ...state,
          listspecialCategories: {
            ...state.listspecialCategories,
            loading: true,
          }
        };
      })
      .addCase(actions.listspecialCategories.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          listspecialCategories: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

  },
});

export default categoriesSlice.reducer;
export const categoryActions = categoriesSlice.actions;

export const selectspecialCategoryList = (state) => state.categories.listspecialCategories;
export const selectCategoryList = (state) => state.categories.listCategories;
