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
});
