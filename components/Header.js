import {View, Text, StyleSheet} from   'react-native'
import {Link} from 'expo-router'

export default function Header({ativo}){
    return (          
      // =========== CABELALHO =============  
        <View style={styles.topo}>
                
      { /* Logo do sistema */}
        <Link href='/'>
          <Text style={styles.logoP1}>Tech</Text>
            <Text style={styles.logoP2}>Educa</Text>
        </Link>
                
        { /* Menu de Navegação */}
        <View style={styles.menu}>
            <Link href='/'>
              <Text style={[styles.menuItem, ativo ==="inicio" && styles.ativo]}> Início </Text>
            </Link>
        <Link href='/sobre'>
          <Text style={[styles.menuItem, ativo ==="sobre" && styles.ativo]}> Sobre </Text>
        </Link>
        <Link href='/contato'>
          <Text style={[styles.menuItem, ativo ==="contato" && styles.ativo]}> Contato </Text>
        </Link>
        <Link href='/login'>
          <Text style={[styles.menuItem, ativo ==="login" && styles.ativo]}>Login</Text>
        </Link>
        </View>
      </View>
        
    )
}

const styles = StyleSheet.create({
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
})