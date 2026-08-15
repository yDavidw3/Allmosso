import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Checkbox from 'expo-checkbox';
import bcrypt from 'bcryptjs';

function SingupScreen() {
  const navigation = useNavigation();

  function lidarComVoltar() {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarSenha(senha) {
    return senha.length >= 8;
  }

  function validarConfSenha(senha, confSenha) {
    return senha == confSenha;
  }

  function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(nome);
  }

  function validarSobrenome(sobrenome) {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(sobrenome);
  }

  function validarNum(num) {
    const apenasNumeros = num.replace(/\D/g, '');
    return apenasNumeros.length == 11;
  }

  function avancarParaSenha() {
    if (validarEmail(email)) {
      setEtapa(2);
    } else {
      alert('Por favor, insira um e-mail válido!');
    }
  }

  function avancarParaDados() {
    const senhaValida = validarSenha(senha);
    const confSenhaValida = validarConfSenha(senha, confSenha);

    if (senhaValida && confSenhaValida && termoUso) {
      setEtapa(3);
    } else if (!senhaValida) {
      alert("A senha precisa ter no mínimo 8 caracteres!");
    } else if (!confSenhaValida) {
      alert("As senhas não coincidem!");
    } else if (!termoUso) {
      alert("Você precisa aceitar os termos de uso!");
    }
  }

  async function validarCadastro() {
    const nomeValido = validarNome(nome);
    const sobrenomeValido = validarSobrenome(sobrenome);
    const numValido = validarNum(num);

    if (nomeValido && sobrenomeValido && numValido) {
      const senhaHash = await bcrypt.hash(senha, 10);
      alert("cadastro realizado");
      navigation.navigate('Home');
    } else if (!nomeValido) {
      alert("Por favor, preencha o primeiro nome corretamente!");
    } else if (!sobrenomeValido) {
      alert("Por favor, preencha o sobrenome corretamente!");
    } else if (!numValido) {
      alert("O número de telefone precisa ter 11 dígitos!");
    }
  }

  const [etapa, setEtapa] = useState(1);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [termoUso, setTermoUso] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [num, setNum] = useState('');
  const [cpf, setCpf] = useState('');

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
            onPress={avancarParaSenha}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {etapa == 2 && (
        <View style={styles.telaSenha}>
          <View style={styles.superior}>
            <Text style={styles.text}>Defina uma senha</Text>
            <TextInput
              style={styles.campo}
              placeholder='Senha'
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.campo}
              placeholder='Confirmar senha'
              value={confSenha}
              onChangeText={setConfSenha}
              secureTextEntry={true}
            />

            <View style={styles.termos}>
                <Checkbox 
                  style={styles.checkTermo}
                  value={termoUso}
                  onValueChange={setTermoUso}
                />
                <Text style={styles.textTermo}>Aceito os termos de uso e concordo com a política de privacidade</Text>
            </View>

          </View>
          <View style={styles.infeior}>
            <TouchableOpacity
            style={styles.button}
            onPress={avancarParaDados}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {etapa == 3 && (
        <View style={styles.telaDados}>
          <View style={styles.superior}>
            <Text style={styles.text}>Finalize seu cadastro</Text>
            <TextInput
              style={styles.campo}
              placeholder='Primeiro nome'
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.campo}
              placeholder='Sobrenome'
              value={sobrenome}
              onChangeText={setSobrenome}
            />
            <TextInput
              style={styles.campo}
              placeholder='Celular (DDD + Número)'
              value={num}
              onChangeText={setNum}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.campo}
              placeholder='CPF (Opcional)'
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infeior}>
            <TouchableOpacity
            style={styles.button}
            onPress={validarCadastro}
            >
              <Text style={styles.buttonText}>Finalizar Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}

export default SingupScreen;
