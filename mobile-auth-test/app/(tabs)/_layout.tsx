import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { isSignedIn, isLoaded } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // Add delay before redirect to prevent flash
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, isSignedIn]);

  // Show loading while auth state is being determined
  if (!isLoaded) {
    return <LoadingScreen message="Loading app..." />;
  }

  // Redirect to auth if not signed in
  if (!isSignedIn && shouldRedirect) {
    return <Redirect href="/(auth)" />;
  }

  // Show loading briefly if not signed in but haven't redirected yet
  if (!isSignedIn && !shouldRedirect) {
    return <LoadingScreen message="Redirecting..." />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#657786",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E1E8ED",
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
        animation: "fade", // Smooth transitions
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
