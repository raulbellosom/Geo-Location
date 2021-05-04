import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebaseApp } from "./database/firebase";

const Stack = createStackNavigator();

import UserList from "./views/UserList";
import CreateUserScreen from "./views/CreateUserScreen";
import UserDetailScreen from "./views/UserDetailScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
      <Stack.Screen name="UserList" component={UserList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
