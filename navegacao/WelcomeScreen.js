import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

import { styles } from '../components/styles';

function WelcomeScreen() {
  const navigation = useNavigation();
  const personagemUri = null;

  return (
    <View style={styles.welcomeBase}>
      <View style={styles.welcomeTopo}>
        {personagemUri ? (
          <Image source={{ uri: personagemUri }} style={styles.welcomeImagem} resizeMode="contain" />
        ) : (
          <Text style={styles.placeholderTexto}>Personagem</Text>
        )}
      </View>

      <View style={styles.welcomeMeio}>
        <Text style={styles.welcomeLogo}>Allmosso</Text>
        <Text style={styles.welcomeFrase}>Um bom almoço para todos os gostos.</Text>

        <View style={styles.welcomeDots}>
          <View style={[styles.dot, styles.dotAtivo]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.welcomeRodape}>
        <Button style={styles.botaoPrincipal} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoBotaoPrincipal}> Entrar </Text>
        </Button>

        <Text style={styles.linkCadastrar} onPress={() => navigation.navigate('Cadastro')}>
          Cadastrar
        </Text>
      </View>
    </View>
  );
}

export default WelcomeScreen;