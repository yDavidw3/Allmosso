import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: 'system',
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  telaEmail: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    paddingBottom: 24,
    fontWeight: '600',
    letterSpacing: -0.41,
    marginTop: 20,
  },
  campo: {
    padding: 15,
    borderWidth: 2,
    border: 'none',
    borderColor: 'transparent',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#000000',
    marginBottom: 16,
  },
  infeior: {
    width: '100%',
  },
  info: {
    color: '#8E8E93',
    fontSize: 13,
    marginBottom: 32,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ffcc00',
    width: '100%',
    marginBottom: 15,
    borderRadius: 14,
    height: 50,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#1C1C1E',
    margin: 'auto',
    fontSize: 17,
    fontWeight: '600',
  },
  telaSenha: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  termos: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 32,
  },
  textTermo: {
    color: 'gray',
  },
  telaDados: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
});
