const {createServer} = require("http")

// Cria um servidor HTTP
// A função createServer recebe uma função callback, que é executada toda vez que o servidor recebe uma requisição
let server = createServer((request, response) => {

    // Define o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo como "text/html"
    response.writeHead(200, {"Contente-Type" : "text/html"})

    // Escreve o corpo da resposta, que é uma página HTML simples
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
        `)
        // Finaliza a resposta, enviando todos os dados ao cliente
        response.end()

})

// O servidor é configurado para ouvir na porta 8000
server.listen(8000)

console.log("Ouvindo a porta 8000")