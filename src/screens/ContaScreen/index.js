import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import TabBar from '../../components/TabBar/index';

// cada linha do menu de configurações. a prop tela é o name do Stack.Screen
const Opcao = ({ icone, texto, tela }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.opcao}
      onPress={() => {
        // as opções que ainda não têm tela pronta não fazem nada
        if (tela) {
          navigation.navigate(tela);
        }
      }}
    >
      <Ionicons name={icone} size={20} color="#444" />
      <Text style={styles.textoOpcao}>{texto}</Text>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
};

function ContaScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* ScrollView pra tela rolar caso a gente adicione mais opções depois */}
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={34} color="#fff" />
          </View>
          <Text style={styles.nome}>Admin</Text>
          <Text style={styles.email}>admin@email.com</Text>
        </View>

        <Opcao icone="location-outline" texto="Meus endereços" tela="Enderecos" />
        <Opcao icone="card-outline" texto="Formas de pagamento" tela="Pagamentos" />
        <Opcao icone="pricetag-outline" texto="Cupons" tela="Cupons" />
        <Opcao icone="notifications-outline" texto="Notificações" />
        <Opcao icone="help-circle-outline" texto="Ajuda" />
        <Opcao icone="information-circle-outline" texto="Sobre" tela="Desenvolvedores" />

        {/* sair volta pra primeira tela do app */}
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.textoSair}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>

      <TabBar ativo="Conta" />
    </View>
  );
}

export default ContaScreen;
