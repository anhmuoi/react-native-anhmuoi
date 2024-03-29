import { Cart } from './../../model/cart';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    cartItems: Cart[];
}

const initialState = {
    cartItems: []
} as CartState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFromCart(state, action) {
            console.log(state);
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                state.cartItems[index].quantity = newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },

        // setQuantity(state, action) {
        //     const { id, quantity } = action.payload;
        //     const index = state.cartItems.findIndex((x) => x.id === id);
        //     if (index >= 0) {
        //         state.cartItems[index].quantity = quantity;
        //     }
        // },
        removeFromCart(state, action) {
            const idNeedRemove = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);
        },
    },
});

export const { addFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
