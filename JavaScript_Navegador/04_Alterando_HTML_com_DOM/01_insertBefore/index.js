let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto aleatório")

novoElemento.appendChild(texto)

let elementoAlvo = document.querySelector('#tituloPrincipal')
let elementoPai = document.querySelector('#containerPrincipal')

elementoPai.insertBefore(novoElemento, elementoAlvo)
