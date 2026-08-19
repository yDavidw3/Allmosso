import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen/index';
import LoginScreen from './src/screens/LoginScreen/index';
import SingupScreen from './src/screens/SingupScreen/index';
import HomeScreen from './src/screens/HomeScreen/index';
import PedidosScreen from './src/screens/PedidosScreen/index';
import ContaScreen from './src/screens/ContaScreen/index';
import EnderecosScreen from './src/screens/EnderecosScreen/index';
import PagamentosScreen from './src/screens/PagamentosScreen/index';
import CuponsScreen from './src/screens/CuponsScreen/index';

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

      {/* as duas de baixo são as abas da barra inferior */}
      <Stack.Screen
        name="Pedidos"
        component={PedidosScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Conta"
        component={ContaScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* telas que abrem a partir das opções da Conta */}

        <Stack.Screen
          name="Enderecos"
          component={EnderecosScreen}
          options={{
            headerTitle: ' ',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Pagamentos"
          component={PagamentosScreen}
          options={{
            headerTitle: ' ',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Cupons"
          component={CuponsScreen}
          options={{
            headerTitle: ' ',
            headerShadowVisible: false,
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