import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { buscarEndereco, inserirEndereco, atualizarEndereco } from '../../database/db';

// opções de ícone que o usuário pode escolher pro endereço (o mesmo par ícone/cor do data.js)
const ICONES = [
  { icone: 'home', cor: '#007AFF' },
  { icone: 'briefcase', cor: '#7B1FA2' },
  { icone: 'heart', cor: '#FF6B35' },
  { icone: 'location', cor: '#28A745' },
];

// essa mesma tela serve pra cadastrar e pra editar:
// se veio um id pela navegação é edição, se não veio é cadastro
function EnderecoFormScreen({ navigation, route }) {
  const id = route.params?.id;

  const [apelido, setApelido] = useState('');
  const [rua, setRua] = useState('');
  const [complemento, setComplemento] = useState('');
  const [escolhido, setEscolhido] = useState(ICONES[0]);
  const [erro, setErro] = useState('');

  // no modo edição, busca o endereço no banco (SELECT com parâmetro) e preenche os campos
  useEffect(() => {
    if (!id) return;
    buscarEndereco(id).then((e) => {
      if (!e) return;
      setApelido(e.apelido);
      setRua(e.rua);
      setComplemento(e.complemento);
      setEscolhido(ICONES.find((i) => i.icone === e.icone) || { icone: e.icone, cor: e.cor });
    });
  }, [id]);

  const salvar = async () => {
    // apelido e rua são NOT NULL na tabela, então não deixa salvar vazio
    if (!apelido.trim() || !rua.trim()) {
      setErro('Preencha o apelido e a rua.');
      return;
    }

    const dados = {
      apelido: apelido.trim(),
      rua: rua.trim(),
      complemento: complemento.trim(),
      icone: escolhido.icone,
      cor: escolhido.cor,
    };

    if (id) {
      await atualizarEndereco(id, dados); // UPDATE
    } else {
      await inserirEndereco(dados); // CREATE (INSERT)
    }

    // volta pra lista; o useFocusEffect de lá recarrega os dados
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>{id ? 'Editar endereço' : 'Novo endereço'}</Text>

      <TextInput
        style={styles.campo}
        placeholder="Apelido (ex: Casa, Trabalho)"
        placeholderTextColor="#8E8E93"
        value={apelido}
        onChangeText={setApelido}
      />
      <TextInput
        style={styles.campo}
        placeholder="Rua e número"
        placeholderTextColor="#8E8E93"
        value={rua}
        onChangeText={setRua}
      />
      <TextInput
        style={styles.campo}
        placeholder="Complemento, bairro, cidade"
        placeholderTextColor="#8E8E93"
        value={complemento}
        onChangeText={setComplemento}
      />

      <Text style={styles.label}>Ícone</Text>
      <View style={styles.linhaIcones}>
        {ICONES.map((op) => (
          <TouchableOpacity
            key={op.icone}
            onPress={() => setEscolhido(op)}
            style={[
              styles.bolinha,
              { backgroundColor: op.cor },
              // borda em volta do ícone que está selecionado
              escolhido.icone === op.icone && styles.bolinhaSelecionada,
            ]}
          >
            <Ionicons name={op.icone} size={20} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>

      {!!erro && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>{id ? 'Salvar alterações' : 'Cadastrar'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default EnderecoFormScreen;
