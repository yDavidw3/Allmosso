import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { PRODUTOS_FILTRADOS } from '../../components/data';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function PesquisaScreen() {
    const navigation = useNavigation();
    const [categoria, setCategoria] = useState('vazio');

    function lidarComVoltar() {
        if(navigation.canGoBack()){
            navigation.goBack();
        }
    }

    const produtosFiltrados = categoria == 'vazio'
        ? PRODUTOS_FILTRADOS
        : PRODUTOS_FILTRADOS.filter(item => item.chave == categoria);

    return (
        <View style={styles.container}>
            <View style={styles.filtrosHeader}>
                <View style={styles.filtrosContainer}>
                    <Ionicons name="options-outline" size={18} color="#333" style={styles.filtroIcon} />
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(itemValue) => setCategoria(itemValue)}
                        style={styles.picker}
                        mode="dropdown"
                    >
                        <Picker.Item label="Filtros (Todos)" value="vazio" />
                        <Picker.Item label="Bebidas" value="bebidas" />
                        <Picker.Item label="Almoços" value="almoços" />
                        <Picker.Item label="Lanches" value="lanches" />
                    </Picker>
                </View>
            </View>

            <View style={styles.emAltaContainer}>
                <Text style={styles.emAltaTitulo}>Em alta</Text>
                <Ionicons name="flame" size={20} color="#FF4500" />
            </View>

            <FlatList
                data={produtosFiltrados}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.imagemEspaco}>
                            {item.image ? (
                                <Image source={{ uri: item.image }} style={styles.imagemProduto} />
                            ) : null}
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.itemNome} numberOfLines={2}>{item.nome}</Text>
                            <Text style={styles.itemTag}>Categoria: {item.chave}</Text>
                            <Text style={styles.itemPreco}>{item.preco}</Text>
                            <Text style={styles.freteGratis}>Use seu cumpom de 30%</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default PesquisaScreen;