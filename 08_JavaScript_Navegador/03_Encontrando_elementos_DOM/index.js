//Encontrando Elementos gerais:
console.log(document.body)

console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].innerText)

//Encontrando elementos por tags:
console.log(document.getElementsByTagName("h1"))

console.log(document.getElementsByTagName("p"))

console.log(document.getElementsByTagName("li"))

//Encontrando elementos por Id:
console.log(document.getElementById('tituloPrincipal'))
console.log(document.getElementById('tituloSecundario'))

//Encontrando elementos por classes:
console.log(document.getElementsByClassName("itensAzuis"))
console.log(document.getElementsByClassName("itensVermelhos"))

//Encontrando elementos por query:
console.log(document.querySelector("#containerPrincipal h1"))
console.log(document.querySelector("#containerSecundario h2"))
console.log(document.querySelector("div div p"))
console.log(document.querySelector("footer h2"))
console.log(document.querySelector("ul .itensAzuis"))