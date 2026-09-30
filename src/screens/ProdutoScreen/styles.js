import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  linhaProduto: {
    flexDirection: 'row',
    gap: 15,
  },
  fotoProduto: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    resizeMode: 'contain',
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  precoUnitario: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  quantidadeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  quantidadeTexto: {
    fontSize: 17,
    fontWeight: 800,
    color: '#000',
  },
  lixeira: {
    marginLeft: 6,
  },
  categoriaProduto: {
    fontSize: 12,
    color: '#8e8e93',
    marginTop: 12,
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  textoTotal: {
    fontSize: 17,
    fontWeight: 800,
    color: '#000',
  },
  tituloOpcoes: {
    fontSize: 13,
    color: '#666',
    marginTop: 18,
    marginBottom: 8,
  },
  linhaOpcoes: {
    flexDirection: 'row',
    gap: 8,
  },
  opcao: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    height: 40,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  opcaoEscolhida: {
    backgroundColor: '#ffcc00',
  },
  textoOpcao: {
    fontSize: 12,
    fontWeight: 800,
    color: '#000',
    textAlign: 'center',
  },
  botaoCarrinho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ffcc00',
    height: 48,
    borderRadius: 32,
    marginTop: 22,
  },
  textoBotaoCarrinho: {
    fontSize: 16,
    fontWeight: 800,
    color: '#000',
  },
});