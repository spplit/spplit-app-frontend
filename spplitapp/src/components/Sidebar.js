//아직 사용하지 않고 있는 페이지입니다

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MyNameCard from '../routes/MyNameCard';
import Schedule from '../routes/Schedule';
import Settings from '../routes/Settings';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import Main from '../routes/Main';
import Notice from '../routes/Notice';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator(); 

const MainStackScreen = ({navigation}) => {
    return(
      <MainStack.Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
        }}
      >
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name="Notice" component={Notice} />
      </MainStack.Navigator>
    )
  }

export default function Sidebar() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Main" component={MainStackScreen}/>
    <Drawer.Screen name="Schedule" component={MainStackScreen}/>
    <Drawer.Screen name="Settings" component={MainStackScreen}/>
    <Drawer.Screen name="MyNameCard" component={MainStackScreen}/>
  </Drawer.Navigator>
  );
};
