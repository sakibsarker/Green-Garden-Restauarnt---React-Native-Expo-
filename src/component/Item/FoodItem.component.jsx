import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FoodItem = ({ item, onAddToCart }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <TouchableOpacity style={styles.container}>

            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
                <View style={styles.stockContainer}>
                    <Icon name="cart-outline" size={20} color="#888" />
                    <Text style={styles.stock}>{`${item.stock} left in stock`}</Text>
                </View>
            </View>


            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                    <Icon name="minus" size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                    <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    details: {
        flex: 1,
        marginHorizontal: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    stockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    stock: {
        marginLeft: 5,
        fontSize: 14,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#888',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});

export default FoodItem;
