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
  cardEndereco: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  bolinha: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoEndereco: {
    flex: 1,
    marginLeft: 14,
  },
  linhaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  nomeEndereco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  detalhesEndereco: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  complementoEndereco: {
    fontSize: 12,
    color: '#999',
  },
  tagEndereco: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F1FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  textoTagEndereco: {
    color: '#007AFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  botaoExcluir: {
    padding: 8,
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
