import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function DevScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View style={styles.linhaVoltar}>
            <TouchableOpacity
              style={styles.botaoVoltar}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.setaVoltar}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.tituloPequeno}>Quem fez o app</Text>
          </View>

          <Text style={styles.titulo}>A turma por trás do Allmosso</Text>
          <Text style={styles.subtitulo}>
            Projeto da disciplina de Programação de Aplicativos Mobile —
            Etec de Guaianases.
          </Text>
        </View>

        
        <View style={styles.blocoAmarelo}>
         
          <View style={styles.fotoEquipe}>
            <Text style={styles.textoFotoEquipe}>Foto da equipe</Text>
          </View>

          
          <View style={styles.cardPessoa}>
            <View style={styles.fotoPessoa}>
              <Image source={require('../../assets/sak.jpg')} style={styles.imagemPessoa}/>
            </View>
            <View style={styles.infoPessoa}>
              <Text style={styles.nomePessoa}>Isaac</Text>
              <Text style={styles.funcaoPessoa}>Design</Text>
              <Text style={styles.descricaoPessoa}>
                Identidade visual, mascote e telas.
              </Text>
            </View> 
          </View>

          
          <View style={styles.cardPessoa}>
            <View style={styles.fotoPessoa}>
              <Image source={require('../../assets/dvd.png')} style={styles.imagemPessoa}/>
            </View>
            <View style={styles.infoPessoa}>
              <Text style={styles.nomePessoa}>David</Text>
              <Text style={styles.funcaoPessoa}>Programação</Text>
              <Text style={styles.descricaoPessoa}>
                Código do app e navegação.
              </Text>
            </View>
          </View>

          
          <View style={styles.cardPessoa}>
            <View style={styles.fotoPessoa}>
              <Image source={require('../../assets/dbr.jpg')} style={styles.imagemPessoa}/>
            </View>
            <View style={styles.infoPessoa}>
              <Text style={styles.nomePessoa}>Breno</Text>
              <Text style={styles.funcaoPessoa}>Programação</Text>
              <Text style={styles.descricaoPessoa}>
                Cadastro, login e funcionalidades.
              </Text>
            </View>
          </View>

        
          <View style={styles.cardPessoa}>
            <View style={styles.fotoPessoa}>
              <Image source={require('../../assets/n.png')} style={styles.imagemPessoa}/>
            </View>
            <View style={styles.infoPessoa}>
              <Text style={styles.nomePessoa}>Kaique</Text>
              <Text style={styles.funcaoPessoa}>Programação</Text>
              <Text style={styles.descricaoPessoa}>
                Página de desenvolvedores.
              </Text>
            </View>
          </View>
        </View>

        
        <View style={styles.blocoSobre}>
          <Text style={styles.tituloSobre}>Sobre o projeto</Text>

          <View style={styles.linhaInfo}>
            <Text style={styles.rotuloInfo}>Escola</Text>
            <Text style={styles.valorInfo}>Etec de Guaianases</Text>
          </View>

          <View style={styles.linhaInfo}>
            <Text style={styles.rotuloInfo}>Disciplina</Text>
            <Text style={styles.valorInfo}>Prog. de Apps Mobile</Text>
          </View>

          <View style={styles.linhaInfo}>
            <Text style={styles.rotuloInfo}>Semestre</Text>
            <Text style={styles.valorInfo}>2° / 2026</Text>
          </View>

          
          <View style={styles.linhaVersao}>
            <Text style={styles.rotuloVersao}>Versão</Text>
            <Text style={styles.valorVersao}>Esboço 1.0</Text>
          </View>
        </View>

        
        <View style={styles.footer}>
          <Text style={styles.logoFooter}>Allmosso</Text>
          <Text style={styles.fraseFooter}>Feito em sala, com fome.</Text>
        </View>
      </ScrollView>
    </View>
  );
}