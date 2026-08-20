import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  saudacao: {
    fontSize: 14,
    color: '#666',
  },
  endereco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cupomBox: {
    backgroundColor: '#F3E5F5',
    padding: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  cupomTexto: {
    color: '#7B1FA2',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  listaHorizontalContainer: {
    height: 110,
    paddingLeft: 15,
    marginBottom: 10,
  },
  itemCategoria: {
    alignItems: 'center',
    width: 75,
    marginHorizontal: 4,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  guiaRapido: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  titleCategoria: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagemBanner: {
    width: '100%',
    height: 120,
    backgroundColor: '#FF6B35', 
    resizeMode: 'cover',
  },
  listaVerticalContent: {
    paddingBottom: 80, 
  },
  cardRestaurante: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  fotoRestaurante: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F5F5F5',
  },
  infoRestaurante: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  nomeRestaurante: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  detalhesRestaurante: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  tagPromocao: {
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  textoTagPromocao: {
    color: '#F57F17',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
