import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from 'react-native';

interface Order {
  id: string;
  title: string;
  status: string;
}

const orders: Order[] = [
  { id: '001', title: 'Smartwatch', status: 'In Progress' },
  { id: '002', title: 'Bluetooth Headphones', status: 'In Progress' },
  { id: '003', title: 'Wireless Charger', status: 'In Progress' },
];

const CurrentOrderScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleTrackOrder = (orderId: string) => {
    alert(`Tracking Order #${orderId}`);
  };

  const renderItem = ({ item }: { item: Order }) => (
    <OrderCard
      orderId={item.id}
      title={item.title}
      status={item.status}
      onTrackOrder={handleTrackOrder}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Orders</Text>
      <Text style={styles.subtitle}>Track your ongoing orders</Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.orderList}
        />
      </Animated.View>
    </View>
  );
};

interface OrderCardProps {
  orderId: string;
  title: string;
  status: string;
  onTrackOrder: (orderId: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ orderId, title, status, onTrackOrder }) => (
  <View style={styles.orderCard}>
    <Text style={styles.orderTitle}>
      Order #{orderId}: {title}
    </Text>
    <Text style={styles.orderStatus}>Status: {status}</Text>
    <TouchableOpacity style={styles.button} onPress={() => onTrackOrder(orderId)}>
      <Text style={styles.buttonText}>Track Order</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#A1A1A1',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
  },
  orderList: {
    paddingBottom: 30,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Roboto-Medium',
  },
  orderStatus: {
    fontSize: 16,
    color: '#FFB74D',
    fontWeight: '500',
    marginBottom: 15,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: '#D35400',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
});

export default CurrentOrderScreen;
