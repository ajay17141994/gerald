import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <Text style={styles.subtitle}>Review your items before checkout</Text>

      <View style={styles.cartItem}>
        <Text style={styles.cartItemText}>Item 1: Awesome Product</Text>
        <Text style={styles.cartItemPrice}>$20.00</Text>
      </View>

      <View style={styles.cartItem}>
        <Text style={styles.cartItemText}>Item 2: Another Cool Product</Text>
        <Text style={styles.cartItemPrice}>$35.00</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Proceeding to Checkout')}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>

      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total: $55.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#A1A1A1',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Roboto-Regular',
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cartItemText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Roboto-Medium',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#E7625F',
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  button: {
    backgroundColor: '#E7625F',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  totalSection: {
    marginTop: 30,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 25,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
});

export default CartScreen;
