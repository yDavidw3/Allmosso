import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  tabTexto: {
    fontSize: 11,
    color: '#666',
    fontWeight: '500',
    marginTop: 4,
  },
  tabTextoAtivo: {
    color: '#000',
    fontWeight: 'bold',
  },
});
