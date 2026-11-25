import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { listarEnderecos, excluirEndereco } from '../../database/db';

// cada linha da lista de endereços. tocar no card abre a edição, a lixeira apaga
const CardEndereco = ({ apelido, icone, cor, rua, complemento, tag, onEditar, onExcluir }) => (
  <TouchableOpacity style={styles.cardEndereco} onPress={onEditar}>
    <View style={[styles.bolinha, { backgroundColor: cor }]}>
      <Ionicons name={icone} size={20} color="#fff" />
    </View>
    <View style={styles.infoEndereco}>
      <View style={styles.linhaTitulo}>
        <Text style={styles.nomeEndereco} numberOfLines={1}>{apelido}</Text>
        {/* a tag só aparece no endereço que está marcado como padrão */}
        {!!tag && (
          <View style={styles.tagEndereco}>
            <Ionicons name="checkmark" size={11} color="#007AFF" />
            <Text style={styles.textoTagEndereco}>{tag}</Text>
          </View>
        )}
      </View>
      <Text style={styles.detalhesEndereco}>{rua}</Text>
      <Text style={styles.complementoEndereco}>{complemento}</Text>
    </View>
    <TouchableOpacity onPress={onExcluir} style={styles.botaoExcluir}>
      <Ionicons name="trash-outline" size={20} color="#FF3B30" />
    </TouchableOpacity>
  </TouchableOpacity>
);

function EnderecosScreen({ navigation }) {
  const [enderecos, setEnderecos] = useState([]);

  // READ: pega todos os endereços do banco e coloca no estado (a FlatList redesenha sozinha)
  const carregar = async () => {
    const lista = await listarEnderecos();
    setEnderecos(lista);
  };

  // useFocusEffect roda toda vez que a tela volta a aparecer,
  // então depois de salvar no formulário a lista já vem atualizada
  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  // DELETE: apaga pelo id e recarrega a lista
  const excluir = async (id) => {
    await excluirEndereco(id);
    carregar();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Meus endereços</Text>
        <Text style={styles.subtitulo}>Escolha onde quer receber o pedido</Text>
      </View>

      {/* a lista agora vem da tabela enderecos do SQLite */}
      <FlatList
        data={enderecos}
        renderItem={({ item }) => (
          <CardEndereco
            apelido={item.apelido}
            icone={item.icone}
            cor={item.cor}
            rua={item.rua}
            complemento={item.complemento}
            tag={item.tag}
            // manda só o id pro formulário; ele busca o resto no banco
            onEditar={() => navigation.navigate('EnderecoForm', { id: item.id })}
            onExcluir={() => excluir(item.id)}
          />
        )}
        keyExtractor={item => 'end-' + item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum endereço cadastrado.</Text>}
      />

      {/* sem id = formulário abre em modo de cadastro */}
      <TouchableOpacity style={styles.botaoNovo} onPress={() => navigation.navigate('EnderecoForm')}>
        <Ionicons name="add" size={20} color="#1C1C1E" />
        <Text style={styles.textoBotaoNovo}>Novo endereço</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EnderecosScreen;
