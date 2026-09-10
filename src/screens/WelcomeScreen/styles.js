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
        gap: 12,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#ffcc00',
        borderRadius: 16,
        paddingVertical: 16,
        height: 54,
    },
    criarConta: {
        marginTop: 20,
        paddingVertical: 16,
        backgroundColor: '#007bff00',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#ffcc00',
        height: 54
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 17,
        letterSpacing: -0.41,
        fontWeight: '600',
    },
    criarContaText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 17,
        letterSpacing: -0.41,
        fontWeight: '600',
    },
    visitante: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    }
});