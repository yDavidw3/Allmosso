import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen/index';
import LoginScreen from './src/screens/LoginScreen/index';
import SingupScreen from './src/screens/SingupScreen/index';
import HomeScreen from './src/screens/HomeScreen/index';

const Stack = createNativeStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
         headerShown: false, 
        }}
      />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: ' ',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Cadastro"
          component={SingupScreen}
          options={{
            headerTitle: ' ',
            headerShadowVisible: false,
          }}
        />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}