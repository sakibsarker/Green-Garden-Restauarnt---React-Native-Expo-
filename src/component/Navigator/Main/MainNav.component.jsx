import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../Screen/Home/Home.screen";
import CartScreen from "../../../Screen/Cart/Cart.screen";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
}

function CartStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='CartScreen' component={CartScreen} />
        </Stack.Navigator>
    );
}

function MainTabNavigator() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Burger",

            price: 10.99,
            quantity: 1,
            image: "https://source.unsplash.com/random/300x300/?food",
        }]);

    const getCartItemCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        });
        return count;
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }

                    // update the cart icon badge count based on the number of items in the cart
                    if (route.name === 'Cart' && getCartItemCount() > 0) {
                        return (
                            <View style={{ width: 24, height: 24, margin: 5 }}>
                                <Ionicons name={iconName} size={size} color={color} />
                                <View style={{
                                    position: 'absolute',
                                    backgroundColor: '#F7C948',
                                    borderRadius: 10,
                                    width: 20,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    right: -10,
                                    top: -5,
                                }}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                                        {getCartItemCount()}
                                    </Text>
                                </View>
                            </View>
                        );
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Cart' component={CartStack} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;
