import { StatusBar } from 'expo-status-bar';
import bcrypt from 'bcryptjs';
import Checkbox from 'expo-checkbox';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { createStaticNavigation, useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from '../components/styles';

function LoginScreen({ route }) {
  const navigation = useNavigation();

  const [emailV, setEmailV] = useState('');
  const [senhaV, setSenhaV] = useState('');

  const emailCadastro = route.params?.email;
  const senhaCadastro = route.params?.senha;

  async function validarLogin() {
    const senhaCorreta = await bcrypt.compare(senhaV, senhaCadastro);
    if (emailV == emailCadastro && senhaCorreta) {
      alert('Login realizado com sucesso');
      navigation.navigate('Home')
    } else {
      alert('Login ou senha incorretos');
    }
  }

  

  return (
    <ScrollView contentContainerStyle={styles.base}>
      <View style={styles.base}>

        <View style={styles.conteudo}>

          <Text style={styles.logo}>Allmosso</Text>

          <Text style={styles.tituloTela}>Bom te ver de novo.</Text>

          <Text style={styles.subtituloTela}>Entre para acompanhar seus pedidos e o prato do dia.</Text>

          <Text style={styles.campo}>E-mail</Text>
          <TextInput style={styles.input} placeholder="voce@email.com"
          value={emailV}
          onChangeText={setEmailV}
          keyboardType="email-address"
          autoCapitalize='none'
          />
          

          <Text style={styles.campo}>Senha</Text>

          <TextInput style={styles.input} placeholder='digita sua senha'
          value={senhaV}
          onChangeText={setSenhaV}
          secureTextEntry={true}
          /> 

          <Text style={styles.linkEsqueci}>Esqueci minha senha</Text>
        
        </View>

          <View style={styles.conteudoBotao}>
            <Button style={styles.botao} onPress={validarLogin}>
              <Text style={styles.textBotao}> Entrar </Text>
            </Button>

            <View style={styles.divisor}>
              <View style={styles.linhaDivisor} />
              <Text style={styles.textoDivisor}>ou</Text>
              <View style={styles.linhaDivisor} />
            </View>

            <View style={styles.linhaSociais}>
              <Button style={styles.botaoSocial}>
                <Text style={styles.textoBotaoSocial}> Google </Text>
              </Button>
              <Button style={styles.botaoSocial} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoBotaoSocial}> Entrar depois </Text>
              </Button>
            </View>
          </View>

          <View style={styles.rodapeConta}>
            <Text style={styles.textoRodapeConta}>
              Ainda não tem conta?{' '}
              <Text style={styles.linkRodape} onPress={()=> navigation.navigate('Cadastro')}>
                Criar agora
              </Text>
            </Text>
          </View>

      </View>
    </ScrollView>
  );
}

export default LoginScreen;