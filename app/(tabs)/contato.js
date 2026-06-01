import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet, // Para aplicar estilo na página
    TextInput
   } from 'react-native'; // Importa os componentes View e Text
   import {Link} from 'expo-router';
  import { useState } from 'react';
   
  export default function Contato() {
   const[nome, setNome] = useState('');
   const[email,setEmail] = useState('');
   const[mensagem,setMensagem] = useState(''); 

   const[mensagemSistema,setMensagemSistema] = useState('');
   const[tipoMensagem, setTipoMensagem] = useState('');

   function validarFormulario(){
      if(nome === ''){
        setMensagemSistema('Digite seu nome');
        setTipoMensagem('erro');
        return;
      }
      if(/\d/.test(nome)){
        setMensagemSistema("O nome não pode conter número!");
        setTipoMensagem("erro");
        return;
      }
      if(email === ''){
        setMensagemSistema("Digite seu e-mail");
        setTipoMensagem("erro");
        return;
      }
      if(!email.includes('@') || !email.includes('.com')){
        setMensagemSistema("Digite um e-mail válido");
        setTipoMensagem("erro");
        return;
      }
      if(mensagem === ''){
        setMensagemSistema('Digite uma mensagem');
        setTipoMensagem('erro');
        return;
      };
      if(mensagem.length < 10){
        setMensagemSistema('A mensagem deve ter pelo menos 10 caracteres');
        setTipoMensagem('erro');
        return;
      } 

      setMensagemSistema("Mensagem enviada com sucesso!");
      setTipoMensagem("sucesso");

      setNome('');
      setEmail('');
      setMensagem('');
   };
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
                <Text style={[styles.menuItem, styles.ativo]}> Contato </Text>
              </Link>
            </View>
          </View>

          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          { /* Área principal da tela */}
          <View style={styles.container}>
          { /* Card branco que envolve o form */}
            <View style={styles.cardContato}>
              <Text style={styles.tituloPagina}>
                Entre em contato
              </Text>
              <Text style={styles.subtitulo}>
                Envie sua mensagem para nossa equipe
              </Text>

              <TextInput style={styles.input}
                        placeholder='Digite seu nome'
                        value={nome} //exibe o estado da variavel
                        onChangeText={setNome} // atualiza o estado da variavel
              ></TextInput>

              
              <TextInput style={styles.input}
                        placeholder='Digite seu e-mail'
                        keyboardType='email-address'
                        value={email} //exibe o estado da variavel
                        onChangeText={setEmail} // atualiza o estado da variavel
              ></TextInput>

              <TextInput style={styles.input}
                        placeholder='Digite sua mensagem'
                        multiline={true} // permite quebra de linha
                        numberOfLines={5} //altura inicial do campo
                        value={mensagem} //exibe o estado da variavel
                        onChangeText={setMensagem} // atualiza o estado da variavel
              ></TextInput>

              <TouchableOpacity style={styles.btnEnviar}
                                onPress={validarFormulario}>
                <Text style={styles.textoBtn}>
                  Enviar Mensagem
                </Text>
              </TouchableOpacity>

              <Text style={
                tipoMensagem==='erro'
                ? styles.mensagemErro
                : styles.mensagemSucesso
              }>
                {mensagemSistema}
              </Text>

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
        backgroundColor: '#f5f5f5',
        padding: 20,
      },

      cardContato: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        }
      },

      tituloPagina:{
        color: '#1a4db3',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },

      subtitulo: {
        textAlign: 'center',
        marginBottom: 10,
        color: '#555'
      },

      input: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        height: 50,
        textAlignVertical: 'top'
      },

      btnEnviar: {
        backgroundColor: '#1a4db3',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center'
      },

      textoBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
      },

      mensagemErro: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
      },

      mensagemSucesso: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
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