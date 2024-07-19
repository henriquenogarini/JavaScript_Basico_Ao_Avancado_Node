let pessoa = {
    "nome": "Henrique",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
// console.log(pessoaTexto.nome) --> Não funciona

let pessoaJSON = JSON.parse(pessoaJSON)

console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])