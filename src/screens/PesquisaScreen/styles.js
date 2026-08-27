import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  filtrosHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  filtrosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 36,
    width: '55%',
  },
  filtroIcon: {
    marginRight: 2,
  },
  picker: {
    flex: 1,
    color: '#333',
    height: 36,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  emAltaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 5,
  },
  emAltaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 6,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    overflow: 'hidden',
  },
  imagemEspaco: {
    width: '100%',
    height: 150,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imagemProduto: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 10,
  },
  itemNome: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
    lineHeight: 16,
  },
  itemTag: {
    fontSize: 10,
    color: '#999',
    marginBottom: 6,
    textTransform: 'capitalize',
  },
  itemPreco: {
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
    marginBottom: 4,
  },
  freteGratis: {
    fontSize: 11,
    color: '#00a650',
    fontWeight: '600',
  }
});