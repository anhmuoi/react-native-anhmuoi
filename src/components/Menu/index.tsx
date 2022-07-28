import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Currency from 'react-currency-formatter';
import { urlFor } from '../../api/sanity';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { addFromCart } from '../../Features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Dishes } from '../../model/restaurant';

interface Props {
    menu: Dishes;
}

function Menu({ menu }: Props) {
    const [showAdd, setShowAdd] = useState(false);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const handleMinusCart = () => {
        if (count === 0) {
            return;
        }
        setCount((prev) => (prev > 0 ? prev - 1 : prev));
        const action = addFromCart({
            id: menu._id,
            product: menu,
            quantity: count - 1,
        });
        dispatch(action);
    };

    const handlePlusCart = () => {
        setCount((prev) => prev + 1);
        const action = addFromCart({
            id: menu._id,
            product: menu,
            quantity: count + 1,
        });
        dispatch(action);
    };

    return (
        <TouchableOpacity className="bg-white  items-center mb-4 mx-2" onPress={() => setShowAdd(!showAdd)}>
            <View className="px-2 pt-4  flex-row">
                <View className="flex-1">
                    <Text className="font-medium mb-1 ">{menu.name}</Text>
                    <Text className="text-[#BBB7B9] mb-1">{menu.short_description}</Text>
                    <Text className="pb-4">
                        <Text className="font-bold text-[#C0BFC0]">{String(menu.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</Text>
                    </Text>
                </View>
                <View>
                    <Image
                        source={{
                            uri: urlFor(menu.image.asset._ref).url(),
                        }}
                        className="h-16 w-16 mr-2  "
                    ></Image>
                </View>
            </View>
            {showAdd === true ? (
                <View className="flex-row items-center self-start px-2 pb-2">
                    <IconEntypo name="circle-with-minus" size={30} color="#5CC9B7" onPress={() => handleMinusCart()}></IconEntypo>
                    <Text className="px-2 font-bold ">{count}</Text>
                    <IconEntypo name="circle-with-plus" size={30} color="#5CC9B7" onPress={() => handlePlusCart()}></IconEntypo>
                </View>
            ) : (
                <></>
            )}
        </TouchableOpacity>
    );
}

export default Menu;
