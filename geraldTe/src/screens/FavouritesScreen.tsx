import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouritesScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Favourite Screen </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavouritesScreen;
