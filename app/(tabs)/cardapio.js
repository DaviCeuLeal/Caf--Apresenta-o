import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Cardapio() {

    const produtos = [
        {
            nome: 'Espresso',
            preco: 'R$ 5,00',
            imagem: require('../../assets/images/espresso.jpg.webp')
        },
        {
            nome: 'Cappuccino',
            preco: 'R$ 10,00',
            imagem: require('../../assets/images/cappuccino.jpg')
        },
        {
            nome: 'Latte',
            preco: 'R$ 12,00',
            imagem: require('../../assets/images/latte.jpg')
        },
        {
            nome: 'Croissant',
            preco: 'R$ 9,00',
            imagem: require('../../assets/images/croissant.jpg')
        },
        {
            nome: 'Pão de Queijo com Linguiça',
            preco: 'R$ 11,00',
            imagem: require('../../assets/images/paodequeijo.jpg')
        }
    ]

    return (
        <ScrollView contentContainerStyle={styles.corpo}>

            <Header ativo="cardapio" />

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Nosso Cardápio
                </Text>

                {produtos.map((item, index) => (

                    <View key={index} style={styles.card}>

                        <Image
                            source={item.imagem}
                            style={styles.imagem}
                        />

                        <Text style={styles.nome}>
                            {item.nome}
                        </Text>

                        <Text style={styles.preco}>
                            {item.preco}
                        </Text>

                    </View>

                ))}

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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff4da6',
        textAlign: 'center',
        marginBottom: 25
    },

    card: {
        backgroundColor: '#1c1c1c',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#8a2be2'
    },

    imagem: {
        width: '100%',
        height: 220
    },

    nome: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },

    preco: {
        color: '#ff4da6',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 15,
        fontWeight: 'bold'
    }

})