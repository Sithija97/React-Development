import { useAuth } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

const SignOutButton = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Feather name="log-out" size={18} color="#dc2626" />
      <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fecaca",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 16,
    gap: 8,
  },
  buttonText: {
    color: "#dc2626",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignOutButton;
