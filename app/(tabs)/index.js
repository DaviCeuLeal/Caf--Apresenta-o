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
 
export default function Index() {
 return (
       <ScrollView contentContainerStyle={styles.corpo}>
        { /*=========== TOPO (HEADER) =============*/}
        { /*=========== Área de cabeçalho com logo e menu =============*/}
        <Header ativo="inicio"></Header>

        { /*=========== HERO =============*/}
        { /* Seção principal (banner incial) */}
        <View style={styles.hero}>
          <View style={styles.heroContent}>
        { /* Título Principal */}
          <Text style={styles.heroTitulo}> Formação em Tecnologia para o mercado real</Text>
          
          { /* Descrição */}
          <Text style={styles.descricao}>
            Aprenda desenvolvimento web, lógica e banco de dados
          </Text>

          { /* Aviso sobre Login */}
          <Text style={styles.avisoLogin}>
            Para visualizar os cursos, é necessário fazer login
          </Text>

          { /* Botão principal */}
          <Link href='/login'>
            <TouchableOpacity style= {styles.btnPrimario}>
              <Text style= {styles.textoBotaoPri}>Fazer Login</Text>
            </TouchableOpacity>
          </Link>
          
          { /* Botão secundário */}
          <Link href='contato'>
            <TouchableOpacity style= {styles.btnSecundario}>
              <Text style= {styles.textoBotaoSec}>Fale Conosco</Text>
            </TouchableOpacity>
          </Link>

          </View>
        </View>

        { /*=========== DESTAQUES =============*/}
        { /* Seção com benefícios da plataforma*/}
        <View style={styles.destaques}>
          <View style={styles.container}>
          
          { /* Título da Seção */}
          <Text style ={styles.tituloDestaque}>Por que estudar na TechEduca?</Text>

          <View style={styles.cards}>
          
          { /* Lista dos Cards*/}

          { /* CARD 1 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Projetos Reais</Text> 
            <Text style = {styles.cardDescricao}> 
              Você desenvolve sites com base em situações profissionais
            </Text>
          </View>

          { /* CARD 2 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Materiais Didáticos</Text>
            <Text style = {styles.cardDescricao}>
              Conteúdos e exercícios práticos
            </Text>
          </View>

          { /* CARD 3 */}
          <View style = {styles.card}>
            <Text style = {styles.cardTitulo}>Suporte do Instrutor</Text>
            <Text style = {styles.cardDescricao}>
              Acompanhamento durante todo processo
            </Text>
          </View> 

         </View>
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

    btnLogin: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius:8,
      marginTop: 10,
    },

    hero: {
      backgroundColor: '#ffffff',
      textAlign: 'center',
      padding: 30,
      justifyContent: 'center'
    },

    heroContent: {
      alignItems: 'center',
      gap: 10,
      width: '100%'
    },

    heroTitulo: {
      fontSize: 28,
      color: '#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    avisoLogin: {
      fontSize: 16,
      color: '#222',
      textAlign: 'center',
      marginTop: 10,
      marginBottom:20
    },

    btnPrimario: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      marginBottom: 10,
      minWidth: 160,
    },

    btnSecundario: {
      backgroundColor: '#ffffff',
      color: '#1a4db3',
      paddingHorizontal:10,
      paddingVertical: 20,
      borderRadius: 8,
      borderColor: '#1a4db3',
      borderWidth: 2,
      marginTop: 10,
      minWidth: 160
    } ,

    textoBotaoPri : {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    textoBotaoSec : {
      color: '#222',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    descricao : {
      color: '#222',
      fontSize: 28,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10,
    },

    destaques: {
      padding: 20,
    },

    container: {
      padding: 20,
    },

    cards:{
      marginTop: 20,
      gap: 15,
    },

    card : {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 3,
      shadowColor:'#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,    
      textShadowOffset: {
        width: 0,
        height: 3
      },
    },

    cardTitulo: {
      color: '#1a4db3',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },

    cardDescricao: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22,
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