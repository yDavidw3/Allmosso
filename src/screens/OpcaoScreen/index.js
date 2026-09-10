import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../OpcaoScreen/styles';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function OpcaoScreen() {
    const navigation = useNavigation();

    function lidarComVoltar() {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    const [checkbox, setCheckbox] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isBoxChecked, setIsBoxChecked] = useState(false);
    const [checkedValue, setCheckedValue] = useState(false);

    const opcoes = () => {
        return(
                <View style={styles.superior}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Preferências</Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.coluna}>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setCheckbox(!checkbox)}
                            >
                                <Text style={styles.textCheck}>Prefiro restaurantes mais próximos</Text>
                                <View style={[styles.checkInput, checkbox && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, checkbox && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsSelected(!isSelected)}
                            >
                                <Text style={styles.textCheck}>Prefiro restaurantes mais famosos (mesmo que mais distantes)</Text>
                                <View style={[styles.checkInput, isSelected && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isSelected && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsChecked(!isChecked)}
                            >
                                <Text style={styles.textCheck}>Busco o melhor custo-benefício</Text>
                                <View style={[styles.checkInput, isChecked && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isChecked && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsActive(!isActive)}
                            >
                                <Text style={styles.textCheck}>Priorizo restaurantes melhor avaliados (4.5+ estrelas)</Text>
                                <View style={[styles.checkInput, isActive && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isActive && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsBoxChecked(!isBoxChecked)}
                            >
                                <Text style={styles.textCheck}>Quero apenas promoções do dia</Text>
                                <View style={[styles.checkInput, isBoxChecked && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isBoxChecked && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setCheckedValue(!checkedValue)}
                            >
                                <Text style={styles.textCheck}>Tenho restrições alimentares (Vegano, Sem Glúten, etc)</Text>
                                <View style={[styles.checkInput, checkedValue && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, checkedValue && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
    };


    const btnSalvar = () => {
        if(isChecked|| checkbox || isSelected || isBoxChecked || isActive || checkedValue){
        return(
            <TouchableOpacity 
            style={styles.botaoSalvarSelected}
            onPress={() => {
                navigation.navigate('Home');
                alert("cadastro realizado");
            }}
            >
                <Text style={styles.textoSalvarSelected}>Salvar</Text>
            </TouchableOpacity>
        );
        }else{
            return(
                <View style={styles.botaoSalvar}>
                    <Text style={styles.textoSalvar}>Salvar</Text>
                </View>
            );
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.main}>

                {/*<View style={styles.superior}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Preferências</Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.coluna}>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setCheckbox(!checkbox)}
                            >
                                <Text style={styles.textCheck}>Prefiro restaurantes mais próximos</Text>
                                <View style={[styles.checkInput, checkbox && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, checkbox && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsSelected(!isSelected)}
                            >
                                <Text style={styles.textCheck}>Prefiro restaurantes mais famosos (mesmo que mais distantes)</Text>
                                <View style={[styles.checkInput, isSelected && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isSelected && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsChecked(!isChecked)}
                            >
                                <Text style={styles.textCheck}>Busco o melhor custo-benefício</Text>
                                <View style={[styles.checkInput, isChecked && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isChecked && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsActive(!isActive)}
                            >
                                <Text style={styles.textCheck}>Priorizo restaurantes melhor avaliados (4.5+ estrelas)</Text>
                                <View style={[styles.checkInput, isActive && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isActive && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setIsBoxChecked(!isBoxChecked)}
                            >
                                <Text style={styles.textCheck}>Quero apenas promoções do dia</Text>
                                <View style={[styles.checkInput, isBoxChecked && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, isBoxChecked && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.opcao}
                                onPress={() => setCheckedValue(!checkedValue)}
                            >
                                <Text style={styles.textCheck}>Tenho restrições alimentares (Vegano, Sem Glúten, etc)</Text>
                                <View style={[styles.checkInput, checkedValue && styles.checkedBorder]}>
                                    <View style={[styles.checkteste, checkedValue && styles.checkContent]}></View>
                                </View>
                            </TouchableOpacity>

                            
                        </View>
                    </View>
                </View>*/}
                {opcoes()}

                <View style={styles.inferior}>
                    <View style={styles.botoesAcao}>
                        <TouchableOpacity 
                        style={styles.botoes}
                        onPress={() => {
                            navigation.navigate('Home');
                            alert("cadastro realizado");
                        }}
                        >
                            <Text style={styles.textoBotao}>Pular</Text>
                        </TouchableOpacity>

                        {btnSalvar()}
                    </View>
                </View>
            </View>
        </View>
    )

}

export default OpcaoScreen;