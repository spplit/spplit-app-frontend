import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';  // only for ios!
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Follower from './Follower';
import Landing from './Landing';
import Login from './Login';
import Main from './Main';
import MyNameCard from './MyNameCard';
import Notice from './Notice';
import Settings from './Settings';
import SignUp from './SignUp';



const Stack = createStackNavigator(); // 스택 형식으로 앱 화면 전환 - Navigator랑 Screen 사용

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Follower" component={Follower} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="MyNameCard" component={MyNameCard} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
