import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../Features/Restaurants/RestaurantsSlice.js';
import cartSlice from '../Features/Cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
        cart: cartSlice,
    },
});
