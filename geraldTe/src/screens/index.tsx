import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const StartScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Start Screen  </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    position: 'relative',
    top:0
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StartScreen;


