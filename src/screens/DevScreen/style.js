import { StyleSheet } from "react-native";

 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
 
  
  header: {
    backgroundColor: "#FAFAFA",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  linhaVoltar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  botaoVoltar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F2D04E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  setaVoltar: {
    color: "#F2D04E",
    fontSize: 18,
  },

  tituloPequeno: {
    color: "#2B2B2B",
    fontSize: 18,
    fontWeight: "bold",
  },

  apresentacao: {
    marginTop: 5,
  },

  titulo: {
    color: "#2B2B2B",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitulo: {
    color: "#767676",
    fontSize: 14,
    lineHeight: 20,
  },
 
  
  blocoAmarelo: {
    backgroundColor: "#F4EFE9",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },

  fotoEquipe: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  textoFotoEquipe: {
    color: "#777",
    fontSize: 14,
  },

  cardPessoa: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
  },

  fotoPessoa: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#BBB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

    fotoPessoa: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#BBB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    overflow: "hidden", // <- adiciona isso, recorta a imagem no formato do círculo
  },

  imagemPessoa: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },

  textoFotoPessoa: {
    fontSize: 11,
    color: "#777",
  },

  textoFotoPessoaLink: {
    fontSize: 10,
    color: "#777",
    textDecorationLine: "underline",
  },

  infoPessoa: {
    flex: 1,
  },

  nomePessoa: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2B2B2B",
  },

  funcaoPessoa: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F2D04E",
    marginTop: 2,
    marginBottom: 4,
  },

  descricaoPessoa: {
    fontSize: 13,
    color: "#5C5C5C",
  },
 
  // ---------- BLOCO SOBRE O PROJETO ----------
  blocoSobre: {
    backgroundColor:  "#F6F1E8",
    padding: 20,
  },

  tituloSobre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2B2B2B",
    marginBottom: 12,
  },

  linhaInfo: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  rotuloInfo: {
    width: 100,
    fontSize: 14,
    fontWeight: "bold",
    color: "#9C7B63",
  },

  valorInfo: {
    fontSize: 14,
    color: "#2B2B2B",
  },

  linhaVersao: {
    flexDirection: "row",
    backgroundColor: "#F2D04E",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  rotuloVersao: {
    width: 100,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  valorVersao: {
    fontSize: 14,
    color: "#FFFFFF",
  },


  // ---------- RODAPÉ ----------
  footer: {
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingVertical: 30,
  },

  mascoteFooter: {
    fontSize: 28,
    marginBottom: 5,
  },

  logoFooter: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F2D04E",
  },

  fraseFooter: {
    fontSize: 13,
    color: "#999999",
    marginTop: 4,
  },

});


/*
import { StyleSheet } from "react-native";

 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
 
  
  header: {
    backgroundColor: "#FAFAFA",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  linhaVoltar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  botaoVoltar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E8825C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  setaVoltar: {
    color: "#E8825C",
    fontSize: 18,
  },

  tituloPequeno: {
    color: "#2B2B2B",
    fontSize: 18,
    fontWeight: "bold",
  },

  apresentacao: {
    marginTop: 5,
  },

  titulo: {
    color: "#2B2B2B",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitulo: {
    color: "#767676",
    fontSize: 14,
    lineHeight: 20,
  },
 
  
  blocoAmarelo: {
    backgroundColor: "#F4EFE9",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },

  fotoEquipe: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  textoFotoEquipe: {
    color: "#777",
    fontSize: 14,
  },

  cardPessoa: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
  },

  fotoPessoa: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#BBB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

    fotoPessoa: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#BBB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    overflow: "hidden", // <- adiciona isso, recorta a imagem no formato do círculo
  },

  imagemPessoa: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },

  textoFotoPessoa: {
    fontSize: 11,
    color: "#777",
  },

  textoFotoPessoaLink: {
    fontSize: 10,
    color: "#777",
    textDecorationLine: "underline",
  },

  infoPessoa: {
    flex: 1,
  },

  nomePessoa: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2B2B2B",
  },

  funcaoPessoa: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#C97B52",
    marginTop: 2,
    marginBottom: 4,
  },

  descricaoPessoa: {
    fontSize: 13,
    color: "#5C5C5C",
  },
 
  // ---------- BLOCO SOBRE O PROJETO ----------
  blocoSobre: {
    backgroundColor:  "#F6F1E8",
    padding: 20,
  },

  tituloSobre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2B2B2B",
    marginBottom: 12,
  },

  linhaInfo: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  rotuloInfo: {
    width: 100,
    fontSize: 14,
    fontWeight: "bold",
    color: "#9C7B63",
  },

  valorInfo: {
    fontSize: 14,
    color: "#2B2B2B",
  },

  linhaVersao: {
    flexDirection: "row",
    backgroundColor: "#E8825C",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  rotuloVersao: {
    width: 100,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  valorVersao: {
    fontSize: 14,
    color: "#FFFFFF",
  },


  // ---------- RODAPÉ ----------
  footer: {
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingVertical: 30,
  },

  mascoteFooter: {
    fontSize: 28,
    marginBottom: 5,
  },

  logoFooter: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E8825C",
  },

  fraseFooter: {
    fontSize: 13,
    color: "#999999",
    marginTop: 4,
  },

});
*/