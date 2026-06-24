import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Sobre() {
    return (
        <ScrollView contentContainerStyle={styles.corpo}>

            <Header ativo="sobre" />

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Sobre o Café Central
                </Text>

                <View style={styles.card}>

                    <Text style={styles.texto}>
                        O Café Central nasceu com o objetivo de oferecer uma experiência única para os amantes de café.
                    </Text>

                    <Text style={styles.texto}>
                        Trabalhamos com grãos selecionados, bebidas preparadas com cuidado e produtos frescos produzidos diariamente.
                    </Text>

                    <Text style={styles.texto}>
                        Nosso ambiente foi pensado para proporcionar conforto, produtividade e bons momentos entre amigos e familiares.
                    </Text>

                    <Text style={styles.texto}>
                        Mais do que uma cafeteria, buscamos criar um espaço onde cada visita se torne uma experiência especial.
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

    titulo: {
        color: '#ff4da6',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },

    card: {
        backgroundColor: '#1c1c1c',
        padding: 25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#8a2be2'
    },

    texto: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 28,
        marginBottom: 15,
        textAlign: 'justify'
    }

})