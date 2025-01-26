import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const StartScreen: React.FC = () => {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(30)).current;

  const subtitleOpacity = useRef(new Animated.Value(0)).current;

  const buttonScale = useRef(new Animated.Value(0.7)).current;

  const sectionOpacity = useRef(new Animated.Value(0)).current;
  const sectionTranslateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(titleTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 600,
        delay: 300,
        useNativeDriver: true,
      }),

      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 3,
        tension: 50,
        useNativeDriver: true,
      }),

      Animated.timing(sectionOpacity, {
        toValue: 1,
        duration: 800,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(sectionTranslateY, {
        toValue: 0,
        duration: 800,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleOpacity,
            transform: [{ translateY: titleTranslateY }],
          },
        ]}
      >
        Welcome to Our App
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
        Basic app to elaborate the assignment
      </Animated.Text>
      <ScrollView>
        <Animated.View
          style={[
            styles.section,
            {
              opacity: sectionOpacity,
              transform: [{ translateY: sectionTranslateY }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Drawer Navigation</Text>
          <Text style={styles.sectionText}>
            Home / Your Order/ Shopping Cart
          </Text>
          <Text style={styles.sectionText}>
            <Text style={{ fontWeight: "bold" }}>
              Click on hamburger menu over top left corner
            </Text>
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.section,
            {
              opacity: sectionOpacity,
              transform: [{ translateY: sectionTranslateY }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Tab Navigation</Text>
          <Text style={styles.sectionText}>Home / Cart / Orders</Text>
          <Text style={styles.sectionText}>
            <Text style={{ fontWeight: "bold" }}>
              Click on bottom navigation menu over Home page
            </Text>
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.section,
            {
              opacity: sectionOpacity,
              transform: [{ translateY: sectionTranslateY }],
            },
          ]}
        >
          <Text style={styles.sectionTitle}>Stack Navigation</Text>
          <Text style={styles.sectionText}>Current Order / Past Order</Text>
          <Text style={styles.sectionText}>
            <Text style={{ fontWeight: "bold" }}>
              Click on bottom navigation Orders menu
            </Text>
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#2D2D2D",
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFD700",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#A1A1A1",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E7625F",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});

export default StartScreen;

