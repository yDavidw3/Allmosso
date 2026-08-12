import { StatusBar } from 'expo-status-bar';
import bcrypt from 'bcryptjs';
import Checkbox from 'expo-checkbox';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createStaticNavigation, useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from './components/styles';

import WelcomeScreen from './navegacao/WelcomeScreen';
import LoginScreen from './navegacao/LoginScreen';
import CadastroScreen from './navegacao/CadastroScreen';
import HomeScreen from './navegacao/HomeScreen';

function Voltar() {
  navigation.canGoBack();
}

const MyStack = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },

  screens: {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Cadastro: CadastroScreen,
    Home: HomeScreen
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}