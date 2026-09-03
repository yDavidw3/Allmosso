import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  telaEmail: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    paddingBottom: 25,
    padding: 15,
  },
  campo: {
    margin: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: '#22241B',
    borderRadius: 10,
  },
  infeior: {
    width: '100%',
  },
  info: {
    color: 'gray',
    fontSize: 13,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#F4D04E',
    padding: 20,
    width: '100%',
    marginBottom: 15
  },
  buttonText: {
    color: '#22241B',
    textAlign: 'center',
    fontSize: 15,
  },
  telaSenha: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  lembrarSenha: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  checkInput: {
    color: 'gray',
  },
  textCheck: {
    color: 'gray',
  }
});
