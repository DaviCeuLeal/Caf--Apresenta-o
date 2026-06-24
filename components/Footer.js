import {View, Text, StyleSheet} from   'react-native'
import {Link} from 'expo-router'

export default function Footer(){
    return (
               // =========== RODAPÉ =============
                      <View style={styles.rodape}>
                        { /* Texto de direitos de autorais */}
                        <Text style={styles.textoRodape}> 2026 TechEduca. Todos os direitos reservados.</Text>
              
                        { /* Links de Contato */}
                        <Link href='/contato'>
                          <Text style={styles.linkRodape}>Entre em contato</Text>'
                        </Link>
                      </View>
              
         
    )
}


const styles = StyleSheet.create({
     rodape: {
      backgroundColor: '#1a4db3',
      padding: 20,
      alignItems: 'center',
      gap: 8,
      marginTop: 'auto', // empurra para baixo,
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
})