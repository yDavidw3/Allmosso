import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

// cada botãozinho da barra. a prop tela tem que ser igual ao name do Stack.Screen
const ItemTab = ({ icone, texto, tela, ativo }) => {
  const navigation = useNavigation();
  const selecionado = ativo == tela;

  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={() => navigation.navigate(tela)}
    >
      {/* todo ícone do Ionicons tem 2 versões: home (cheio) e home-outline (vazado) */}
      <Ionicons
        name={selecionado ? icone : icone + '-outline'}
        size={22}
        color={selecionado ? '#000' : '#666'}
      />
      <Text style={selecionado ? [styles.tabTexto, styles.tabTextoAtivo] : styles.tabTexto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

// a prop ativo recebe o nome da tela do App.js pra saber qual aba destacar
function TabBar({ ativo }) {
  return (
    <View style={styles.tabBar}>
      <ItemTab icone="home" texto="Início" tela="Home" ativo={ativo} />
      <ItemTab icone="receipt" texto="Pedidos" tela="Pedidos" ativo={ativo} />
      <ItemTab icone="person" texto="Conta" tela="Conta" ativo={ativo} />
    </View>
  );
}

export default TabBar;
