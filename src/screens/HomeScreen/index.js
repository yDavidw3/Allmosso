import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { DATA, RESTAURANTES } from '../../components/data';

const ItemCategoria = ({ title, image }) => (
  <View style={styles.itemCategoria}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.guiaRapido} />
    </View>
    <Text style={styles.titleCategoria}>{title}</Text>
  </View>
);

const CardRestaurante = ({ title, image, avaliacao, tempo, distancia, tag }) => (
  <View style={styles.cardRestaurante}>
    <Image source={{ uri: image }} style={styles.fotoRestaurante} />
    <View style={styles.infoRestaurante}>
      <Text style={styles.nomeRestaurante} numberOfLines={1}>{title}</Text>
      <Text style={styles.detalhesRestaurante}>⭐ {avaliacao} • Grátis • {tempo} • {distancia}</Text>
      <View style={styles.tagPromocao}>
        <Text style={styles.textoTagPromocao}>{tag}</Text>
      </View>
    </View>
  </View>
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
        <Text style={styles.saudacao}>Boa noite, Admin</Text>
        <Text style={styles.endereco}>R. Feliciano de Mendonça, 290</Text>
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
          source={{ uri: 'https://placeholder.com' }} 
          style={styles.imagemBanner} 
        />
      </View>
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

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Image 
            source={{ uri: 'https://flaticon.com' }} 
            style={[styles.tabIcone, { tintColor: '#000' }]} 
          />
          <Text style={[styles.tabTexto, styles.tabTextoAtivo]}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Pedidos')}>
          <Image 
            source={{ uri: 'https://flaticon.com' }} 
            style={[styles.tabIcone, { tintColor: '#666' }]} 
          />
          <Text style={styles.tabTexto}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Image 
            source={{ uri: 'https://flaticon.com' }} 
            style={[styles.tabIcone, { tintColor: '#666' }]} 
          />
          <Text style={styles.tabTexto}>Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
