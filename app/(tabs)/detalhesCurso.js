import {
  View, // Para agrupar elementos (= div)
  Text, // Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button)
  ScrollView, // Para a área principal com scroll,
  StyleSheet, // Para aplicar estilo na página,
  Image,
  FlatList,
  TextInput
} from 'react-native'; // Importa os componentes View e Text
import { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DetalhesCursos() {

  const {
    titulo,
    descricao,
    ch,
    objetivo,
    publico,
    conteudos,
    modalidade,
    nivel
  } = useLocalSearchParams();

  return (
       <ScrollView contentContainerStyle={styles.corpo}>
      { /*=========== TOPO (HEADER) =============*/}
      { /*=========== Área de cabeçalho com logo e menu =============*/}
      <Header ativo = "cursos"> </Header>

      { /*=========== CONTEÚDO DA PÁGINA =============*/}
      <View style={styles.container}>

        <View style={styles.cardDetalhes}>
          {/* Aqui irão os dados do curso */}
          <Text style={styles.etiqueta}>
            Curso TechEduca
          </Text>

          <Text style={styles.tituloCurso} >
            {titulo}
          </Text>

          <Text style={styles.descricaoCurso}>
            {descricao}
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>CH</Text>
            <Text style={styles.infoValor}> {ch} </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Nível</Text>
            <Text style={styles.infoValor}> {nivel} </Text>
          </View>

          <View style={styles.secaoDetalhe}>
            <Text style={styles.subtitulo}>Modalidade</Text>
            <Text style={styles.textoDetalhe}> {modalidade} </Text>
          </View>

          <View style={styles.secaoDetalhe}>
            <Text style={styles.subtitulo}>Objetivo do curso </Text>
            <Text style={styles.textoDetalhe}> {objetivo} </Text>
          </View>

          <View style={styles.secaoDetalhe}>
            <Text style={styles.subtitulo}> Pra quem é esse curso? </Text>
            <Text style={styles.textoDetalhe}> {publico} </Text>
          </View>

          <View style={styles.secaoDetalhe}>
            <Text style={styles.subtitulo}>Conteudos abordados </Text>
            <Text style={styles.textoDetalhe}> {conteudos} </Text>
          </View>

          <Link href='/cursos' asChild>
            <TouchableOpacity style={styles.btnVoltar}>
              <Text style={styles.textoBtn}>
                Voltar para Cursos
              </Text>
            </TouchableOpacity>
          </Link>




        </View>

      </View>

      { /*=========== RODAPÉ =============*/}
      { /* Parte final da página */}
      <Footer></Footer>

    </ScrollView>
  );
}

const styles = StyleSheet.create(
  {
    corpo: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
    topo: {
      backgroundColor: '#1a4db3',
      padding: 20,
      alignItems: 'center',
      gap: 10,
    },

    logoP1: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
    },

    logoP2: {
      color: '#ff6a00',
      fontSize: 24,
      fontWeight: 'bold',
    },

    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },

    menuItem: {
      color: '#ffffff',
      fontWeight: 'bold',
    },

    ativo: {
      color: '#ff6a00',
    },

    tituloPagina: {
      fontSize: 28,
      color: '#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    cursos: {
      alignItems: 'center',
      backgroundColor: 'white'
    },

    buscarCursos: {
      backgroundColor: 'white',
      textAlign: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 8,
      width: 140
    },

    curso: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 8,
      marginBottom: 15,
      elevation: 3,
    },

    cursoTitulo: {
      color: '#1a4db3',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    btnCurso: {
      backgroundColor: '#1a4db3',
      paddingVertical: 10,
      borderRadius: 6,
      alignItems: 'center',
      marginTop: 10
    },

    textoBtnCurso: {
      color: 'white',
      fontSize: 10,
      textAlign: 'center',
      width: 80
    },

    cursoBtnLink: {
      textAlign: 'center'
    },

    cursoImagem: {
      width: '100%',
      height: 140,
      backgroundColor: '#f5f5f5',
      borderRadius: 6,
      marginBottom: 10,
      resizeMode: 'contain'

    },

    cursoDescricao: {
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      margin: 10
    },

    cursoCH: {
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      margin: 10,
      fontWeight: 'bold'
    },

    container: {
      backgroundColor: '#f5f5f5',
      padding: 20,
    },

    cardDetalhes: {
      backgroundColor: 'white',
      padding: 25,
      borderRadius: 10,
      elevation: 3,
      shadowColor: "#000",
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 3 }

    },

    etiqueta: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      alignSelf: 'center',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
      fontWeight: 'bold',
      marginTop: 15,
    },

    tituloCurso: {
      color: '#1a4db3',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },

    descricaoCurso: {
      color: "#222",
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      marginBottom: 20,
    },

    infoBox: {
      backgroundColor: '#f5f5f5',
      padding: 15,
      borderRadius: 8,
      marginBottom: 20,
      gap: 12,
    },

    secaoDetalhe: {
      marginBottom: 20,
    },

    infoLabel: {
      color: '#1a4db3',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },

    infoValor: {
      color: "#222",
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      marginBottom: 20,
    },

    subtitulo: {
      color: '#1a4db3',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },

    textoDetalhe: {
      textAlign: 'center',
      color: "#222",
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 20,
    },

    btnVoltar: {
      backgroundColor: '#1a4db3',
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 10,
      alignItems: 'center'
    },

    textoBtn: {
      color: 'white',
      fontWeight: 'bold',
    },

    rodape: {
      backgroundColor: '#1a4db3',
      padding: 20,
      alignItems: 'center',
      gap: 8,
    },

    textoRodape: {
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: 8,
    },

    linkRodape: {
      color: '#ff6a00',
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },

    tituloDestaque: {
      color: '#1a4db3',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }

  }
)