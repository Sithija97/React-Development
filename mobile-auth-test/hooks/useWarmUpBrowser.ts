import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Platform } from "react-native";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Only warm up browser on native platforms
    if (Platform.OS !== "web") {
      // This speeds up the auth process by pre-loading the browser
      void WebBrowser.warmUpAsync();

      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};
