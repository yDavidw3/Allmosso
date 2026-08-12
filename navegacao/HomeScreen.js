import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Button } from '@react-navigation/elements';

import { styles } from '../components/styles';

const cardapio = [
  { id: '1', titulo: 'Marmita', descricao: 'Pequena, média ou família, você escolhe.', preco: 'R$ 22', imagem: null },
  { id: '2', titulo: 'Buffet livre', descricao: 'Doze quentes, saladas e sobremesa.', preco: 'R$ 45', imagem: null },
];

const pratoDoDia = [
  { id: '1', dia: 'Seg', nome: 'Frango com quiabo' },
  { id: '2', dia: 'Ter', nome: 'Escondidinho' },
  { id: '3', dia: 'Qua', nome: 'Peixe na telha' },
  { id: '4', dia: 'Qui', nome: 'Bife acebolado' },
  { id: '5', dia: 'Sex', nome: 'Virado à paulista' },
  { id: '6', dia: 'Sáb', nome: 'Feijoada completa', destaque: true },
];

const fachadaUri = null;

function CardItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={[styles.cardImagem, styles.placeholderBox]}>
        {item.imagem ? (
          <Image source={{ uri: item.imagem }} style={styles.welcomeImagem} resizeMode="cover" />
        ) : (
          <Text style={styles.placeholderTexto}>{item.titulo}</Text>
        )}
      </View>
      <View style={styles.cardConteudo}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardDescricao}>{item.descricao}</Text>
        <Text style={styles.cardPreco}>{item.preco}</Text>
      </View>
    </View>
  );
}

function DiaItem({ item }) {
  return (
    <View style={[styles.diaLinha, item.destaque && styles.diaLinhaDestaque]}>
      <Text
        dataDetectorType="none"
        style={[styles.diaLabel, item.destaque && styles.diaLabelDestaque]}
      >
        {item.dia}
      </Text>
      <Text
        dataDetectorType="none"
        style={[styles.diaTexto, item.destaque && styles.diaTextoDestaque]}
      >
        {item.nome}
      </Text>
    </View>
  );
}

function HomeHeader() {
  return (
    <View>
      <View style={styles.homeTopo}>
        <Text style={styles.homeLogo}>Allmosso</Text>
      </View>

      <View style={styles.homeCards}>
        <FlatList
          data={cardapio}
          renderItem={({ item }) => <CardItem item={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.pratoSecao}>
        <Text style={styles.pratoTitulo}>O prato do dia</Text>
      </View>
    </View>
  );
}

function HomeFooter() {
  return (
    <View>
      <View style={styles.enderecoSecao}>
        <View style={[styles.enderecoImagem, styles.placeholderBox]}>
          {fachadaUri ? (
            <Image source={{ uri: fachadaUri }} style={styles.welcomeImagem} resizeMode="cover" />
          ) : (
            <Text style={styles.placeholderTexto}>Fachada</Text>
          )}
        </View>

        <Text style={styles.enderecoRua}>Rua das Palmeiras, 128</Text>
        <Text style={styles.enderecoInfo}>Centro · Seg a sáb, 11h às 15h</Text>

        <Button style={styles.botaoMapa}>
          <Text style={styles.botaoMapaTexto}>Ver no mapa</Text>
        </Button>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTitulo}>Allmosso</Text>
        <Text style={styles.rodapeSubtitulo}>Um bom almoço para todos os gostos.</Text>

        <Button style={styles.botaoWhatsapp}>
          <Text style={styles.botaoWhatsappTexto}>Chamar no WhatsApp</Text>
        </Button>
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={styles.homeBase}
      data={pratoDoDia}
      renderItem={({ item }) => <DiaItem item={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={HomeHeader}
      ListFooterComponent={HomeFooter}
    />
  );
}

export default HomeScreen;