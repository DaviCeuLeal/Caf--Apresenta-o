import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.rodape}>
            <Text style={styles.texto}>
                © 2026 Café Central
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
        backgroundColor: '#000',
        padding: 20,
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 2,
        borderTopColor: '#8a2be2'
    },

    texto: {
        color: '#fff',
        fontSize: 16
    }
})