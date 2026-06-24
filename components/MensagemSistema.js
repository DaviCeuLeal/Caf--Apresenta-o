import { Text, StyleSheet } from 'react-native'

export default function MensagemSistema({ mensagem, tipo }) {

    if (!mensagem) {
        return null
    }

    return (
        <Text
            style={
                tipo === "erro"
                    ? styles.mensagemErro
                    : styles.mensagemSucesso
            }
        >
            {mensagem}
        </Text>
    )
}

const styles = StyleSheet.create({

    mensagemErro: {
        backgroundColor: '#2b0000',
        color: '#ff6b6b',
        padding: 12,
        borderRadius: 8,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#ff4d4d'
    },

    mensagemSucesso: {
        backgroundColor: '#102b10',
        color: '#66ff99',
        padding: 12,
        borderRadius: 8,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#66ff99'
    }

})