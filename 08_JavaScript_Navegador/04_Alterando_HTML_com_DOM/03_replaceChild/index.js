//Inserindo elementos com insertBefore
let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto aleatório")

novoElemento.appendChild(texto)

//Trocando elementos com replaceChild

let heading = document.querySelector('#tituloPrincipal')
let paiHeading = heading.parentNode

paiHeading.replaceChild(novoElemento, heading)
