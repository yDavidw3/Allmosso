import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

function ProdutoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { produto } = route.params;

  const [quantidade, setQuantidade] = useState(1);
  const [tipoEntrega, setTipoEntrega] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');

  // transforma 'R$ 12,00' em número para poder multiplicar pela quantidade
  function converterPreco(preco) {
    return Number(preco.replace('R$', '').replace('.', '').replace(',', '.').trim());
  }

  // transforma o número de volta em 'R$ 12,00'
  function formatarPreco(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  }

  function voltar() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.linhaProduto}>
        <Image source={{ uri: produto.image }} style={styles.fotoProduto} />
        <View style={styles.infoProduto}>
          <Text style={styles.nomeProduto}>{produto.nome}</Text>
          <Text style={styles.precoUnitario}>{produto.preco}</Text>

          <View style={styles.quantidadeBox}>
            <TouchableOpacity
            onPress={() => {
              if (quantidade > 1) {
                setQuantidade(quantidade - 1);
              }
            }}>
              <Ionicons name="remove" size={20} color="#000000" />
            </TouchableOpacity>

            <Text style={styles.quantidadeTexto}>{quantidade}</Text>

            <TouchableOpacity
            onPress={() => {
              setQuantidade(quantidade + 1);
            }}>
              <Ionicons name="add" size={20} color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.lixeira} onPress={voltar}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.categoriaProduto}>
        Categoria: {produto.chave.charAt(0).toUpperCase() + produto.chave.slice(1)}
      </Text>

      <View style={styles.totalBox}>
        <Text style={styles.textoTotal}>Total</Text>
        <Text style={styles.textoTotal}>
          {formatarPreco(converterPreco(produto.preco) * quantidade)}
        </Text>
      </View>

      <Text style={styles.tituloOpcoes}>Tipo de entrega (opcional)</Text>
      <View style={styles.linhaOpcoes}>
        <TouchableOpacity
        style={tipoEntrega === 'Delivery' ? [styles.opcao, styles.opcaoEscolhida] : styles.opcao}
        onPress={() => setTipoEntrega('Delivery')}>
          <Text style={styles.textoOpcao}>Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={tipoEntrega === 'Retirar no local' ? [styles.opcao, styles.opcaoEscolhida] : styles.opcao}
        onPress={() => setTipoEntrega('Retirar no local')}>
          <Text style={styles.textoOpcao}>Retirar no local</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tituloOpcoes}>Formas de pagamento</Text>
      <View style={styles.linhaOpcoes}>
        <TouchableOpacity
        style={formaPagamento === 'Dinheiro' ? [styles.opcao, styles.opcaoEscolhida] : styles.opcao}
        onPress={() => setFormaPagamento('Dinheiro')}>
          <Text style={styles.textoOpcao}>Dinheiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={formaPagamento === 'Cartão' ? [styles.opcao, styles.opcaoEscolhida] : styles.opcao}
        onPress={() => setFormaPagamento('Cartão')}>
          <Text style={styles.textoOpcao}>Cartão de Débito e Crédito</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoCarrinho} onPress={voltar}>
        <Ionicons name="cart" size={20} color="#000000" />
        <Text style={styles.textoBotaoCarrinho}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProdutoScreen;