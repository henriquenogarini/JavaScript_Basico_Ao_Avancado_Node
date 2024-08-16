const express = require("express")
const { engine } = require("express-handlebars"); // Importa a função 'engine' para configurar o Handlebars
const app = express()
const path = require("path")
const db = require("./db/connection")
const bodyParser = require("body-parser")
const Job = require("./models/Job")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

const PORT = 3000

// Inicia o servidor Express e faz com que ele ouça a porta definida
app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})

// Configura o middleware 'body-parser' para processar os dados enviados via POST de formulários HTML
// 'urlencoded' significa que os dados do formulário serão processados como string ou array
// 'extended: false' significa que os objetos aninhados não serão suportados, ou seja, valores complexos não serão permitidos
app.use(bodyParser.urlencoded({ extended: false }))

//Handle Bars
app.set("views", path.join(__dirname, "views"))
app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//static folder
app.use(express.static(path.join(__dirname, "public")))

// Tenta autenticar a conexão com o banco de dados
db
    .authenticate() // Verifica se a conexão com o banco de dados foi bem-sucedida
    .then(() => {
        console.log("Conectou ao banco com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err)
    })

// Define uma rota GET para a raiz do site ("/")
// Quando um usuário acessar a raiz do site, o servidor responde com a mensagem "Está funcionando"
app.get("/", (req,res) => {

    let search = req.query.job
    let query = "%"+search+"%" //PH -> PHP, Word -> WordPress
    if(!search){
    Job.findAll({order: [
        ["createdAt", "DESC"]
    ]})
    .then(jobs => {
        res.render("index", {
            jobs
        })
    })
    .catch(err => console.log(err))
    }else {
    Job.findAll({
        where: {title: {[Op.like]: query}},
        order: [
         ["createdAt", "DESC"]
    ]})
    .then(jobs => {
        res.render("index", {
             jobs,search
        })
    })
    .catch(err => console.log(err))
}
})

// Define as rotas relacionadas aos jobs
// O arquivo './routes/jobs' deve exportar um roteador que gerencia as rotas relacionadas a "jobs"
// Aqui, qualquer requisição que comece com "/jobs" será encaminhada para o roteador definido em './routes/jobs'
app.use("/jobs", require("./routes/jobs"))