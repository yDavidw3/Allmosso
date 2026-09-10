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
    marginBottom: 16,
    color: '#000000',
  },
  infeior: {
    width: '100%',
  },
  info: {
    color: '#8e8e93',
    fontSize: 13,
    marginBottom: 32,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ffcc00',
    width: '100%',
    height: 50,
    marginBottom: 15,
    borderRadius: 14,
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
  lembrarSenha: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 32,
    marginTop: 10,
  },
  checkInput: {
    color: '#8e8e93',
  },
  textCheck: {
    color: '#8e8e93',
  }
});
