import { tokenCache } from "@/lib/tokenCache";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";

// Prevent splash screen from auto-hiding before we're ready
SplashScreen.preventAutoHideAsync();

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inTabsGroup = segments[0] === "(tabs)";

    if (isSignedIn && !inTabsGroup) {
      // Redirect authenticated users to the main tabs screen
      router.replace("/(tabs)");
    } else if (!isSignedIn && !inAuthGroup) {
      // Redirect unauthenticated users to the auth screen
      router.replace("/(auth)");
    }

    if (!isNavigationReady) {
      setIsNavigationReady(true);
      SplashScreen.hideAsync();
    }
  }, [isSignedIn, isLoaded, segments, router, isNavigationReady]);

  if (!isNavigationReady || !isLoaded) {
    return null; // Keep splash screen visible
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
