import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen: React.FC = () => {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(30)).current;

  const subtitleOpacity = useRef(new Animated.Value(0)).current;

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
        Welcome to the Home Screen
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
        Your journey begins here, explore the features below!
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
          <Text style={styles.sectionTitle}>Explore Our Services</Text>
          <Text style={styles.sectionText}>
            We offer various services tailored for your needs. This is a dummy
            app in order to explain you the basic implementation of the DRAWER,
            TAB and STACK navigation using shopping application
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
          <Text style={styles.sectionTitle}>Get Started</Text>
          <Text style={styles.sectionText}>
            Ready to take action? Get started by having a round of discussion
            with me with help you understanding what all can be done.
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
          <Text style={styles.sectionTitle}>Stay Connected</Text>
          <Text style={styles.sectionText}>
            Stay updated with the latest news, offers, and tips
            @ajay17141994@gmail.com
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
          <Text style={styles.sectionTitle}>Help & Support</Text>
          <Text style={styles.sectionText}>
            Have questions? Lets connect via handgout/teams/call/email
          </Text>
          <Text style={styles.sectionText}>
              Email: ajay17141994@gmail.com
            </Text>
            <Text style={styles.sectionText}>
              Call: 7611947737
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
    paddingTop: 50,
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

export default HomeScreen;
