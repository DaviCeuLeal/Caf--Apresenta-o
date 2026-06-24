import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router } from 'expo-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BotaoPrimario from '../../components/BotaoPrimario'

export default function Inicio() {

    function abrirCardapio() {
        router.push('/cardapio')
    }

    return (
        <ScrollView contentContainerStyle={styles.corpo}>

            <Header ativo="inicio" />

            <View style={styles.container}>

                <View style={styles.hero}>

                    <Text style={styles.titulo}>
                        ☕ Café Central
                    </Text>

                    <Text style={styles.subtitulo}>
                        Onde cada café vira experiência
                    </Text>

                    <BotaoPrimario
                        texto="Ver Cardápio"
                        funcao={abrirCardapio}
                    />

                </View>

                <Text style={styles.tituloSecao}>
                    Por que escolher o Café Central?
                </Text>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        ☕ Qualidade
                    </Text>

                    <Text style={styles.cardTexto}>
                        Cafés premium selecionados.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        🥐 Doces Artesanais
                    </Text>

                    <Text style={styles.cardTexto}>
                        Produção fresca todos os dias.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        ✨ Ambiente
                    </Text>

                    <Text style={styles.cardTexto}>
                        Moderno, confortável e acolhedor.
                    </Text>

                </View>

            </View>

            <Footer />

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    corpo: {
        flexGrow: 1,
        backgroundColor: '#0f0f0f'
    },

    container: {
        width: '100%',
        maxWidth: 430,
        alignSelf: 'center',
        padding: 20
    },

    hero: {
        backgroundColor: '#1c1c1c',
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        marginBottom: 25,
        borderWidth: 2,
        borderColor: '#8a2be2'
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff4da6',
        textAlign: 'center'
    },

    subtitulo: {
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 16
    },

    tituloSecao: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },

    card: {
        backgroundColor: '#1c1c1c',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#ff4da6'
    },

    cardTitulo: {
        color: '#ff4da6',
        fontSize: 18,
        fontWeight: 'bold'
    },

    cardTexto: {
        color: '#ffffff',
        marginTop: 8
    }

})