import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./login/reducer";
import pettycashReducer from "./pettycash/reducer";
import orderHistoryReducer from "./user/userSlice";
import expenseReducer from "./expense/reducer";
import salesReducer from "./sales/reducer";
import categoryReducer from "./categories/reducer";
import itemReducer from "./items/reducer";
import cartReducer from './carts/cartSlice';
import customerReducer from './customer/reducer';
import ordersReducer from "./orders/reducer";
const persistConfig = {
  key: 'brixPOSRoot',
  storage,
  timeout: null
};
const reducers = combineReducers({
  user: userReducer,
  pettycash: pettycashReducer,
  expenses: expenseReducer,
  categories: categoryReducer,
  items: itemReducer,
  orderHistory: orderHistoryReducer,
  orders: ordersReducer,
  cart: cartReducer,
  customers: customerReducer,
  sales:salesReducer,
});

const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistReducers
});

const persistor = persistStore(store);

export { store, persistor };