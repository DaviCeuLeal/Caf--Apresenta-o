import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet // Para aplicar estilo na página
   } from 'react-native'; // Importa os componentes View e Text
   import {Link} from 'expo-router';
   import Header from '../../components/Header'
   import Footer from '../../components/Footer'
   
  export default function Sobre() {
   return (
       <ScrollView contentContainerStyle={styles.corpo}>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <Header ativo = "sobre"> </Header>

          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          <View style={styles.sobre}>
              <Text style={styles.titulo}>Sobre a TechEduca</Text>
              <Text style={styles.texto}>A TechEduca é uma escola de tecnologia
            focada em formação prática</Text>

              <Text style={styles.subtitulo}>Nossa missão</Text>
              <Text style={styles.texto}>Transformar vidas por meio da educação tecnológica</Text>

              <Text style={styles.subtitulo}>Nossos Valores</Text>
              <View style={styles.lista}>
                  <Text style={styles.itemLista}>• Compromisso</Text>
                  <Text style={styles.itemLista}>• Inovação</Text>
                  <Text style={styles.itemLista}>• Transparência</Text>

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
        padding:20,
        alignItems: 'center',
        gap: 10,
      },
  
      logoP1: {
        color:'#ffffff',
        fontSize:24,
        fontWeight: 'bold',
      },
  
      logoP2: {
        color:'#ff6a00',
        fontSize:24,
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
      
      sobre: {
        padding: 20,
        backgroundColor: "#ffffff"
      },

      titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
      },

      subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20, 
        marginBottom: 8,
        textAlign: 'center'
      },

      texto: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
      },

      lista: {
        marginTop: 10,
        alignItems: 'center'
      },

      itemLista: {
        fontSize: 16,
        marginBottom: 6,
      },


     
  
      rodape: {
        backgroundColor: '#1a4db3',
        padding: 20,
        alignItems: 'center',
        gap: 8,
      },
  
      textoRodape: {
        color : '#ffffff',
        textAlign: 'center', 
        marginBottom: 8,
      },
  
      linkRodape: {
        color: '#ff6a00',
        fontWeight: 'bold',
        textDecorationLine: 'none'
      },
  
      tituloDestaque : {
        color: '#1a4db3',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
  
    }
  )