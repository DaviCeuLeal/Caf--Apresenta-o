import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet, // Para aplicar estilo na página
    TextInput
   } from 'react-native'; // Importa os componentes View e Text
   import {Link} from 'expo-router';
   
  export default function Login() {
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
              <Link href='/contato'>
                <Text style={styles.menuItem}> Contato </Text>
              </Link>
            </View>
          </View>

          { /*=========== CONTEÚDO DA PÁGINA =============*/}
            <View style={styles.container}>

                <View style={styles.paginaAuth}>
                    <Text style={styles.tituloAuth}>Login</Text>
                    <Text style={styles.textoAuth}>
                        Entre com seu e-mail e senha para
                        acessar os cursos.
                    </Text>
                    <View style={styles.blocoAuth}>
                        { /* CAMPO DE E-MAIL */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder='Digite seu e-mail'
                                    keyboardType='email-address'
                                    style={styles.input} ></TextInput>

                        { /* CAMPO DE SENHA */}
                        <Text style={styles.label}>Senha</Text>
                        <TextInput placeholder='Digite sua senha'
                                    secureTextEntry = {true}
                                    style={styles.input} ></TextInput>
                        
                        <TouchableOpacity style={styles.btnPrimario}>
                            <Text style={styles.textoBotao}>Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.mensagemAuth}></Text>

                        <Text style={styles.linkAuth}>
                            Ainda não possui uma conta?
                        </Text>
                      
                        <Link style={styles.linkAuthDestaque} href='/cadastro'>
                            <Text>
                                Fazer Cadastro
                            </Text>
                        </Link>


                    </View>


                </View>

            </View>
          

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
  
      container: {
        padding: 20,
      },

      paginaAuth: {
        paddingVertical: 40,
        paddingHorizontal: 20,
      },

      blocoAuth: {
        backgroundColor: '#fffff',
        gap: 10,
        padding: 30,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },

        },

        mensagemAuth: {
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
            marginHeight: 20,
        },

        linkAuth: {
            textAlign:'center',
            marginTop: 20,
            color: '#222',
            fontWeight: 'bold'
        },

        linkAuthDestaque: {
            color: "#1a4db3",
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
        },

        tituloAuth: {
            color: '#1a4db3',
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
        },

        textoAuth: {
            textAling: 'center',
            marginBottom: 20,
            color: '#555',
            fontSize: 16
        },

        label: {
            fontWeight: 'bold',
            color: '#222'
        },

        input: {
            padding: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 6,
            fontSize: 16,
            backgroundColor: '#ffffff'
        },

        btnPrimario: {
          backgroundColor: '#ff6a00',
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginTop: 10
        },

        textoBotao: {
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'center'
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