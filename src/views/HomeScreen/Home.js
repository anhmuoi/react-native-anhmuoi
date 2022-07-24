import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import HotLocation from '../../components/HotLocation/index.js';
import NearFood from '../../components/NearFood/index.js';
import { useNavigation } from '@react-navigation/native';
import { getRestaurantList } from '../../Features/Restaurants/RestaurantsSlice.js';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const data = [
    {
        heading: 'Feature',
        desc: 'Tổng hợp các món ăn gần đây',
    },
    {
        heading: 'Tasting discount',
        desc: 'Thực đơn tuyệt vời không thể bỏ lỡ',
    },
    {
        heading: 'Offer nears you~~',
        desc: 'Gợi ý các món ngon gần bạn',
    },
];

function Home() {
    const navigation = useNavigation();

    const [restaurant, setRestaurant] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const action = getRestaurantList();
                const resultAction = await dispatch(action);
                const rs = unwrapResult(resultAction);
                setRestaurant(rs)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 110,
            }}
        >
            <HotLocation />
            {restaurant?.map((item, key) => (
                <NearFood recommend={item} key={key} />
            ))}
        </ScrollView>
    );
}

export default Home;
