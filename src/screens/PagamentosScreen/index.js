import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { listarPagamentos, excluirPagamento } from '../../database/db';

// cada forma de pagamento é uma caixinha separada. tocar abre a edição, a lixeira apaga
const CardPagamento = ({ tipo, icone, cor, descricao, vencimento, tag, onEditar, onExcluir }) => (
  <TouchableOpacity
    style={tag ? [styles.cardPagamento, styles.cardEscolhido] : styles.cardPagamento}
    onPress={onEditar}
  >
    <View style={[styles.quadrado, { backgroundColor: cor }]}>
      <Ionicons name={icone} size={22} color="#fff" />
    </View>
    <View style={styles.infoPagamento}>
      <Text style={styles.nomePagamento} numberOfLines={1}>{descricao}</Text>
      <Text style={styles.detalhesPagamento}>{tipo} • {vencimento}</Text>
    </View>
    {/* bolinha marcada na forma de pagamento que está como padrão */}
    <Ionicons
      name={tag ? 'checkmark-circle' : 'ellipse-outline'}
      size={22}
      color={tag ? '#007AFF' : '#CCCCCC'}
    />
    <TouchableOpacity onPress={onExcluir} style={styles.botaoExcluir}>
      <Ionicons name="trash-outline" size={20} color="#FF3B30" />
    </TouchableOpacity>
  </TouchableOpacity>
);

function PagamentosScreen({ navigation }) {
  const [pagamentos, setPagamentos] = useState([]);

  // READ: busca as formas de pagamento no banco e joga no estado
  const carregar = async () => {
    const lista = await listarPagamentos();
    setPagamentos(lista);
  };

  // recarrega sempre que a tela volta a aparecer (ex: depois de salvar no formulário)
  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  // DELETE: apaga pelo id e recarrega a lista
  const excluir = async (id) => {
    await excluirPagamento(id);
    carregar();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Formas de pagamento</Text>
        <Text style={styles.subtitulo}>Escolha como quer pagar o pedido</Text>
      </View>

      {/* a lista agora vem da tabela pagamentos do SQLite */}
      <FlatList
        data={pagamentos}
        renderItem={({ item }) => (
          <CardPagamento
            tipo={item.tipo}
            icone={item.icone}
            cor={item.cor}
            descricao={item.descricao}
            vencimento={item.vencimento}
            tag={item.tag}
            // manda só o id; o formulário busca o resto no banco
            onEditar={() => navigation.navigate('PagamentoForm', { id: item.id })}
            onExcluir={() => excluir(item.id)}
          />
        )}
        keyExtractor={item => 'pag-' + item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma forma de pagamento cadastrada.</Text>}
      />

      {/* sem id = formulário abre em modo de cadastro */}
      <TouchableOpacity style={styles.botaoNovo} onPress={() => navigation.navigate('PagamentoForm')}>
        <Ionicons name="add" size={20} color="#1C1C1E" />
        <Text style={styles.textoBotaoNovo}>Nova forma de pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PagamentosScreen;
