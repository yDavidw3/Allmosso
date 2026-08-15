import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const listaUsuarios = [
  { email: 'admin@email.com', senha: 'teste123' },
];


function LoginScreen() {
  const navigation = useNavigation();

  function testarLogin(){
    const usuarioExiste = listaUsuarios.find(
      (user) => user.email == email && user.senha == senha
    )

    if(usuarioExiste){
      alert('Logado com sucesso!');
      navigation.navigate('Home');
    }else{
      alert('*E-mail ou senha incorretos*');
    }
  }

  function lidarComVoltar() {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  const [etapa, setEtapa] = useState(1);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return(
    <View style={styles.container}>
      {etapa == 1 && (
        <View style={styles.telaEmail}>
          <View style={styles.superior}>
            <Text style={styles.text}>Qual o seu e-mail?</Text>
            <TextInput
              style={styles.campo}
              placeholder='E-mail'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.infeior}>
            <Text style={styles.info}>O Allmosso poderá enviar comunicações neste e-mail, pra cancelar a inscrição acesse "Configurações".</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => setEtapa(2)}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {etapa == 2 && (
        <View style={styles.telaSenha}>
          <View style={styles.superior}>
            <Text style={styles.text}>Qual a sua senha?</Text>
            <TextInput
              style={styles.campo}
              placeholder='Senha'
              value={senha}
              onChangeText={setSenha}
            />
          </View>
          <View style={styles.infeior}>
            <TouchableOpacity
            style={styles.button}
            onPress={testarLogin}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}

export default LoginScreen;