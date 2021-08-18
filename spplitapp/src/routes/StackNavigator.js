// 아직 사용하지 않고 있는 페이지입니다

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from './Main';
import Notice from './Notice';
import RequestDetail from "./RequestDetail";

const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' }
      }}
    >
      <MainStack.Screen name="Main" component={Main} />
      <MainStack.Screen name="Notice" component={Notice} />
    </MainStack.Navigator>
  )
}