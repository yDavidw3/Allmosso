import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
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
  listaVerticalContent: {
    paddingBottom: 80,
  },
  cardPedido: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  infoPedido: {
    flex: 1,
  },
  nomePedido: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  detalhesPedido: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  dataPedido: {
    fontSize: 12,
    color: '#999',
  },
  tagStatus: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10,
  },
  textoTagStatus: {
    color: '#444',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
