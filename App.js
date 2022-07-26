// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import DetailScreen from './src/views/DetailScreen/index.js';
import HomeScreen from './src/views/HomeScreen/index.js';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store.js';
import CartScreen from './src/views/CartScreen/index.js';
import OrderScreen from './src/views/OrderScreen/index.js';
import PreparingOrder from './src/views/PreparingOrder/index.js';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <TailwindProvider>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Detail" component={DetailScreen} />
                        <Stack.Screen name="Cart" component={CartScreen} />
                        <Stack.Screen name="PreparingOrder" component={PreparingOrder} />
                        <Stack.Screen name="Order" component={OrderScreen} />
                    </Stack.Navigator>
                </TailwindProvider>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
