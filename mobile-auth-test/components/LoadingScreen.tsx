import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1DA1F2" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 16,
  },
  text: {
    fontSize: 16,
    color: "#1DA1F2",
    fontWeight: "500",
  },
});

export default LoadingScreen;
