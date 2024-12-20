import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url, getLoginToken } from "../../components/utils/utils";
import axios from "axios";

// Helper to create the Axios config
const createAxiosConfig = (data, contentType = "application/json") => ({
  params: data,
  headers: {
    "Content-Type": contentType,
    Accept: "application/json",
    // Uncomment the line below to add Authorization token
    'Authorization': `Bearer ${getLoginToken()}`,
  },
});

export const listAllSalesTrend = createAsyncThunk(
  "sales/sales-trend",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/trends",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      if (error.response) {
        console.error(error.response);
        return error.response.data;
      } else {
        console.error("Unexpected error:", error);
        return false;
      }
    }
  }
);

export const listOverallSalesSummary = createAsyncThunk(
  "sales/summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listPaymentSummary = createAsyncThunk(
  "sales/payment-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/payment-summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listOrderSummary = createAsyncThunk(
  "sales/order-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/order-summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listExtraChargesSummary = createAsyncThunk(
  "sales/extra-charges-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/extra-charges-summary",
        createAxiosConfig(data, "multipart/form-data")
      );
      return response?.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listTopSoldItems = createAsyncThunk(
  "sales/top-sold-items-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/top-sold-items-summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching top sold items");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listOrderDiscounts = createAsyncThunk(
  "sales/order-discount-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/order-discount-summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching top sold items");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listItemDiscounts = createAsyncThunk(
  "sales/item-discounts-summary",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/item-discounts-summary",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching top sold items");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listOrdersCancelled = createAsyncThunk(
  "sales/orders-cancelled",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/orders-cancelled",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching order cancelled");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listCustomerCredit = createAsyncThunk(
  "sales/customer-credit",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/customer-credit",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching customer credit");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

export const listItemCancelled = createAsyncThunk(
  "sales/items-cancelled",
  async (data) => {
    try {
      const response = await axios.get(
        base_url + "/sales/items-cancelled",
        createAxiosConfig(data)
      );
      return response?.data;
    } catch (error) {
      console.error(error, "Error fetching items cancelled");
      if (error.response) {
        return error.response.data;
      } else {
        return false;
      }
    }
  }
);

// export const changeVendorStatus = createAsyncThunk(
//   'pettycash/change-vendor-status',
//   async (data) => {
//     try {
//       const response = await axios.post(base_url + '/petty-cash/change-vendor-status', data, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response?.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const getPettyCashLastInHand = createAsyncThunk(
//   'pettycash/get-petty-cash-last-in-hand',
//   async (data) => {
//     try {
//       const response = await axios.get(base_url + '/petty-cash/last-cash-in-hand', {
//         params: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response?.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const getPettyCashPaibyList = createAsyncThunk(
//   'pettycash/get-petty-cash-paid-by-list',
//   async (data) => {
//     try {
//       const response = await axios.get(base_url + '/petty-cash/get-paid-by-user', {
//         params: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const getVendors = createAsyncThunk(
//   'pettycash/get-vendors',
//   async (data) => {
//     try {
//       const response = await axios.get(base_url + '/petty-cash/get-vendors', {
//         params: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const getUnsettledVendors = createAsyncThunk(
//   'pettycash/get-unsettled-vendors',
//   async (data) => {
//     try {
//       const response = await axios.get(base_url + '/petty-cash/get-unsettled-vendors', {
//         params: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const listVendors = createAsyncThunk(
//   'pettycash/list-vendors',
//   async (data) => {
//     try {
//       const response = await axios.get(base_url + '/petty-cash/list-vendors', {
//         params: data,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });

// export const savePaymentVendor = createAsyncThunk(
//   'pettycash/save-payment-vendor',
//   async (data) => {
//     try {
//       const response = await axios.post(base_url + '/petty-cash/save-vendor', data, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${getLoginToken()}`,
//         }
//       });
//       return response.data;
//     } catch (error) {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         return false;
//       }
//     }
//   });
