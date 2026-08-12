import { StatusBar } from 'expo-status-bar';
import bcrypt from 'bcryptjs';
import Checkbox from 'expo-checkbox';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { createStaticNavigation, useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from '../components/styles';

function CadastroScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [senha, setSenha] = useState('');
  const [ confSenha, setConfSenha] = useState('');
  const [termoUso, setTermoUso] = useState(false);
  

  function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/

    return regex.test(nome);
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }

  function validarNum(num) {
  const apenasNumeros = num.replace(/\D/g, '');

  return apenasNumeros.length === 11;
  }

  function validarSenha(senha) {
    return senha.length >= 8;
  }

  function validarConfSenha(senha, confSenha) {
    return senha == confSenha;
  }

  async function validarCadastro() {
    const nomeValido = validarNome(nome);
    const emailValido = validarEmail(email);
    const numValido = validarNum(num);
    const senhaValida = validarSenha(senha);
    const confSenhaValida = validarConfSenha(senha, confSenha);
    

    if (nomeValido && emailValido && numValido && senhaValida && confSenhaValida && termoUso) {
      const senhaHash = await bcrypt.hash(senha, 10);
      const usuario = {
        nome,
        email,
        num,
        senha: senhaHash
      };
      alert("cadastro realizado");
      navigation.navigate('Login', {email: email, senha: senhaHash})
    } else {
    alert("dados inválidos!!!");
    }

  }
  
  return (
    <ScrollView contentContainerStyle={styles.base}>
      <View style={styles.base}>

        <View style={styles.header}>
          <Text style={styles.headerVoltar} onPress={() => navigation.goBack()}>‹</Text>
          <Text style={styles.headerTitulo}>Criar conta</Text>
        </View>

        <View style={styles.conteudo}>

          <View style={styles.contaT}>
              <Text style={styles.textCad}>Uma conta guarda seus pedidos e avisa quando sai a feijoada.</Text>
          </View>

          <Text style={styles.campo}>Nome completo</Text>
          <TextInput style={styles.input} placeholder='Charles Marc Hervé Perceval Leclerc'
          value={nome}
          onChangeText={setNome}
          />
          

          <Text style={styles.campo}>Email</Text>
          <TextInput style={styles.input} placeholder="voce@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize='none'
          />
          

          <Text style={styles.campo}>Celular</Text>
          <TextInput style={styles.input} placeholder='(11) 94002-8922'
          value={num}
          onChangeText={setNum}
          keyboardType="phone-pad"
          />
          

          <Text style={styles.campo}>Senha</Text>
          <TextInput style={styles.input} placeholder='Mínimo 8 caracteres'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          />

          <Text style={styles.campo}>Confirmar Senha</Text>
          <TextInput style={styles.input} placeholder='Repita a senha'
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry={true}
          />

          <View style={styles.termos}>
            <Checkbox  style={styles.checkTermo}
            value={termoUso}
            onValueChange={setTermoUso}
            />
            <Text style={styles.textTermo}>Aceito os termos de uso e quero receber o cardápio da semana no WhatsApp.</Text>
          </View>
        </View>  

        <View style={styles.conteudoBotao}>
          <Button style={styles.botao} onPress={validarCadastro}>
            <Text style={styles.textBotao}> Criar minha conta </Text>
          </Button>
        </View>

        <View style={styles.rodapeConta}>
          <Text style={styles.textoRodapeConta}>
            Já tem conta?{' '}
            <Text style={styles.linkRodape} onPress={() => navigation.navigate('Login')}>
              Entrar
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default CadastroScreen;