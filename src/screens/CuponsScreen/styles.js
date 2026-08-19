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
  cardCupom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 14,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#FFE082',
    borderRadius: 12,
    backgroundColor: '#FFFDF5',
  },
  cardExpirado: {
    borderColor: '#EEEEEE',
    backgroundColor: '#FAFAFA',
  },
  selo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF9C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seloExpirado: {
    backgroundColor: '#EEEEEE',
  },
  infoCupom: {
    flex: 1,
    marginLeft: 14,
  },
  codigoCupom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F57F17',
    letterSpacing: 1,
    marginBottom: 3,
  },
  detalhesCupom: {
    fontSize: 13,
    color: '#444',
    marginBottom: 5,
  },
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoStatus: {
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  textoStatusAtivo: {
    color: '#00A86B',
  },
  textoApagado: {
    color: '#999',
  },
});
