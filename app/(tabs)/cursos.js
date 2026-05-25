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
   import {useState} from 'react';
   import {Link} from 'expo-router';
   
  export default function Cursos() {
    const cursos = [
      {
        id: '1',
        titulo: 'Desenvolvimento WEB',
        img: require('../../assets/images/desweb.jpg'),
        url: '/curso1',
        descricao: 'Aprenda HTML, CSS, Javascript e práticas modernas de desenvolvimento',
        ch: 40
      },

      {
        id: '2',
        titulo: 'Informática Básica',
        img: require('../../assets/images/info.jpg'),
        url: '/curso2',
        descricao: 'Domine o uso do computador e aplicativos essenciais',
        ch: 30
      },
      
      {
        id: '3',
        titulo: 'Desenvolvimento de Games',
        img: require('../../assets/images/desgame.webp'),
        url: '/curso3',
        descricao: 'Aprenda a desenvolver games de forma legal e criativa',
        ch: 80
      },


    ];

    const [busca, setBusca] = useState('');

    const cursosFiltrados = cursos.filter( 
      (curso) => {
          curso.titulo.toLowerCase().includes(busca.toLocaleLowerCase())
      }

    )

   return (
      <ScrollView>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <View style={styles.topo}>
  
          { /* Logo do sistema */}
          <Link href='/'>
            <Text style={styles.logoP1}>Tech</Text>
            <Text style={styles.logoP2}>Educa</Text>
          </Link>
  
            { /* Menu de Navegação */}
            <View style={styles.menu}>
              <Link href='/'>
                <Text style={styles.menuItem}> Início </Text>
              </Link>
              <Link href='/sobre'>
                <Text style={styles.menuItem}> Sobre </Text>
              </Link>
              <Link href='/cursos'>
                <Text style={[styles.menuItem, styles.ativo]}>Cursos</Text>
              </Link>
              <Link href='/contato'>
                <Text style={styles.menuItem}> Contato </Text>
              </Link>
              
            </View>
          </View>

          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          

          { /*=========== RODAPÉ =============*/}
          { /* Parte final da página */}
          <View style={styles.rodape}>
            { /* Texto de direitos de autorais */}
            <Text style={styles.textoRodape}> 2026 TechEduca. Todos os direitos reservados.</Text>
  
            { /* Links de Contato */}
            <Link href='/contato'>
              <Text style={styles.linkRodape}>Entre em contato</Text>'
            </Link>
          </View>
  
      </ScrollView>
   );
  }
  
  const styles = StyleSheet.create(
    {
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