import React from "react";

import Home from "./Components/Home";
import Header from "./Components/Header";
import LargeImage from "./Components/LargeImage";
import MyPage from "./Components/MyPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#FFE4C4",
            },
            headerTitleContainerStyle: {
              width: "100%",
            },
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Image"
          component={LargeImage}
          options={{
            headerStyle: {
              backgroundColor: "#FFE4C4",
            },
            headerTitleContainerStyle: {
              width: "100%",
              zIndex: -1,
            },
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{
            headerStyle: {
              backgroundColor: "#FFE4C4",
            },
            headerTitleContainerStyle: {
              width: "100%",
              zIndex: -1,
            },
            headerTitle: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
