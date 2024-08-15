// Importa o módulo 'express', que é um framework para Node.js que simplifica a criação de servidores web
let express = require("express")

// Cria uma instância da aplicação Express
let app = express()

// Define uma rota para o caminho raiz ("/")
// Quando uma requisição GET é feita para "/", a função callback é executada
app.get("/", function(req, res) {
    // Envia uma resposta simples
    res.send("Primeira rota com Express")
})

// Define uma rota para o caminho ("/teste")
// Quando uma requisição GET é feita para "/teste", a função callback é executada
app.get("/teste", function(req, res) {
    // Envia uma resposta simples
    res.send("Fazendo teste para postman")
})

// Faz com que a aplicação escute na porta 3000
// A função callback passada para 'listen' é executada quando o servidor começa a ouvir nessa porta
app.listen(3000, function () {
    // Exibe uma mensagem no console indicando que o servidor está funcionando na porta 3000
    console.log("A aplicação está funcionando na porta 3000")
})