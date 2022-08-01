import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useRef, useState } from 'react';
import { Alert, SafeAreaView, StatusBar, Text } from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/FontAwesome5';

async function save() {
    await SecureStore.setItemAsync('passCode', '12345678');
}

async function getValueFor(key: string) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
    } else {
    }
}

type RootStackParamList = {
    PassCode: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'PassCode'>;

export default function PassCodeScreen({ navigation }: Props) {
    const pinView = useRef<any>(null);
    const [showRemoveButton, setShowRemoveButton] = useState<boolean>(false);
    const [enteredPin, setEnteredPin] = useState('');
    const [showCompletedButton, setShowCompletedButton] = useState<boolean>(false);

    useEffect(() => {
        async () => {
            await save();
        };
    }, []);

    useEffect(() => {
        if (enteredPin.length > 0) {
            setShowRemoveButton(true);
        } else {
            setShowRemoveButton(false);
        }
        if (enteredPin.length === 8) {
            setShowCompletedButton(true);
        } else {
            setShowCompletedButton(false);
        }
    }, [enteredPin]);

    const handleUnlock = async (enteredPin: string) => {
        const result = await SecureStore.getItemAsync('passCode');
        if (result === enteredPin) {
            navigation.navigate('Home');
        } else {
            Alert.alert('sai passcode');
        }
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        paddingTop: 24,
                        paddingBottom: 48,
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 48,
                    }}
                >
                    enter passcode
                </Text>
                <ReactNativePinView
                    inputSize={32}
                    ref={pinView}
                    pinLength={8}
                    buttonSize={60}
                    onValueChange={(value) => setEnteredPin(value)}
                    buttonAreaStyle={{
                        marginTop: 24,
                    }}
                    inputAreaStyle={{
                        marginBottom: 24,
                    }}
                    inputViewEmptyStyle={{
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: '#FFF',
                    }}
                    inputViewFilledStyle={{
                        backgroundColor: '#FFF',
                    }}
                    buttonViewStyle={{
                        borderWidth: 1,
                        borderColor: '#FFF',
                    }}
                    buttonTextStyle={{
                        color: '#FFF',
                    }}
                    onButtonPress={(key) => {
                        if (key === 'custom_left') {
                            pinView.current.clear();
                        }
                        if (key === 'custom_right') {
                            handleUnlock(enteredPin);
                        }
                        // if (key === 'three') {
                        //     Alert.alert("You can't use 3");
                        // }
                    }}
                    customLeftButton={showRemoveButton ? <Icon name={'backspace'} size={36} color={'#FFF'} /> : undefined}
                    customRightButton={showCompletedButton ? <Icon name={'unlock-alt'} size={36} color={'#FFF'} /> : undefined}
                />
            </SafeAreaView>
        </>
    );
}
