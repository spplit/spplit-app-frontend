import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';  // only for ios!
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Follower from './src/routes/Follower';
import Landing from './src/routes/Landing';
import Login from './src/routes/Login';
import Main from './src/routes/Main';
import MyNameCard from './src/routes/MyNameCard';
import Notice from './src/routes/Notice';
import Settings from './src/routes/Settings';
import SignUp from './src/routes/SignUp';
import Header from './src/components/Header';


// 스택 형식으로 앱 화면 전환 - Navigator랑 Screen 사용
const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'}
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Follower" component={Follower} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="MyNameCard" component={MyNameCard} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}
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
