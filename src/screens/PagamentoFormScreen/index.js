import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { buscarPagamento, inserirPagamento, atualizarPagamento } from '../../database/db';

// tipos de pagamento que dá pra escolher. cada um já tem o ícone e a cor que aparecem na lista
const TIPOS = [
  { tipo: 'Crédito', icone: 'card', cor: '#FF6B35' },
  { tipo: 'Débito', icone: 'card', cor: '#007AFF' },
  { tipo: 'Pix', icone: 'qr-code', cor: '#00A86B' },
];

// mesma tela pra cadastrar e editar: se veio id pela navegação é edição, se não veio é cadastro
function PagamentoFormScreen({ navigation, route }) {
  const id = route.params?.id;

  const [escolhido, setEscolhido] = useState(TIPOS[0]);
  const [descricao, setDescricao] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [erro, setErro] = useState('');

  // no modo edição, busca no banco (SELECT com parâmetro) e preenche os campos
  useEffect(() => {
    if (!id) return;
    buscarPagamento(id).then((p) => {
      if (!p) return;
      setEscolhido(TIPOS.find((t) => t.tipo === p.tipo) || { tipo: p.tipo, icone: p.icone, cor: p.cor });
      setDescricao(p.descricao);
      setVencimento(p.vencimento);
    });
  }, [id]);

  const salvar = async () => {
    // descricao é NOT NULL na tabela, então não deixa salvar vazio
    if (!descricao.trim()) {
      setErro('Preencha a descrição.');
      return;
    }

    const dados = {
      tipo: escolhido.tipo,
      icone: escolhido.icone,
      cor: escolhido.cor,
      descricao: descricao.trim(),
      vencimento: vencimento.trim(),
    };

    if (id) {
      await atualizarPagamento(id, dados); // UPDATE
    } else {
      await inserirPagamento(dados); // CREATE (INSERT)
    }

    // volta pra lista; o useFocusEffect de lá recarrega os dados
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>{id ? 'Editar pagamento' : 'Nova forma de pagamento'}</Text>

      <Text style={styles.label}>Tipo</Text>
      <View style={styles.linhaTipos}>
        {TIPOS.map((op) => (
          <TouchableOpacity
            key={op.tipo}
            onPress={() => setEscolhido(op)}
            // o tipo selecionado fica com a borda e o fundo coloridos
            style={[styles.botaoTipo, escolhido.tipo === op.tipo && { borderColor: op.cor, backgroundColor: op.cor }]}
          >
            <Ionicons name={op.icone} size={16} color={escolhido.tipo === op.tipo ? '#fff' : op.cor} />
            <Text style={[styles.textoTipo, escolhido.tipo === op.tipo && styles.textoTipoSelecionado]}>
              {op.tipo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* só pede o final do cartão: o número completo não deve ser guardado no app */}
      <TextInput
        style={styles.campo}
        placeholder={escolhido.tipo === 'Pix' ? 'Chave Pix' : 'Bandeira e final (ex: Visa •••• 1234)'}
        placeholderTextColor="#8E8E93"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.campo}
        placeholder={escolhido.tipo === 'Pix' ? 'Observação (ex: Aprovação na hora)' : 'Validade (ex: Vence em 09/29)'}
        placeholderTextColor="#8E8E93"
        value={vencimento}
        onChangeText={setVencimento}
      />

      {!!erro && <Text style={styles.erro}>{erro}</Text>}

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>{id ? 'Salvar alterações' : 'Cadastrar'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PagamentoFormScreen;
