import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { CUPONS } from '../../components/data';

// cada cupom é um cartãozinho de borda tracejada, imitando um ticket de papel
const CardCupom = ({ codigo, descricao, validade, tag }) => {
  const expirado = tag == 'Expirado';

  return (
    <View style={expirado ? [styles.cardCupom, styles.cardExpirado] : styles.cardCupom}>
      <View style={expirado ? [styles.selo, styles.seloExpirado] : styles.selo}>
        <Ionicons name="ticket" size={22} color={expirado ? '#999' : '#F57F17'} />
      </View>

      <View style={styles.infoCupom}>
        <Text style={expirado ? [styles.codigoCupom, styles.textoApagado] : styles.codigoCupom}>
          {codigo}
        </Text>
        <Text style={styles.detalhesCupom}>{descricao}</Text>

        {/* a linha de baixo troca de ícone e de cor quando o cupom vence */}
        <View style={styles.linhaStatus}>
          <Ionicons
            name={expirado ? 'close-circle' : 'checkmark-circle'}
            size={13}
            color={expirado ? '#999' : '#00A86B'}
          />
          <Text style={expirado ? [styles.textoStatus, styles.textoApagado] : [styles.textoStatus, styles.textoStatusAtivo]}>
            {tag} • {validade}
          </Text>
        </View>
      </View>
    </View>
  );
};

function CuponsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.titulo}>Cupons</Text>
        <Text style={styles.subtitulo}>Use na hora de fechar o pedido</Text>
      </View>

      {/* a lista vem do CUPONS lá do data.js */}
      <FlatList
        data={CUPONS}
        renderItem={({ item }) => (
          <CardCupom
            codigo={item.codigo}
            descricao={item.descricao}
            validade={item.validade}
            tag={item.tag}
          />
        )}
        keyExtractor={item => 'cup-' + item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CuponsScreen;
