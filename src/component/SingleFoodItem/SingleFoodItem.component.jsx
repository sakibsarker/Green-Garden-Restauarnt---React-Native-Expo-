import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FoodItemPage = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert('Added to cart!')}
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F7C948',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default FoodItemPage;
