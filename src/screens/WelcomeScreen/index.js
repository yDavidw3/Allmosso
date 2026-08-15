import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const imagemFundo = require('../../assets/fundo.png');

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={imagemFundo} resizeMode="stretch" style={[styles.container, styles.background]}>

    <View></View>

    <View style={styles.area}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Já tenho uma conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.criarConta}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.criarContaText}>Criar nova conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.visitante}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.criarContaText}>Continuar como visitante</Text>
        </TouchableOpacity>
    </View>

    </ImageBackground>
  );
}

export default WelcomeScreen;