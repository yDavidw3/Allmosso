import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  conteudo: {
    paddingBottom: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F2D04E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  textoOpcao: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    marginLeft: 12,
  },
  botaoSair: {
    marginHorizontal: 20,
    marginTop: 25,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F2D04E',
    alignItems: 'center',
  },
  textoSair: {
    color: '#24221B',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
