import { useCallback } from "react";
import { View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import FONTS from "@assets/fonts";
import { persistor, store } from "@store/storages";
import { Text } from "@components/atoms";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(FONTS.Lato);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </PersistGate>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}
