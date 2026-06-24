import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Link} from 'expo-router'


export default function BotaoPrimario({texto,funcao}){
    return(
        <TouchableOpacity style={styles.btnPrimario} onPress={funcao}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        btnPrimario: {
    backgroundColor: '#ff4da6',
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
})