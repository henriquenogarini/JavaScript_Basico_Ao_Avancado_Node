let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto aleatório 02")

novoElemento.appendChild(texto)

let p = document.querySelector("#paragrafoPrincipal")
let pai = p.parentNode

pai.appendChild(novoElemento)