import React from 'react';
import { Image, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { urlFor } from '../../../api/sanity';
import { Category } from '../../../model/category';
const { width, height } = Dimensions.get('window');

interface Props {
    location: Category;
}

function Location({ location }: Props) {
    return (
        <View className="rounded-sm relative mx-1 " style={{ width: width / 4.5, height: width / 5 }}>
            <Text className="absolute left-1  bottom-1 z-10 text-white font-bold">{location.name}</Text>
            <Image
                className="rounded-md w-full object-contain h-full"
                source={{
                    uri: urlFor(location.image.asset._ref).width(200).height(69).url(),
                }}
            ></Image>
        </View>
    );
}

export default Location;
