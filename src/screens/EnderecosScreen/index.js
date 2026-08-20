import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { ENDERECOS } from '../../components/data';

// cada linha da lista de endereços. o ícone e a cor da bolinha vêm do data.js
const CardEndereco = ({ apelido, icone, cor, rua, complemento, tag }) => (
  <View style={styles.cardEndereco}>
    <View style={[styles.bolinha, { backgroundColor: cor }]}>
      <Ionicons name={icone} size={20} color="#fff" />
    </View>
    <View style={styles.infoEndereco}>
      <View style={styles.linhaTitulo}>
        <Text style={styles.nomeEndereco} numberOfLines={1}>{apelido}</Text>
        {/* a tag só aparece no endereço que está marcado como padrão */}
        {tag != '' && (
          <View style={styles.tagEndereco}>
            <Ionicons name="checkmark" size={11} color="#007AFF" />
            <Text style={styles.textoTagEndereco}>{tag}</Text>
          </View>
        )}
      </View>
      <Text style={styles.detalhesEndereco}>{rua}</Text>
      <Text style={styles.complementoEndereco}>{complemento}</Text>
    </View>
  </View>
);

function EnderecosScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Meus endereços</Text>
        <Text style={styles.subtitulo}>Escolha onde quer receber o pedido</Text>
      </View>

      {/* a lista vem do ENDERECOS lá do data.js */}
      <FlatList
        data={ENDERECOS}
        renderItem={({ item }) => (
          <CardEndereco
            apelido={item.apelido}
            icone={item.icone}
            cor={item.cor}
            rua={item.rua}
            complemento={item.complemento}
            tag={item.tag}
          />
        )}
        keyExtractor={item => 'end-' + item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default EnderecosScreen;
