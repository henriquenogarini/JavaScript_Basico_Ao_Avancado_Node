let elemento = document.querySelector('#tituloPrincipal')

console.log(`Largura: ` + elemento.offsetWidth) //Considera Bordas
console.log(`Altura: ` + elemento.offsetHeight) //Considera Bordas

console.log(`Largura: ` + elemento.clientWidth) //Não considera Bordas
console.log(`Altura: ` + elemento.clientHeight) //Não considera Bordas