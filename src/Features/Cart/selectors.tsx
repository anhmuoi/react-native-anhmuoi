import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Cart } from '../../model/cart';

const cartItemSelector = (state: RootState) => state.cart.cartItems;

export const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) =>

    cartItems?.reduce((count: number, item: Cart) => count + Number(item.quantity), 0)
);

export const cartItemTotalSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems?.reduce((total, item) => total + Number(item.product.price) * Number(item.quantity), 0)
);
