import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BotaoPrimario from '../../components/BotaoPrimario'
import MensagemSistema from '../../components/MensagemSistema'

const API_URL = "http://127.0.0.1:3000"

export default function Contato() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const [mensagemSistema, setMensagemSistema] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')

    async function enviarMensagem() {

        if (!nome || !email || !mensagem) {
            setMensagemSistema("Preencha todos os campos.")
            setTipoMensagem("erro")
            return
        }

        try {

            const resposta = await fetch(`${API_URL}/contato`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    nome,
                    email,
                    mensagem
                })
            })

            const dados = await resposta.json()

            if (resposta.ok) {

                setMensagemSistema(dados.mensagem)
                setTipoMensagem("sucesso")

                setNome('')
                setEmail('')
                setMensagem('')

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

            <Header ativo="contato" />

            <View style={styles.container}>

                <Text style={styles.titulo}>
                    Entre em Contato
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
                    style={styles.mensagem}
                    placeholder="Digite sua mensagem"
                    multiline
                    value={mensagem}
                    onChangeText={setMensagem}
                />

                <BotaoPrimario
                    texto="Enviar"
                    funcao={enviarMensagem}
                />

                <MensagemSistema
                    mensagem={mensagemSistema}
                    tipo={tipoMensagem}
                />

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

    input: {
        backgroundColor: '#1c1c1c',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#8a2be2',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12
    },

    mensagem: {
        backgroundColor: '#1c1c1c',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#8a2be2',
        borderRadius: 10,
        padding: 12,
        minHeight: 120,
        textAlignVertical: 'top'
    }

})