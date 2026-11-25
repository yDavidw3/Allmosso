import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardPagamento: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
  },
  cardEscolhido: {
    borderColor: '#007AFF',
    backgroundColor: '#F7FBFF',
  },
  quadrado: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoPagamento: {
    flex: 1,
    marginLeft: 14,
  },
  nomePagamento: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 3,
  },
  detalhesPagamento: {
    fontSize: 12,
    color: '#666',
  },
  botaoExcluir: {
    padding: 8,
    marginLeft: 6,
  },
  vazio: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },
  botaoNovo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffcc00',
    borderRadius: 14,
    height: 50,
    margin: 20,
  },
  textoBotaoNovo: {
    color: '#1C1C1E',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 6,
  },
});
