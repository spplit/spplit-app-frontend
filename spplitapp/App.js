import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';  // only for ios!
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/routes/Login';
import SignUp from './src/routes/SignUp';
import Main from './src/routes/Main';
import MyNameCard from './src/routes/MyNameCard';
import Notice from './src/routes/Notice';
import Settings from './src/routes/Settings';
import Schedule from './src/routes/Schedule';
import Detail from './src/routes/Detail';
import CategoryEdit from './src/routes/CategoryEdit';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import AuthCheck from './src/routes/AuthCheck';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const AuthStack = createStackNavigator();

// 로그인 혹은 회원가입 화면
const AuthStackScreen = ({navigation}) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: 'white'}
      }}
    >
      <AuthStack.Screen name="AuthCheck" component={AuthCheck} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />

    </AuthStack.Navigator>
  )
}

// 메인화면
const MainStackScreen = ({navigation}) => {
    
    return(
      <MainStack.Navigator
        initialRouteName="Main"
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
        }}
      >
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Notice" component={Notice} />
        <MainStack.Screen 
          name="Detail"
          component={Detail}
          options={navigation => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })}
        />
      </MainStack.Navigator>
    )
  }

  //스케줄 화면
  const ScheduleStackScreen = ({navigation}) => {
    return (
      <ScheduleStack.Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
        }}
      >
        <ScheduleStack.Screen name="Schedule" component={Schedule} />
      </ScheduleStack.Navigator>
    )
  }


export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      { login ? (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#4672af',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Main" component={MainStackScreen}/>
        <Drawer.Screen name="Schedule" component={ScheduleStackScreen}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        <Drawer.Screen name="MyNameCard" component={MyNameCard}/>
        <Drawer.Screen name="CategoryEdit" component={CategoryEdit}/>
      </Drawer.Navigator>
      ) : (
        <AuthStackScreen />
      )
      }

    </NavigationContainer>
  );
}