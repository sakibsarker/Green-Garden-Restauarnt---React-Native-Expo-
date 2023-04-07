import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Cart from '../../component/Cart/Cart.component';
import { Platform } from 'react-native';

const CartScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Cart
                items={[
                    {
                        id: 1,
                        name: 'Burger',
                        price: 10.99,
                        quantity: 1,
                        image: 'https://source.unsplash.com/random/300x300/?food',
                    },
                    {
                        id: 2,
                        name: 'Pizza',
                        price: 15.99,
                        quantity: 1,
                        image: 'https://source.unsplash.com/random/300x300/?burger',
                    },
                ]}









            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: Platform.OS === 'android' ? 20 : 0,
    }

})

export default CartScreen;
