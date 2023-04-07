import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = ({ items }) => {
    const [cartItems, setCartItems] = useState(items);

    const handleIncrement = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartItems(newCartItems);
    };

    const handleDecrement = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item.id === id) {
                if (item.quantity === 1) {
                    return item;
                }
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCartItems(newCartItems);
    };

    const handleRemove = (id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const handleCheckout = () => {
        // handle checkout logic here
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cart</Text>
            </View>
            <View style={styles.cartItems}>

                {
                    cartItems.length === 0 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Your cart is empty</Text>
                        </View>
                    ) : (
                        <View style={styles.cartItems}>

                            {
                                cartItems.map((item) => (
                                    <View style={styles.cartItem} key={item.id}>
                                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                                        <View style={styles.itemDetails}>
                                            <Text style={styles.itemTitle}>{item.name}</Text>
                                            <Text style={styles.itemPrice}>${item.price}</Text>
                                            <View style={styles.quantityContainer}>
                                                <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                                                    <Ionicons name="remove-circle-outline" size={24} color="#F7C948" />
                                                </TouchableOpacity>
                                                <Text style={styles.quantity}>{item.quantity}</Text>
                                                <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                                                    <Ionicons name="add-circle-outline" size={24} color="#F7C948" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => handleRemove(item.id)}>
                                            <Ionicons name="trash-outline" size={24} color="#F7C948" />
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </View>
                    )

                }





            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Subtotal: ${calculateTotal()}</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>

                </TouchableOpacity>
                <Text>Estimated Cooking Time : 10 Min</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cartItems: {
        flex: 1,
        padding: 10
    },
    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    itemDetails: {
        flex: 1
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    itemPrice: {
        fontSize: 16,
        color: "#777",
        marginBottom: 5
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    quantity: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10
    },
    totalContainer: {
        height: 110,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    checkoutButton: {
        backgroundColor: "#F7C948",
        padding: 10,
        borderRadius: 5
    },
    checkoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        fontSize: 20,
        fontWeight: "bold"
    }

});

export default Cart;

