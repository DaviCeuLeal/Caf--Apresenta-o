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
   import Header from '../../components/Header'
   import Footer from '../../components/Footer'
   import cursosJson from '../../assets/data/cursos.json';
   
  export default function Cursos() {
    // Cria um objeto JS como se fosse um dicionário para armazenar as imagens
    const imagensCursos = {
      'desweb.jpg' : require('../../assets/images/desweb.jpg'),
      'info.jpg': require('../../assets/images/info.jpg'),
      'desgame.webp': require('../../assets/images/desgame.webp'),
    };
    // Para cada curso em cursosJson:
    //  Junta tudo de cursos.json + caminho de cada imagem em imagensCursos
    const cursos = cursosJson.map((curso) =>
    (
    {
      ...curso,
      img: imagensCursos[curso.img],
    }
    )
    );

    const [busca, setBusca] = useState('');

    const cursosFiltrados = cursos.filter( 
      (curso) => {
         return curso.titulo.toLowerCase().includes(busca.toLocaleLowerCase())
      }

    

    )

   return (
       <ScrollView contentContainerStyle={styles.corpo}>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <Header ativo = "cursos"> </Header>
   
          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          <View style={styles.cursos}>
            <Text style={styles.tituloPagina}>
              Nossos cursos
            </Text>

            <TextInput
              style={styles.buscarCursos}
              placeholder="Buscar Cursos"
              value={busca}
              onChangeText={setBusca}
            ></TextInput>


            <FlatList
              data={cursosFiltrados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                // card do curso aqui
                <View style={styles.curso}>

                  <Text style={styles.cursoTitulo}>
                      {item.titulo}
                  </Text>

                  <Image style={styles.cursoImagem} source={item.img} ></Image>

                  <Text style={styles.cursoDescricao}>
                    {item.descricao}
                  </Text>

                  <Text style={styles.cursoCH}>
                    CH: {item.ch}h
                  </Text>

                  <Link style={styles.cursoBtnLink} href={{
                    pathname: '/detalhesCurso',
                    params: {
                      titulo: item.titulo,
                      descricao: item.descricao,
                      ch: item.ch,
                      objetivo: item.objetivo,
                      publico: item.publico,
                      conteudos: item.conteudo,
                      modalidade: item.modalidade,
                      nivel: item.nivel
                    },
                  }} asChild>

                    <TouchableOpacity style={styles.btnCurso}>
                      <Text style={styles.textoBtnCurso}>
                        Ver detalhes
                      </Text>
                    </TouchableOpacity>
                    
                  </Link>

                </View>

              )} 
            />
            
  
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

      cursoTitulo:{
        color: '#1a4db3',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      btnCurso: {
        backgroundColor: '#1a4db3',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems:'center',
        marginTop: 10
      },

      textoBtnCurso: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        width: 80
      },

      cursoBtnLink: {
        textAlign:'center'
      },

      cursoImagem: {
        width: '100%',
        height: 140,
        backgroundColor: '#f5f5f5',
        borderRadius: 6,
        marginBottom: 10,
        resizeMode:'contain'

      },

      cursoDescricao: {
        textAlign: 'center',
        color:'black',
        fontSize: 16,
        margin: 10
      },

      cursoCH: {
        textAlign: 'center',
        color:'black',
        fontSize: 16,
        margin: 10,
        fontWeight: 'bold'
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