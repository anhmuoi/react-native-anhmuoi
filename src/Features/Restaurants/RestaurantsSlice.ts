import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import restaurantApi from '../../api/restaurantApi';
import { RestaurantList } from '../../model/restaurant';

export const getRestaurantList = createAsyncThunk('restaurant/getAll', async () => {
    //call api
    const data = await restaurantApi.getAll();
    return data.data.result;
});

interface RestaurantState {
    RestaurantList: RestaurantList;
}

const initialState = {} as RestaurantState;

const RestaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        // addFromCart(state, action) {
        //   const newItem = action.payload;
        //   const index = state.RoomCardList.findIndex((x) => x.id === newItem.id);
        //   if (index >= 0) {
        //     state.RoomCardList[index].quantity += newItem.quantity;
        //   } else {
        //     state.RoomCardList.push(newItem);
        //   }
        // },
        // setQuantity(state, action) {
        //   const { id, quantity } = action.payload;
        //   const index = state.RoomCardList.findIndex((x) => x.id === id);
        //   if (index >= 0) {
        //     state.RoomCardList[index].quantity = quantity;
        //   }
        // },
        // removeFromCart(state, action) {
        //   const idNeedRemove = action.payload;
        //   state.RoomCardList = state.RoomCardList.filter((x) => x.id !== idNeedRemove);
        // },
    },
    extraReducers: {
        [getRestaurantList.fulfilled.toString()]: (state: any, action: PayloadAction) => {
            state.RestaurantList = action.payload;
        },
    },
});

const { actions, reducer } = RestaurantsSlice;
export default reducer;
