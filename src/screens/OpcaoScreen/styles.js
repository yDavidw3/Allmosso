import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 17,
        marginRight: 17,
    },
    superior:{
        display: 'flex',
        flexDirection: 'column',
    },
    inferior: {
        display: 'flex',
        flexDirection: 'column'
    },
    header:{
        marginTop: 96,
    },  
    titulo: {
        color: '#000',
        fontWeight: '800',
        letterSpacing: -0.5,
        fontSize: 34,
        marginBottom: 8,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    coluna: {
        flexDirection: 'column',
        gap: 14,
        width: '100%'
    },
    opcao: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#E5E5EA',
        borderBottomWidth: .5,
    },
    checkInput: {
        color: '#000000',
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 1.5,
        borderColor: '#C7C7CC',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    checkedBorder: {
        backgroundColor: '#FFCC0026',
        borderColor: '#FFCC0026',
    },
    checkteste: {
        width: 17,
        height: 17,
        borderRadius: 8.5,
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    checkContent: {
        borderColor: 'transparent',
        backgroundColor: '#FFCC00',
    },
    textCheck: {
        color: '#000000',
        fontSize: 17,
        flex: 1,
    },
    botoesAcao: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        marginBottom: 30,
    },
    botoes: {
        backgroundColor: '#F2F2F7',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
        width: '50%',
        marginLeft: 17,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'semibold',
        fontSize: 17,
    },
    botaoSalvarSelected: {
        backgroundColor: '#ffcc00',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
        width: '50%',
        marginRight: 17,
    },
    textoSalvarSelected: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'semibold',
        fontSize: 17,
    },
    botaoSalvar: {
        backgroundColor: '#E5E5EA',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
        width: '50%',
        marginRight: 17,
    },
    textoSalvar: {
        textAlign: 'center',
        color: '#D1D1D6',
        fontWeight: 'semibold',
        fontSize: 17,
    },
})