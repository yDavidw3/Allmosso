import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { PEDIDOS } from '../../components/data';
import TabBar from '../../components/TabBar/index';

// cada linha da lista de pedidos
const CardPedido = ({ restaurante, itens, valor, data, status }) => (
  <View style={styles.cardPedido}>
    <View style={styles.infoPedido}>
      <Text style={styles.nomePedido} numberOfLines={1}>{restaurante}</Text>
      <Text style={styles.detalhesPedido}>{itens} • {valor}</Text>
      <Text style={styles.dataPedido}>{data}</Text>
    </View>
    <View style={styles.tagStatus}>
      <Text style={styles.textoTagStatus}>{status}</Text>
    </View>
  </View>
);

function PedidosScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Meus pedidos</Text>
        <Text style={styles.subtitulo}>Acompanhe os seus pedidos por aqui</Text>
      </View>

      {/* a lista vem do PEDIDOS lá do data.js */}
      <FlatList
        data={PEDIDOS}
        renderItem={({ item }) => (
          <CardPedido
            restaurante={item.restaurante}
            itens={item.itens}
            valor={item.valor}
            data={item.data}
            status={item.status}
          />
        )}
        keyExtractor={item => 'ped-' + item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaVerticalContent}
      />

      {/* ativo="Pedidos" deixa essa aba destacada */}
      <TabBar ativo="Pedidos" />
    </View>
  );
}

export default PedidosScreen;
