import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function Header({ ativo }) {
    return (
        <View style={styles.topo}>

            <Text style={styles.logo}>
                ☕ Café Central
            </Text>

            <View style={styles.menu}>

                <Link href="/">
                    <Text style={[
                        styles.menuItem,
                        ativo === "inicio" && styles.ativo
                    ]}>
                        Início
                    </Text>
                </Link>

                <Link href="/cardapio">
                    <Text style={[
                        styles.menuItem,
                        ativo === "cardapio" && styles.ativo
                    ]}>
                        Cardápio
                    </Text>
                </Link>

                <Link href="/sobre">
                    <Text style={[
                        styles.menuItem,
                        ativo === "sobre" && styles.ativo
                    ]}>
                        Sobre
                    </Text>
                </Link>

                <Link href="/contato">
                    <Text style={[
                        styles.menuItem,
                        ativo === "contato" && styles.ativo
                    ]}>
                        Contato
                    </Text>
                </Link>

                <Link href="/login">
                    <Text style={[
                        styles.menuItem,
                        ativo === "login" && styles.ativo
                    ]}>
                        Login
                    </Text>
                </Link>

                <Link href="/cadastro">
                    <Text style={[
                        styles.menuItem,
                        ativo === "cadastro" && styles.ativo
                    ]}>
                        Cadastro
                    </Text>
                </Link>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#000',
        paddingTop: 20,
        paddingBottom: 15,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ff4da6'
    },

    logo: {
        color: '#ff4da6',
        fontSize: 28,
        fontWeight: 'bold'
    },

    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 12,
        marginTop: 15
    },

    menuItem: {
        color: '#fff',
        fontWeight: 'bold'
    },

    ativo: {
        color: '#ff4da6'
    }
})