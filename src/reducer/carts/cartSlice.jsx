// src/redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Array to hold cart items
    totalAmount: 0, // Sum of item prices
    totalQuantity: 0, // Total number of items
    orderInfo: {}, // New field for order details
    kotItems: [],   // New field for KOT items
    orderItems: []
  },
  reducers: {
      // Add item to cart
      addItemToCart: (state, action) => {
        const newItem = action.payload;
    
        // Calculate extras total price
        const extrasTotalPrice = newItem.extras && newItem.extras.reduce((total, extra) => {
            return total + (extra.ex_price * extra.quantity * newItem.quantity);
        }, 0);
    
        // Find item by id, variant, and extras
        const existingItem = state.items.find((item) =>
            item.id === newItem.id &&
            item.variantId === newItem.variantId &&
            JSON.stringify(item.extras) === JSON.stringify(newItem.extras) // Check extras as well
        );
    
        if (existingItem) {
            // If item with variant and extras exists, increase quantity
            existingItem.quantity += newItem.quantity;
    
            // Calculate new total price including extras
            existingItem.totalPrice = parseFloat(
                (existingItem.quantity * existingItem.price + existingItem.quantity * extrasTotalPrice / newItem.quantity).toFixed(2)
            );
        } else {
            // Add new item with variant and extras
            state.items.push({
                ...newItem,
                totalPrice: parseFloat((newItem.price * newItem.quantity + extrasTotalPrice).toFixed(2)),
            });
        }
    
        // Update total cart amount and quantity
        state.totalAmount = parseFloat((state.totalAmount + newItem.price * newItem.quantity + extrasTotalPrice).toFixed(2));
        state.totalQuantity += newItem.quantity;
    },
    

    updateItemFromCart: (state, action) => {
        const { id, variantId, extras, quantity, totalPrice, totalNonExtraPrice, extra_price } = action.payload;
    
        const existingItem = state.items.find(item =>
            item.id === id &&
            item.variantId === variantId &&
            JSON.stringify(item.extras) === JSON.stringify(extras)
        );
    
        if (existingItem) {
            // Update the quantity, total price, main item price, and extra price
            existingItem.quantity = quantity;
            existingItem.totalNonExtraPrice = totalNonExtraPrice;
            existingItem.extra_price = extra_price;
            existingItem.totalPrice = totalPrice;
    
            // Remove the item from the cart if quantity is 0
            if (quantity === 0) {
                state.items = state.items.filter(item =>
                    !(item.id === id && item.variantId === variantId && JSON.stringify(item.extras) === JSON.stringify(extras))
                );
            }
    
            // Recalculate totalAmount and totalQuantity across all cart items
            state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        }
    },
     

    removeItemFromCart: (state, action) => {
        const { id, variantId, extras } = action.payload;
        
        // Remove the item from the cart by filtering it out
        state.items = state.items.filter(item =>
            !(item.id === id && item.variantId === variantId && JSON.stringify(item.extras) === JSON.stringify(extras))
        );
    
        // Recalculate the total amount and quantity after removing the item
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },


    updateOrderDetails: (state, action) => {
        const { orderDetails, orderItems, kotItems } = action.payload;
        state.orderInfo = { ...orderDetails };
        state.orderItems = orderItems || [];
        state.kotItems = kotItems || [];
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItemToCart,updateItemFromCart, removeItemFromCart,updateOrderDetails, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
