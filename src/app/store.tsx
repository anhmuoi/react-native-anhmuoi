import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import restaurantReducer from '../Features/Restaurants/RestaurantsSlice';
import cartReducer from '../Features/Cart/cartSlice';

export const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
        cart: cartReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
