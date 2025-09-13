import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Using useOAuth (it's still supported, just marked as deprecated for future migration)
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  useWarmUpBrowser();

  const onGoogleSignIn = React.useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
        // Don't manually navigate - let the root layout handle it
      } else {
        // Handle additional steps like MFA if needed
        console.log("Additional authentication steps required:", {
          signIn,
          signUp,
        });
        Alert.alert(
          "Authentication Required",
          "Please complete the additional authentication steps."
        );
      }
    } catch (err: any) {
      console.error("OAuth error", err);
      Alert.alert(
        "Sign In Error",
        err.message || "Something went wrong during sign in. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [startOAuthFlow, isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.googleButton, isLoading && styles.buttonDisabled]}
            onPress={onGoogleSignIn}
            disabled={isLoading}
          >
            <View style={styles.buttonContent}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#4285F4" />
              ) : (
                <Feather name="chrome" size={20} color="#4285F4" />
              )}
              <Text style={styles.buttonText}>
                {isLoading ? "Signing in..." : "Continue with Google"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#1DA1F2" />
          <Text style={styles.overlayText}>Authenticating with Google...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  buttonContainer: {
    gap: 16,
  },
  googleButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  loadingText: {
    fontSize: 16,
    color: "#1DA1F2",
    fontWeight: "500",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  overlayText: {
    fontSize: 16,
    color: "#1DA1F2",
    fontWeight: "500",
  },
});

export default LoginScreen;
