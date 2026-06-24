import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useState } from 'react'
import { router, Link } from 'expo-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BotaoPrimario from '../../components/BotaoPrimario'
import MensagemSistema from '../../components/MensagemSistema'

const API_URL = "http://127.0.0.1:3000"

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [mensagemSistema, setMensagemSistema] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')

    async function fazerLogin() {

        if (email === '' || senha === '') {
            setMensagemSistema("Preencha todos os campos.")
            setTipoMensagem("erro")
            return
        }

        try {

            console.log("Tentando login:", email)

            const resposta = await fetch("http://127.0.0.1:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            })

            const dados = await resposta.json()

            console.log("RESPOSTA:", dados)

            if (resposta.ok) {

                localStorage.setItem("logado", "true")
                localStorage.setItem("emailUsuario", email)

                setMensagemSistema("Login realizado com sucesso!")
                setTipoMensagem("sucesso")

                setTimeout(() => {
                    router.replace("/cardapio")
                }, 1000)

            } else {

                setMensagemSistema(
                    dados.erro ||
                    dados.mensagem ||
                    "Usuário ou senha inválidos"
                )

                setTipoMensagem("erro")
            }

        } catch (erro) {

            console.log("ERRO LOGIN:", erro)

            setMensagemSistema("Erro ao conectar com o servidor")
            setTipoMensagem("erro")
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.corpo}>

            <Header ativo="login" />

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Login
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

                <BotaoPrimario
                    texto="Entrar"
                    funcao={fazerLogin}
                />

                <MensagemSistema
                    mensagem={mensagemSistema}
                    tipo={tipoMensagem}
                />

                <Link
                    href="/cadastro"
                    style={styles.link}
                >
                    Criar Conta
                </Link>

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
        padding: 20,
        width: '100%',
        maxWidth: 430,
        alignSelf: 'center'
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff4da6',
        textAlign: 'center',
        marginBottom: 20
    },

    input: {
        backgroundColor: '#1c1c1c',
        borderColor: '#8a2be2',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        color: '#ffffff'
    },

    link: {
        textAlign: 'center',
        color: '#ff4da6',
        marginTop: 20,
        fontWeight: 'bold'
    }
})