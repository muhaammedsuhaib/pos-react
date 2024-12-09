import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';
const createInitialState = (message = 'Not Loaded', loading = false) => ({
  data: {},
  status: false,
  message,
  loading,
});
const initialState = {
  expenses: createInitialState(),
  deleteExpenses: createInitialState(),
  saveExepnse: createInitialState(),
  unpaidInvoice: createInitialState(),
  pendingInvoices: createInitialState(),
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    clearSaveExpenses: (state) => {
      const saveExepnse = createInitialState();
      return { ...state, saveExepnse: saveExepnse };
    },
    clearAllExepenses: (state) => {
      return { ...state, ...initialState };
    },
    clearDeleteExpenses: (state) => {
      const deleteExpenses = createInitialState();
      return { ...state, deleteExpenses: deleteExpenses };
    },
    clearPendingInvoices: (state) => {
      const pendingInvoices = createInitialState();
      return { ...state, pendingInvoices: pendingInvoices };
    },
    addNewExpense: (state, action) => {
      return { ...state, expenses: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actions.listExpense.fulfilled, (state, action) => {
        const expenses = action.payload;
        return { ...state, expenses: { ...expenses, loading: false } };
      })
      .addCase(actions.listExpense.pending, (state) => {
        return { ...state, expenses: { ...state.expenses, loading: true } };
      })
      .addCase(actions.listExpense.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          expenses: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.saveExpense.fulfilled, (state, action) => {
        const saveExepnse = action.payload;
        return { ...state, saveExepnse: { ...saveExepnse, loading: false } };
      })
      .addCase(actions.saveExpense.pending, (state) => {
        return {
          ...state,
          saveExepnse: {
            ...state.saveExepnse,
            loading: true,
          }
        };
      })
      .addCase(actions.saveExpense.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          saveExepnse: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.listUnpaidExpenses.fulfilled, (state, action) => {
        const unpaidInvoice = action.payload;
        return { ...state, unpaidInvoice: { ...unpaidInvoice, loading: false } };
      })
      .addCase(actions.listUnpaidExpenses.pending, (state) => {
        return {
          ...state,
          unpaidInvoice: {
            ...state.unpaidInvoice,
            loading: true,
          }
        };
      })
      .addCase(actions.listUnpaidExpenses.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          unpaidInvoice: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.deleteExpense.fulfilled, (state, action) => {
        const deleteExpenses = action.payload;
        return { ...state, deleteExpenses: { ...deleteExpenses, loading: false } };
      })
      .addCase(actions.deleteExpense.pending, (state) => {
        return {
          ...state,
          deleteExpenses: {
            ...state.deleteExpenses,
            loading: true,
          }
        };
      })
      .addCase(actions.deleteExpense.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          deleteExpenses: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.savePendingInvoice.fulfilled, (state, action) => {
        const pendingInvoices = action.payload;
        return { ...state, pendingInvoices: { ...pendingInvoices, loading: false } };
      })
      .addCase(actions.savePendingInvoice.pending, (state) => {
        return {
          ...state,
          pendingInvoices: {
            ...state.pendingInvoices,
            loading: true,
          }
        };
      })
      .addCase(actions.savePendingInvoice.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          pendingInvoices: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });
  },
});

export default expenseSlice.reducer;
export const expensesActions = expenseSlice.actions;

export const selectExpenses = (state) => state.expenses.expenses;
export const selectSaveExpenses = (state) => state.expenses.saveExepnse;
export const selectUnpaidInvoices = (state) => state.expenses.unpaidInvoice;
export const selectDeleteExpense = (state) => state.expenses.deleteExpenses;
export const selectPendingInvoices = (state) => state.expenses.pendingInvoices;