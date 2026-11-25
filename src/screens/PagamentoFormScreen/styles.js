import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  linhaTipos: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  botaoTipo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  textoTipo: {
    marginLeft: 6,
    color: '#333',
    fontSize: 13,
  },
  textoTipoSelecionado: {
    color: '#fff',
    fontWeight: 'bold',
  },
  campo: {
    padding: 15,
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#000',
    marginBottom: 16,
  },
  erro: {
    color: '#FF3B30',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#ffcc00',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  textoBotao: {
    color: '#1C1C1E',
    fontSize: 17,
    fontWeight: '600',
  },
});
