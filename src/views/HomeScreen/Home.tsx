import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import HotLocation from '../../components/HotLocation/index';
import NearFood from '../../components/NearFood/index';
import { useNavigation } from '@react-navigation/native';
import { getRestaurantList } from '../../Features/Restaurants/RestaurantsSlice';
import { useDispatch } from 'react-redux';
import { AsyncThunkAction, unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../app/hooks';
import { Restaurant, RestaurantList } from '../../model/restaurant';

function Home() {
    const navigation = useNavigation();

    const [restaurant, setRestaurant] = useState<RestaurantList[]>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            try {
                const action = getRestaurantList();
                const resultAction = await dispatch(action);
                const rs = unwrapResult(resultAction);
                setRestaurant(rs);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <ScrollView
            className="mt-0"
            contentContainerStyle={{
                paddingBottom: 110,
            }}
        >
            <HotLocation />
            {restaurant?.map((item: RestaurantList, key) => (
                <NearFood recommend={item} key={key} />
            ))}
        </ScrollView>
    );
}

export default Home;
