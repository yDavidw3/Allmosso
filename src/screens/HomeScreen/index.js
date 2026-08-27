import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { DATA, RESTAURANTES, PRODUTOS_FILTRADOS } from '../../components/data';
import TabBar from '../../components/TabBar/index';
import { FontAwesome } from '@expo/vector-icons';

const ItemCategoria = ({ title, image }) => (
  <TouchableOpacity style={styles.itemCategoria}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.guiaRapido} />
    </View>
    <Text style={styles.titleCategoria}>{title}</Text>
  </TouchableOpacity>
);

const CardProduto = ({ nome, preco, image }) => (
  <TouchableOpacity style={styles.cardProduto}>
    <Image source={{ uri: image }} style={styles.fotoProduto} />
    <Text style={styles.nomeProduto} numberOfLines={2}>{nome}</Text>
    <Text style={styles.precoProduto}>{preco}</Text>
  </TouchableOpacity>
);

const CardRestaurante = ({ title, image, avaliacao, tempo, distancia, tag }) => (
  <TouchableOpacity style={styles.cardRestaurante}>
    <Image source={{ uri: image }} style={styles.fotoRestaurante} />
    <View style={styles.infoRestaurante}>
      <Text style={styles.nomeRestaurante} numberOfLines={1}>{title}</Text>
      <Text style={styles.detalhesRestaurante}>⭐ {avaliacao} • Grátis • {tempo} • {distancia}</Text>
      <View style={styles.tagPromocao}>
        <Text style={styles.textoTagPromocao}>{tag}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

function HomeScreen() {
  const navigation = useNavigation();

  function lidarComVoltar() {
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <View style={styles.textoDiario}>
        <Text style={styles.saudacao}>Boa noite, Admin</Text>
        <Text style={styles.endereco}>R. Feliciano de Mendonça, 290</Text>
        </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Pesquisa')}
      >
        <FontAwesome name="search" size={25} color="#0e0e0e" />
      </TouchableOpacity>
      </View>

      <View style={styles.cupomBox}>
        <Text style={styles.cupomTexto}>Você ganhou 2 meses grátis em cupons!</Text>
      </View>

      <View style={styles.listaHorizontalContainer}>
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemCategoria title={item.title} image={item.image} />
          )}
          keyExtractor={item => 'cat-' + item.id}
        />
      </View>

      <View style={styles.bannerContainer}>
        <Image 
          source={require('../../assets/banner.png')}
          style={styles.imagemBanner} 
        />
      </View>

      <View style={styles.secaoProdutos}>
        <Text style={styles.tituloSecao}>Peça de novo</Text>
        <FlatList
          data={PRODUTOS_FILTRADOS.slice(0, 4)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProduto nome={item.nome} preco={item.preco} image={item.image} />
          )}
          keyExtractor={item => 'prod-' + item.id}
          contentContainerStyle={styles.listaProdutosContent}
          ListFooterComponent={() => (
            <TouchableOpacity 
              style={styles.botaoVerMais}
              onPress={() => navigation.navigate('PaginaScreen')}
            >
              <Text style={styles.textoVerMais}>Ver mais</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Text style={styles.tituloSecao}>Restaurantes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <FlatList
        data={RESTAURANTES}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <CardRestaurante 
            title={item.title} 
            image={item.image} 
            avaliacao={item.avaliacao}
            tempo={item.tempo}
            distancia={item.distancia}
            tag={item.tag}
          />
        )}
        keyExtractor={item => 'rest-' + item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaVerticalContent}
      />

      <TabBar ativo="Home" />
    </View>
  );
}

export default HomeScreen;