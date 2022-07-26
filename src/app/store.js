import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../Features/Restaurants/RestaurantsSlice.js';
import cartReducer from '../Features/Cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
        cart: cartReducer,
    },
});
