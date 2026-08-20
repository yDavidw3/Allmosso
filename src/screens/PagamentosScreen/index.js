import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { PAGAMENTOS } from '../../components/data';

// cada forma de pagamento é uma caixinha separada, com o quadradinho colorido do data.js
const CardPagamento = ({ tipo, icone, cor, descricao, vencimento, tag }) => (
  <View style={tag != '' ? [styles.cardPagamento, styles.cardEscolhido] : styles.cardPagamento}>
    <View style={[styles.quadrado, { backgroundColor: cor }]}>
      <Ionicons name={icone} size={22} color="#fff" />
    </View>
    <View style={styles.infoPagamento}>
      <Text style={styles.nomePagamento} numberOfLines={1}>{descricao}</Text>
      <Text style={styles.detalhesPagamento}>{tipo} • {vencimento}</Text>
    </View>
    {/* bolinha marcada na forma de pagamento que está como padrão */}
    <Ionicons
      name={tag != '' ? 'checkmark-circle' : 'ellipse-outline'}
      size={22}
      color={tag != '' ? '#007AFF' : '#CCCCCC'}
    />
  </View>
);

function PagamentosScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Formas de pagamento</Text>
        <Text style={styles.subtitulo}>Escolha como quer pagar o pedido</Text>
      </View>

      {/* a lista vem do PAGAMENTOS lá do data.js */}
      <FlatList
        data={PAGAMENTOS}
        renderItem={({ item }) => (
          <CardPagamento
            tipo={item.tipo}
            icone={item.icone}
            cor={item.cor}
            descricao={item.descricao}
            vencimento={item.vencimento}
            tag={item.tag}
          />
        )}
        keyExtractor={item => 'pag-' + item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default PagamentosScreen;
