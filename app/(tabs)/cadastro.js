import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BotaoPrimario from '../../components/BotaoPrimario'
import MensagemSistema from '../../components/MensagemSistema'

const API_URL = "http://127.0.0.1:3000"

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const [mensagemSistema, setMensagemSistema] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')

    async function cadastrar() {

        if (!nome || !email || !senha || !confirmarSenha) {
            setMensagemSistema("Preencha todos os campos.")
            setTipoMensagem("erro")
            return
        }

        if (senha !== confirmarSenha) {
            setMensagemSistema("As senhas não coincidem.")
            setTipoMensagem("erro")
            return
        }

        try {

            const resposta = await fetch(`${API_URL}/cadastro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    nome,
                    email,
                    senha
                })
            })

            const dados = await resposta.json()

            if (resposta.ok) {

                setMensagemSistema(dados.mensagem)
                setTipoMensagem("sucesso")

                setNome('')
                setEmail('')
                setSenha('')
                setConfirmarSenha('')

            } else {

                setMensagemSistema(dados.erro)
                setTipoMensagem("erro")

            }

        } catch (erro) {

            console.log(erro)

            setMensagemSistema("Erro ao conectar com o servidor")
            setTipoMensagem("erro")

        }
    }

    return (
        <ScrollView contentContainerStyle={styles.corpo}>

            <Header ativo="cadastro" />

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Cadastro
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <BotaoPrimario
                    texto="Cadastrar"
                    funcao={cadastrar}
                />

                <MensagemSistema
                    mensagem={mensagemSistema}
                    tipo={tipoMensagem}
                />

                <Link href="/login" style={styles.link}>
                    Já possui conta? Fazer Login
                </Link>

            </View>

            <Footer />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    corpo:{flexGrow:1,backgroundColor:'#0f0f0f'},
    container:{padding:20,maxWidth:430,width:'100%',alignSelf:'center'},
    titulo:{fontSize:28,fontWeight:'bold',color:'#ff4da6',textAlign:'center',marginBottom:20},
    input:{
        backgroundColor:'#1c1c1c',
        borderColor:'#8a2be2',
        borderWidth:1,
        borderRadius:10,
        padding:12,
        marginBottom:12,
        color:'#fff'
    },
    link:{
        textAlign:'center',
        color:'#ff4da6',
        marginTop:20,
        fontWeight:'bold'
    }
})