import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function OrderScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const {
        params: { restaurant },
    } = useRoute<any>();

    return (
        <View className="bg-[#00CCBB] w-full h-full">
            <SafeAreaView>
                <View className="flex-row p-4 justify-between items-baseline">
                    <IconFontAwesome onPress={() => navigation.navigate('Home')} name="close" size={30} color="white"></IconFontAwesome>
                    <Text className="font-bold text-white text-lg">Order help</Text>
                </View>

                <View className="bg-white m-4 rounded-md px-4 pb-4 items-center z-10">
                    <Text className="font-medium  pt-4 text-gray-400 text-lg">Thời gian ước tính</Text>
                    <Text className="text-black font-bold text-3xl  pb-4">30-40 phút</Text>
                    <Progress.Bar color="#00CCBB" indeterminate></Progress.Bar>
                    <Text className="text-sm text-gray-500 font-medium ">Order của bạn tại {restaurant.name} đang được vận chuyển</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                mapType="mutedStandard"
                className="flex-1 -mt-10 z-0"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.name}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>
        </View>
    );
}

export default OrderScreen;
