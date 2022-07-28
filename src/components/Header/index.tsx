import React from 'react';
import { Dimensions, Image, Text, TextInput, View } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <View style={styles.headerLeft}>
                    <Image style={styles.logo} source={require('../../assets/catergories/salad.png')}></Image>
                    <View style={styles.headerDesc}>
                        <Text style={styles.headerName}>Shopee Food</Text>
                        <View style={styles.HeaderLocation}>
                            <Text style={styles.textLocation}>Current Location</Text>
                            <IconEntypo
                                name="chevron-thin-down"
                                size={30}
                                color="#50B19C"
                                style={{ transform: [{ scaleX: 0.4 }, { scaleY: 0.4 }], position: 'absolute', right: -23 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <Image style={styles.account} source={require('../../assets/catergories/salad.png')}></Image>
                </View>
            </View>
            <View style={styles.headerBottom}>
                <View style={styles.search}>
                    <IconAnt name="search1" size={30} color="#78787A" style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }} />
                    <View>
                        <TextInput placeholder="Restaurants and cuisines" />
                    </View>
                </View>
                <View style={styles.option}>
                    <IconIonicons
                        name="options-outline"
                        size={30}
                        color="#54BDAD"
                        style={{ transform: [{ rotate: '90deg' }, { scaleX: 0.7 }, { scaleY: 0.7 }] }}
                    />
                </View>
            </View>
        </View>
    );
}

export default Header;
