import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        display:  'flex',
        justifyContent: 'space-between'
    },
    background: {
        width: '100%',
        height: '100%',
    },
    area: {
        backgroundColor: '#fff',
        color: '#333',
        width: '100%',
        height: '35%',
        padding: 15,
        borderRadius: 30,
    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    criarConta: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007bff00',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    criarContaText: {
        color: '#007AFF',
        textAlign: 'center',
    },
    visitante: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        textDecorationLine: 'underline',
    }
});