import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "@pages/Main";
import ProfileScreen from "@pages/Profile";
import { RootStackParamList } from "@interfaces/IntervaceNavigaion";
import { View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Router() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
        // screenListeners={{
        //   state: (event) => {
        //     console.log("EVENT SCREEN", JSON.stringify(event, null, 2));
        //   },
        // }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </View>
  );
}
