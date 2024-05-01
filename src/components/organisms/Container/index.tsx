import { useCallback } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import FONTS from "@assets/fonts";
import { persistor, store } from "@store/storages";
import Modal from "@components/atoms/Modal";
import Router from "@services/Router";

SplashScreen.preventAutoHideAsync();

export default function Container() {
  // rest of the code
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
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Modal>
              <Router />
            </Modal>
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
