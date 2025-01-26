import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

interface OrderCardProps {
  orderId: string;
  title: string;
  date: string;
  status: string;
  onReorder: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ orderId, title, date, status, onReorder }) => {
  const cardOpacity = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.timing(cardOpacity, {
      toValue: 1,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(cardTranslateY, {
      toValue: 0,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.orderCard,
        {
          opacity: cardOpacity,
          transform: [{ translateY: cardTranslateY }],
        },
      ]}
    >
      <Text style={styles.orderTitle}>
        Order #{orderId}: {title}
      </Text>
      <Text style={styles.orderDate}>Date: {date}</Text>
      <Text style={[styles.orderStatus, { color: getStatusColor(status) }]}>
        Status: {status}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onReorder}>
        <Text style={styles.buttonText}>Reorder</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return '#28a745';
    case 'Pending':
      return '#ffc107';
    case 'Cancelled':
      return '#dc3545';
    default:
      return '#FFB74D';
  }
};

const PastOrderScreen: React.FC = () => {
  const handleReorder = (orderId: string) => {
    alert(`Reordering Order #${orderId}...`);
  };

  const orders = [
    { orderId: '001', title: 'Wireless Earbuds', date: '12th March 2023', status: 'Delivered' },
    { orderId: '002', title: 'Laptop Stand', date: '15th March 2023', status: 'Delivered' },
    { orderId: '003', title: 'Smartphone Case', date: '20th March 2023', status: 'Pending' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Orders</Text>
      <Text style={styles.subtitle}>View your completed orders</Text>

      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderCard
            orderId={item.orderId}
            title={item.title}
            date={item.date}
            status={item.status}
            onReorder={() => handleReorder(item.orderId)}
          />
        )}
        keyExtractor={(item) => item.orderId}
        contentContainerStyle={styles.orderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Roboto-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#A1A1A1',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Roboto-Regular',
  },
  orderList: {
    paddingBottom: 30,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Roboto-Medium',
  },
  orderDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    fontFamily: 'Roboto-Regular',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: '#D35400',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
});

export default PastOrderScreen;
