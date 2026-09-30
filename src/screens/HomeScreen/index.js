import { useState } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { DATA, RESTAURANTES, PRODUTOS_FILTRADOS, CUPONS_INICIAIS, RESTAURANTES_POPULARES } from '../../components/data';
import TabBar from '../../components/TabBar/index';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';


const ItemCategoria = ({ title, image }) => (
  <TouchableOpacity style={styles.itemCategoria}>
    <View style={styles.imageContainer}>
      <Image 
      source={image} 
      style={styles.guiaRapido} />
    </View>
    <Text style={styles.titleCategoria}>{title}</Text>
  </TouchableOpacity>
);

const CardCupom = ({ image }) => (
  <TouchableOpacity style={styles.cardCupom}>
    <Image 
      source={image}
      style={styles.cupomImage}
    />
  </TouchableOpacity>
);

const RestaurantePopular = ({ image }) => (
  <TouchableOpacity style={styles.restaurantePouplarCard}>
    <Image 
      source={image}
      style={styles.popularImage}
    />
  </TouchableOpacity>
);

const CardProduto = ({ nome, preco, image, onPress }) => (
  <TouchableOpacity style={styles.cardProduto} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.fotoProduto} />
    <Text style={styles.precoProduto}>{preco}</Text>
    <Text style={styles.nomeProduto} numberOfLines={2}>{nome}</Text>
    
  </TouchableOpacity>
);

const CardRestaurante = ({ title, image, avaliacao, tempo, distancia, tag }) => (
  <TouchableOpacity style={styles.cardRestaurante}>
    <Image source={{ uri: image }} style={styles.fotoRestaurante} />
    <View style={styles.infoRestaurante}>
      <Text style={styles.nomeRestaurante} numberOfLines={1}>{title}</Text>
      <Text style={styles.detalhesRestaurante}>⭐ {avaliacao} • Grátis • {tempo} • {distancia}</Text>
      <Text style={styles.textoTagPromocao}>{tag}</Text>
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

  const [modalVisible, setModalVisible] = useState(false);

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <View style={styles.itemHeader}>
          <View style={styles.paraleloHeader}>
            <View style={styles.location}>
            <FontAwesome name="map-marker" size={14} color="#000000" style={styles.local}/>
            <Text style={styles.endereco}>R. Feliciano de Mendonça, 290</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/logo.png')}
                style={styles.logoImage} 
              />
            </View>
      </View>

      <View style={styles.caixaPesquisa}>

        <TouchableOpacity
        onPress={() => navigation.navigate('Pesquisa')}
        >
        
        <View style={styles.inputPesquisa}>
        <FontAwesome name="search" size={15} color="#8e8e93" style={styles.lupa}/>

        <TextInput
        style={styles.pesquisa}
        placeholder='Busca...'
        onPress={() => navigation.navigate('Pesquisa')}
        />
        </View>
        </TouchableOpacity>
      </View>
      </View>
      </View>

    <View style={styles.section}>

      <View style={styles.listaHorizontalContainer}>
        <FlatList
          data={DATA.slice(0,5)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemCategoria title={item.title} image={item.image} />
          )}
          keyExtractor={item => 'cat-' + item.id}
        />
      </View>

      <View style={styles.listaHorizontalContainer}>
        <FlatList
          data={DATA.slice(5,10)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemCategoria title={item.title} image={item.image} />
          )}
          keyExtractor={item => 'cat-' + item.id}
        />
      </View>

      <View style={styles.cupomSection}>
        <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.cupomTitle}>Até R$100 OFF para você!</Text>
        <View style={styles.cupomTexto}>
          <View style={styles.descricaoCupom}>
            <MaterialCommunityIcons name="moped" size={15} color="#ffcc00" />
            <Text style={styles.textoCupom}>Entrega grátis</Text>
          </View>

          <View style={styles.descricaoCupom}>
            <MaterialCommunityIcons name="map-marker" size={15} color="#ffcc00" />
            <Text style={styles.textoCupom}>Entrega rastreável</Text>
          </View>

          <View style={styles.descricaoCupom}>
            <MaterialCommunityIcons name="clock" size={15} color="#ffcc00" />
            <Text style={styles.textoCupom}>Horário garantido</Text>
          </View>
        </View>
        <View style={styles.cupom}>
          <Image 
            source={require('../../assets/cupom30.png')}
            style={styles.imagemCupom} 
          />
        </View>

        </TouchableOpacity>
      </View>

      <View style={styles.secaoCupons}>
        <FlatList
          data={CUPONS_INICIAIS}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardCupom image={item.image} />
          )}
          keyExtractor={item => 'cup-' + item.id}
          contentContainerStyle={styles.listaCuponsContent}
        />
      </View>

      <View style={styles.secaoProdutos}>
        <View style={styles.tituloPromocao}>
        <Text style={styles.tituloSecao}>Ofertas do dia</Text>
        <TouchableOpacity>
          <Text style={styles.subTituloSecao}>Até 60% OFF
            <Entypo name="chevron-right" size={15} color="#8e8e93" />
          </Text>
        </TouchableOpacity>
        </View>

        <FlatList
          data={PRODUTOS_FILTRADOS.slice(0, 4)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProduto
              nome={item.nome}
              preco={item.preco}
              image={item.image}
              onPress={() => navigation.navigate('Produto', { produto: item })}
            />
          )}
          keyExtractor={item => 'prod-' + item.id}
          contentContainerStyle={styles.listaProdutosContent}
          ListFooterComponent={() => (
            <TouchableOpacity 
              style={styles.botaoVerMais}
              onPress={() => navigation.navigate('Pesquisa')}
            >
              <View style={styles.verMais}>
                <Entypo name="chevron-right" size={20} color="#8e8e93"/>
                <Text style={styles.textoVerMais}>Mais</Text>
              </View>

            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.secaoProdutos}>
        <View style={styles.tituloPromocao}>
        <Text style={styles.tituloSecao}>Marcas populares</Text>
        <TouchableOpacity>
          <Text style={styles.subTituloSecao}>
            <Entypo name="chevron-right" size={15} color="#8e8e93" />
          </Text>
        </TouchableOpacity>
        </View>

        <FlatList
          data={RESTAURANTES_POPULARES}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <RestaurantePopular image={item.image} />
          )}
          keyExtractor={item => 'pop-' + item.id}
          contentContainerStyle={styles.listaPopularesContent}
        />
      </View>

    <ScrollView 
    style={styles.escolhaSection}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 35 }}
    >
        <View style={styles.filtroSecao}>
          <TouchableOpacity style={styles.filtroItem}>
            <Text style={styles.textoFiltro}>Ordenar</Text>
            <Entypo name="chevron-down" size={15} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.filtroSecao}>
          <TouchableOpacity style={styles.filtroItem}>
            <Ionicons name="card" size={15} color="#000000" />
            <Text style={styles.textoFiltro}>VR/VA</Text>
            <Entypo name="chevron-down" size={15} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.filtroSecao}>
          <TouchableOpacity style={styles.filtroItem}>
            <MaterialIcons name="delivery-dining" size={22} color="#000000" />
            <Text style={styles.textoFiltro}>Entrega Grátis</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filtroSecao}>
          <TouchableOpacity style={styles.filtroItem}>
            <MaterialIcons name="discount" size={20} color="black" />
            <Text style={styles.textoFiltro}>Ofertas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filtroSecao}>
          <TouchableOpacity style={styles.filtroItem}>
            <Text style={styles.textoFiltro}>Novidades</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>

      </View>
    </View>

  );

  return (
    <View style={styles.container}>

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

      <Modal 
      animationType='slide'
      visible={modalVisible} 
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}
      >
        <View style={styles.overlay}>
          <View style={styles.conteudo}>
            <Text style={styles.tituloModal}>Promoção De Boas-Vindas!</Text>
            <Text style={styles.subTituloModal}>Resgatado: 30% OFF em até R$25</Text>

            <TouchableOpacity
            onPress={() => {
              setModalVisible(false)
            }}>
              <Text style={{ color: 'red', marginTop: 25 }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default HomeScreen;