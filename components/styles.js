import { StyleSheet } from 'react-native';

export const cores = {
  preto: '#24221B',
  bege: '#E4DFD8',
  amarelo: '#F2D04E',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.preto,
    alignItems: 'center',
    justifyContent: 'center',
  },

  base: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: cores.amarelo,
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },

  campo: {
    fontWeight: '700',
    color: cores.preto,
  },

  conteudo: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    justifyContent: 'center',
  },

  textTermo: {
    paddingLeft: 6,
    fontWeight: '500',
    color: cores.preto,
  },

  checkTermo: {
    borderRadius: 6,
    borderColor: cores.preto,
  },

  termos: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    padding: 12,
    backgroundColor: cores.bege,
    borderColor: cores.preto,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 4,
    marginBottom: 6,
    fontSize: 15,
  },

  conteudoBotao: {
    padding: 20,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: cores.preto,
    backgroundColor: cores.bege,
    justifyContent: 'center',
  },

  botao: {
    backgroundColor: cores.preto,
    borderRadius: 30,
    marginBottom: 15,
  },

  textBotao: {
    color: cores.amarelo,
    fontWeight: '700',
  },

  contaT: {
    justifyContent: 'center',
    backgroundColor: cores.bege,
    borderRadius: 14,
    padding: 12,
    minHeight: 60,
    marginTop: '10%',
    marginBottom: '10%',
  },

  textCad: {
    color: cores.preto,
    textAlign: 'center',
  },

  homeBase: {
    flex: 1,
    backgroundColor: cores.bege,
  },

  homeTopo: {
    backgroundColor: cores.preto,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  homeLogo: {
    color: cores.amarelo,
    fontSize: 26,
    fontWeight: '800',
  },

  homeCards: {
    paddingHorizontal: 20,
    marginTop: -20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: cores.bege,
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: cores.preto,
  },

  cardImagem: {
    width: 70,
    height: 70,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: cores.preto,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  cardImagemTexto: {
    fontSize: 11,
    color: cores.preto,
    textAlign: 'center',
  },

  cardConteudo: {
    flex: 1,
    justifyContent: 'center',
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: '800',
    color: cores.preto,
  },

  cardDescricao: {
    fontSize: 13,
    color: cores.preto,
    marginTop: 2,
    marginBottom: 6,
  },

  cardPreco: {
    fontSize: 15,
    fontWeight: '800',
    color: cores.preto,
  },

  pratoSecao: {
    backgroundColor: cores.amarelo,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  pratoTitulo: {
    fontSize: 24,
    fontWeight: '800',
    color: cores.preto,
    marginBottom: 16,
  },

  diaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.bege,
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  diaLinhaDestaque: {
    backgroundColor: cores.preto,
  },

  diaLabel: {
    width: 44,
    fontWeight: '800',
    color: cores.preto,
    textDecorationLine: 'none',
  },

  diaLabelDestaque: {
    color: cores.amarelo,
  },

  diaTexto: {
    fontWeight: '700',
    color: cores.preto,
    textDecorationLine: 'none',
  },

  diaTextoDestaque: {
    color: cores.amarelo,
  },

  enderecoSecao: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  enderecoImagem: {
    width: '100%',
    height: 160,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: cores.preto,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  enderecoRua: {
    fontSize: 20,
    fontWeight: '800',
    color: cores.preto,
  },

  enderecoInfo: {
    color: cores.preto,
    marginTop: 4,
    marginBottom: 16,
  },

  botaoMapa: {
    backgroundColor: cores.amarelo,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: cores.preto,
    paddingVertical: 16,
    alignItems: 'center',
  },

  botaoMapaTexto: {
    fontWeight: '800',
    color: cores.preto,
  },

  rodape: {
    backgroundColor: cores.preto,
    marginTop: 24,
    padding: 20,
  },

  rodapeTitulo: {
    color: cores.amarelo,
    fontSize: 17,
    fontWeight: '800',
  },

  rodapeSubtitulo: {
    color: cores.bege,
    fontSize: 12,
    marginBottom: 20,
  },

  botaoWhatsapp: {
    backgroundColor: cores.amarelo,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },

  botaoWhatsappTexto: {
    color: cores.preto,
    fontWeight: '800',
  },

  header: {
    width: '100%',
    backgroundColor: cores.preto,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerVoltar: {
    color: cores.amarelo,
    fontSize: 20,
    marginRight: 14,
  },

  headerTitulo: {
    color: cores.amarelo,
    fontSize: 20,
    fontWeight: '800',
  },

  logo: {
    color: cores.preto,
    fontSize: 26,
    fontWeight: '800',
    marginTop: 40,
    marginBottom: 20,
  },

  tituloTela: {
    fontSize: 28,
    fontWeight: '800',
    color: cores.preto,
    marginBottom: 6,
  },

  subtituloTela: {
    color: cores.preto,
    marginBottom: 20,
    opacity: 0.7,
  },

  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },

  linhaDivisor: {
    flex: 1,
    height: 1,
    backgroundColor: cores.preto,
    opacity: 0.3,
  },

  textoDivisor: {
    marginHorizontal: 10,
    fontWeight: '700',
    color: cores.preto,
  },

  linhaSociais: {
    flexDirection: 'row',
    gap: 12,
  },

  botaoSocial: {
    flex: 1,
    backgroundColor: cores.bege,
    borderWidth: 2,
    borderColor: cores.preto,
    borderRadius: 30,
  },

  textoBotaoSocial: {
    color: cores.preto,
    fontWeight: '700',
  },

  rodapeConta: {
    backgroundColor: cores.preto,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },

  textoRodapeConta: {
    color: cores.bege,
  },

  linkRodape: {
    color: cores.amarelo,
    fontWeight: '800',
  },

  linkEsqueci: {
    color: cores.preto,
    fontWeight: '700',
    textAlign: 'right',
    marginBottom: 6,
  },

  welcomeBase: {
    flex: 1,
    backgroundColor: cores.bege,
    justifyContent: 'space-between',
  },

  welcomeTopo: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 60,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: cores.preto,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  welcomeImagem: {
    width: '100%',
    height: '100%',
  },

  welcomeMeio: {
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  welcomeLogo: {
    fontSize: 32,
    fontWeight: '800',
    color: cores.preto,
  },

  welcomeFrase: {
    marginTop: 10,
    fontSize: 15,
    color: cores.preto,
    opacity: 0.7,
    textAlign: 'center',
  },

  welcomeDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: cores.preto,
    opacity: 0.2,
  },

  dotAtivo: {
    opacity: 1,
  },

  welcomeRodape: {
    padding: 24,
  },

  botaoPrincipal: {
    backgroundColor: cores.preto,
    borderRadius: 30,
    paddingVertical: 4,
  },

  textoBotaoPrincipal: {
    color: cores.amarelo,
    fontWeight: '800',
    fontSize: 16,
  },

  linkCadastrar: {
    marginTop: 18,
    textAlign: 'center',
    color: cores.preto,
    fontWeight: '700',
  },

  placeholderBox: {
    borderWidth: 2,
    borderColor: cores.preto,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  placeholderTexto: {
    fontSize: 11,
    color: cores.preto,
    textAlign: 'center',
  },
});