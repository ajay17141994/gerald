import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <Text style={styles.subtitle}>Track your order history and status</Text>

      <View style={styles.orderItem}>
        <Text style={styles.orderItemText}>Order #001: Coffee Maker</Text>
        <Text style={styles.orderItemStatus}>Delivered</Text>
      </View>

      <View style={styles.orderItem}>
        <Text style={styles.orderItemText}>Order #002: Headphones</Text>
        <Text style={styles.orderItemStatus}>Pending</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Manage Orders')}>
        <Text style={styles.buttonText}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  orderItemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginBottom: 5,
  },
  orderItemStatus: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#E7625F',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OrdersScreen;
