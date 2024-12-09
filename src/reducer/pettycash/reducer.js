import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';
export const createInitialState = (message = 'Not Loaded', loading = false) => ({
  data: {},
  status: false,
  message,
  loading,
});
const initialState = {
  pettycash: createInitialState(),
  pettycashCategory: createInitialState(),
  allPettycashCategory: createInitialState(),
  pettycashCategoryStatus: createInitialState(),
  savePettycashCategory: createInitialState(),
  lastInHand: createInitialState(),
  paidByList: createInitialState(),
  savePetty: createInitialState(),
  vendors: createInitialState(),
  unsettledVendors: createInitialState(),
  listVendors: createInitialState(),
  savePaymentVendors: createInitialState(),
  setVendorStatus: createInitialState(),
};

const pettycashSlice = createSlice({
  name: 'pettycash',
  initialState,
  reducers: {
    clearSavePettyCash: (state) => {
      const savePetty = createInitialState();
      return { ...state, savePetty: savePetty };
    },
    clearAllPettyCash: (state) => {
      return { ...state, ...initialState };
    },
    clearSavePettyCashCategory: (state) => {
      const savePettycashCategory = createInitialState();
      return { ...state, savePettycashCategory: savePettycashCategory };
    },
    clearSavePaymentVendors: (state) => {
      const savePaymentVendors = createInitialState();
      return { ...state, savePaymentVendors: savePaymentVendors };
    },
    clearChangeVendorStatus: (state) => {
      const setVendorStatus = createInitialState();
      return { ...state, setVendorStatus: setVendorStatus };
    },
    clearChangeCategoryStatus: (state) => {
      const pettycashCategoryStatus = createInitialState();
      return { ...state, pettycashCategoryStatus: pettycashCategoryStatus };
    },
    addNewPettycash: (state, action) => {
      return { ...state, pettycash: action.payload };
    },
    addNewPaymentVendor: (state, action) => {
      return { ...state, vendors: action.payload };
    },
    addNewCategory: (state, action) => {
      return { ...state, vendors: action.payload };
    },
    changeVendorStatus: (state, action) => {
      return { ...state, listVendors: action.payload };
    },
    changeCategoryStatus: (state, action) => {
      return { ...state, allPettycashCategory: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actions.listPettyCash.fulfilled, (state, action) => {
        const pettycash = action.payload;
        return { ...state, pettycash: { ...pettycash, loading: false } };
      })
      .addCase(actions.listPettyCash.pending, (state) => {
        return { ...state, pettycash: { ...state.pettycash, loading: true } };
      })
      .addCase(actions.listPettyCash.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          pettycash: {
            data: error,
            status: false,
            message: 'Loaded with error or rejected',
            loading: false,
          }
        };
      });

    builder
      .addCase(actions.listPettyCashCategory.fulfilled, (state, action) => {
        const pettycashCategory = action.payload;
        return { ...state, pettycashCategory: { ...pettycashCategory, loading: false } };
      })
      .addCase(actions.listPettyCashCategory.pending, (state, action) => {
        const pettycashCategory = state.pettycashCategory;
        return { ...state, pettycashCategory: { ...pettycashCategory, loading: true } };
      })
      .addCase(actions.listPettyCashCategory.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          pettycashCategory: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.listAllPettyCashCategory.fulfilled, (state, action) => {
        const allPettycashCategory = action.payload;
        return { ...state, allPettycashCategory: { ...allPettycashCategory, loading: false } };
      })
      .addCase(actions.listAllPettyCashCategory.pending, (state) => {
        return {
          ...state,
          allPettycashCategory: {
            ...state.allPettycashCategory,
            loading: true,
          }
        };
      })
      .addCase(actions.listAllPettyCashCategory.rejected, (state, action) => {
        const error = action?.payload;
        return {
          ...state,
          allPettycashCategory: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.changePettyCashCategoryStatus.fulfilled, (state, action) => {
        const pettycashCategoryStatus = action.payload;
        return { ...state, pettycashCategoryStatus: { ...pettycashCategoryStatus, loading: false } };
      })
      .addCase(actions.changePettyCashCategoryStatus.pending, (state) => {
        return {
          ...state,
          pettycashCategoryStatus: {
            ...state.pettycashCategoryStatus,
            loading: true,
          }
        };
      })
      .addCase(actions.changePettyCashCategoryStatus.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          pettycashCategoryStatus: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.savePettyCashCategory.fulfilled, (state, action) => {
        const savePettycashCategory = action.payload;
        return { ...state, savePettycashCategory: { ...savePettycashCategory, loading: false } };
      })
      .addCase(actions.savePettyCashCategory.pending, (state) => {
        return {
          ...state,
          savePettycashCategory: {
            ...state.savePettycashCategory,
            loading: true,
          }
        };
      })
      .addCase(actions.savePettyCashCategory.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          savePettycashCategory: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.getPettyCashLastInHand.fulfilled, (state, action) => {
        const lastInHand = action.payload;
        return { ...state, lastInHand: { ...lastInHand, loading: false } };
      })
      .addCase(actions.getPettyCashLastInHand.pending, (state) => {
        return {
          ...state,
          lastInHand: {
            ...state.lastInHand,
            loading: true,
          }
        };
      })
      .addCase(actions.getPettyCashLastInHand.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          lastInHand: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.getPettyCashPaibyList.fulfilled, (state, action) => {
        const paidByList = action.payload;
        return { ...state, paidByList: { ...paidByList, loading: false } };
      })
      .addCase(actions.getPettyCashPaibyList.pending, (state) => {
        return {
          ...state,
          paidByList: {
            ...state.paidByList,
            loading: true,
          }
        };
      })
      .addCase(actions.getPettyCashPaibyList.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          paidByList: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.savePettyCash.fulfilled, (state, action) => {
        const savePetty = action.payload;
        return { ...state, savePetty: { ...savePetty, loading: false } };
      })
      .addCase(actions.savePettyCash.pending, (state) => {
        return {
          ...state,
          savePetty: {
            ...state.savePetty,
            loading: true,
          }
        };
      })
      .addCase(actions.savePettyCash.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          savePetty: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.getVendors.fulfilled, (state, action) => {
        const vendors = action.payload;
        return { ...state, vendors: { ...vendors, loading: false } };
      })
      .addCase(actions.getVendors.pending, (state) => {
        return {
          ...state,
          vendors: {
            ...state.vendors,
            loading: true,
          }
        };
      })
      .addCase(actions.getVendors.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          vendors: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.listVendors.fulfilled, (state, action) => {
        const listVendors = action.payload;
        return { ...state, listVendors: { ...listVendors, loading: false } };
      })
      .addCase(actions.listVendors.pending, (state) => {
        return {
          ...state,
          listVendors: {
            ...state.listVendors,
            loading: true,
          }
        };
      })
      .addCase(actions.listVendors.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          listVendors: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

      builder
      .addCase(actions.getUnsettledVendors.fulfilled, (state, action) => {
        const unsettledVendors = action.payload;
        return { ...state, unsettledVendors: { ...unsettledVendors, loading: false } };
      })
      .addCase(actions.getUnsettledVendors.pending, (state) => {
        return {
          ...state,
          unsettledVendors: {
            ...state.unsettledVendors,
            loading: true,
          }
        };
      })
      .addCase(actions.getUnsettledVendors.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          unsettledVendors: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.savePaymentVendor.fulfilled, (state, action) => {
        const savePaymentVendors = action.payload;
        return { ...state, savePaymentVendors: { ...savePaymentVendors, loading: false } };
      })
      .addCase(actions.savePaymentVendor.pending, (state) => {
        return {
          ...state,
          savePaymentVendors: {
            ...state.savePaymentVendors,
            loading: true,
          }
        };
      })
      .addCase(actions.savePaymentVendor.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          savePaymentVendors: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          }
        };
      });

    builder
      .addCase(actions.changeVendorStatus.fulfilled, (state, action) => {
        const setVendorStatus = action.payload;
        return { ...state, setVendorStatus: { ...setVendorStatus, loading: false } };
      })
      .addCase(actions.changeVendorStatus.pending, (state) => {
        return {
          ...state,
          setVendorStatus: {
            ...state.setVendorStatus,
            loading: true,
          }
        };
      })
      .addCase(actions.changeVendorStatus.rejected, (state, action) => {
        const error = action.payload;
        return {
          ...state,
          setVendorStatus: {
            data: error,
            status: false,
            loading: false,
            message: 'Loaded with error or rejected'
          },
        };
      });
  },
});

export default pettycashSlice.reducer;
export const pettycashActions = pettycashSlice.actions;

export const selectPettyCash = (state) => state.pettycash.pettycash;
export const selectPettyCashCategory = (state) => state.pettycash.pettycashCategory;
export const selectAllPettyCashCategory = (state) => state.pettycash.allPettycashCategory;
export const selectPettyCashCategoryStatus = (state) => state.pettycash.pettycashCategoryStatus;
export const selectSavePettyCashCategory = (state) => state.pettycash.savePettycashCategory;
export const selectPettyCashLastInHand = (state) => state.pettycash.lastInHand;
export const selectPettyCashPaibyList = (state) => state.pettycash.paidByList;
export const selectSavePettyCash = (state) => state.pettycash.savePetty;
export const selectVendors = (state) => state.pettycash.vendors;
export const selectVendorList = (state) => state.pettycash.listVendors;
export const selectUnsettledVendorList = (state) => state.pettycash.unsettledVendors;
export const selectSavePaymentVendor = (state) => state.pettycash.savePaymentVendors;
export const selectChangeVendorStatus = (state) => state.pettycash.setVendorStatus;