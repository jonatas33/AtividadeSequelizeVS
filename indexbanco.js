const express = require("express");//modulo express retorna uma função para a variavel.
const app = express();
const {engine} = require('express-handlebars')//constante recebe o modulo express handlebars
const bodyParser = require('body-parser')//Capta/Recebe dados de formulários
const Post = require('./models/Post')
const Sequelize = require('sequelize')

//Template engine // existem muitos templates para o node
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//BODY PARSER - config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())//JSON é basicamente um formato leve de troca de inforações/dados entre sistemas. Mas JSON significa JavaScript Object Notation

//ROTAS
app.get('/', function(req, res){
    res.render('home')
})
app.get('/cad', function(req, res){
    res.render('formulario')//o express compreende que queremos renderizar o arquivo formulário do handlebars
})

//Envia dados de formulário para o banco de dados
app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function(){
        //res.send("Post criado com sucesso")
        res.redirect('/')
    })
    .catch(function(erro){
        res.send("Houve um erro: " + erro)
    })//Informa se houve falha ou não na criação do post
})   

app.listen(8090, function(){
    console.log("Servidor Rodando na url http:localhost:8090")
});
