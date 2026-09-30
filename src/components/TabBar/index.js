import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { styles } from './styles';

const ItemTab = ({ Icone, iconeAtivo, iconeInativo, texto, tela, ativo }) => {
  const navigation = useNavigation();
  const selecionado = ativo == tela;

  return (
    <TouchableOpacity
      style={styles.tabItem}
      // replace troca a aba sem empilhar tela nova (senão o voltar passa por todas as abas)
      onPress={() => {
        if (!selecionado) {
          navigation.replace(tela);
        }
      }}
    >
      <Icone
        name={selecionado ? iconeAtivo : iconeInativo}
        size={28}
        color={selecionado ? '#000' : '#666'}
      />
      <Text style={selecionado ? [styles.tabTexto, styles.tabTextoAtivo] : styles.tabTexto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

function TabBar({ ativo }) {
  return (
    <View style={styles.tabBar}>
      <ItemTab Icone={Octicons} iconeAtivo="home-fill" iconeInativo="home" texto="Início" tela="Home" ativo={ativo} />
      <ItemTab Icone={Ionicons} iconeAtivo="receipt" iconeInativo="receipt-outline" texto="Pedidos" tela="Pedidos" ativo={ativo} />
      <ItemTab Icone={Octicons} iconeAtivo="person-fill" iconeInativo="person" texto="Conta" tela="Conta" ativo={ativo} />
    </View>
  );
}

export default TabBar;