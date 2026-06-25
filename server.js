// Carrega as variáveis de ambiente ANTES de qualquer outra coisa
require("dotenv").config();
const express = require("express"); // Framework principal
const cors = require("cors"); // Controle de origens
const session = require("express-session"); // Gerenciamento de sessões
const bcrypt = require("bcryptjs"); // Criptografia de senhas
const conexao = require("./db.js"); // Pool de conexões MySQL

// Cria a instância do servidor Express
const app = express();

// Lista de origens permitidas para acessar a API
    const listOrigins = [
        "http://localhost:8081", // Expo no computador
        "http://localhost:5501", // Live Server do VS Code
        "http://127.0.0.1:5501", // Variação do Live Server
        "https://DaviCeuLeal.github.io" // Deploy no GitHub Pages
    ];
    app.use(cors({
    origin: true,
    credentials: true
    }));

// Configurações da API
app.use(express.json()); // Habilita leitura de dados JSON no corpo das requisições
app.use(express.urlencoded({ extended: true }));


// Configuração do objeto sessão
const sessionConfig = {
    secret: process.env.SESSION_SECRET, // Chave secreta para assinar o COOKIE
    resave: false, // Não salva a sessão se não houve mudanças
    saveUninitialized: false, // Não cria sessão para usuários não logados (CORRIGIDO)
    name: 'techeduca.sid', // Nome personalizado para o cookie da sessão
    cookie : {
        httpOnly: true, // Impede acesso ao cookie via JavaScript (segurança)
        maxAge: 1000*60*60 // Tempo de vida: 1 hora em milisegundos
    }
};

// Ambiente Local X Produção
if(process.env.NODE_ENV==="production"){
    // Em produção (HTTPS): configurações mais rígidas
    app.set("trust proxy",1); // Confia no proxy do servidor (Render,Railway..)
    sessionConfig.cookie.sameSite="none"; // Permite cookir entre dominios diferentes
    sessionConfig.cookie.secure = true; // Cookie só trafega em HTTPS
} else {
    // Em desenvolvimentro (HTTP local): configuração mais permissiva
    sessionConfig.cookie.sameSite="lax"; // Proteção moderada CSRF
    sessionConfig.cookie.secure = false; // Aceita HTTP (localhost não tem HTTPS)
};

app.use(session(sessionConfig)); // Aplica a configuração de sessão (CORRIGIDO)



// Primeira Rota (PRINCIPAL)
app.get("/",(req,res)=>{
    // O primeiro parametro é o caminho, o segundo é a função de callback
    // req - objeto com os dados da requisição (vem do servidor)
    // res - objeto para enviar a resposta (vai para o user/site/app)
    res.send("API Café funcionando"); 
});

// Rota de Cadastro
app.post("/cadastro", async (req,res) => {
    console.log("BODY RECEBIDO:", req.body);
    try{ 
        // 1 - Extrai os campos enviados no corpo da requisição (JSON)
        const{nome,email,senha} = req.body
        console.log(req.body);
        
        // 2 - Verifica se algum campo obrigatório está vazio
        if(!nome || !email || !senha){
            return res.status(400).json({erro: "Preencha todos os campos"})
        }

        // 3 - Consulta o banco: já existe usuário com esse e-mail
        const [rows]  = await conexao.execute(
            "SELECT id FROM tb_usuarios WHERE email=?", [email]
        );

        if(rows.length>0){
            return res.status(409).json({erro:"E-mail já cadastrado"})
        };

        // 4 - Criptografa a senha (10 = fator de custo hash)
        const senhaHash = await bcrypt.hash(senha,10);

        // 5 - Insere um novo usuário no banco com senha criptografada

        const sql = `INSERT INTO tb_usuarios
                    (nome,email,senha)
                    VALUES(?,?,?)`
        conexao.execute(sql,[nome,email,senhaHash])
        res.json({mensagem: "Usuário cadastrado com sucesso"}); 
        
    } catch(erro){
    console.error("ERRO CADASTRO:", erro);
    res.status(500).json({
        erro: "Erro ao cadastrar usuário!",
        detalhe: erro.message
    });
}
})

// Rota de Login
app.post("/login", async (req, res) => {
    try {

        const { email, senha } = req.body || {}

        console.log("EMAIL RECEBIDO:", email)
        console.log("SENHA RECEBIDA:", senha)

        if (!email || !senha) {
            return res.status(400).json({
                erro: "Preencha todos os campos"
            })
        }

        const [resultado] = await conexao.execute(
            "SELECT * FROM tb_usuarios WHERE email=?",
            [email]
        )

        if (resultado.length === 0) {

            console.log("EMAIL NÃO ENCONTRADO")

            return res.status(401).json({
                erro: "Usuário ou senha inválidos!"
            })
        }

        const usuario = resultado[0]

        console.log("USUARIO ENCONTRADO:", usuario.email)
        console.log("HASH DO BANCO:", usuario.senha)

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        )

        console.log("SENHA CORRETA?", senhaCorreta)

        if (!senhaCorreta) {

            return res.status(401).json({
                erro: "Senha inválida"
            })
        }

        req.session.usuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }

        res.json({
            mensagem: "Login realizado com sucesso!"
        })

    } catch (erro) {

        console.log("ERRO LOGIN:", erro)

        res.status(500).json({
            erro: "Erro ao realizar login"
        })
    }
})

// Rota de Contato
app.post("/contato",async (req,res)=>{
    try{
        const {nome, email, mensagem} = req.body

        if(!nome || !email || !mensagem){
            return res.status(400).json({erro: "Preencha todos os campos"});
        }

        const sql = `INSERT INTO tb_mensagem(nome,email,mensagem)
                    VALUES(?,?,?)`
                    
        await conexao.execute(sql,[nome,email,mensagem])
        res.json({mensagem: "Mensagem enviada com sucesso!"});

    } catch(erro){
        res.status(500).json({erro:"Erro ao enviar mensagem"});
    }

})

// Iniciando o Servidor na porta 3000
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
})