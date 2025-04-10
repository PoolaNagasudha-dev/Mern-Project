import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice'; // ✅ Import cart reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer, // ✅ Add cart reducer here
  },
});

export default store;
