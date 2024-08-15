let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

//Aciona quando o mouse clica
btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão")
})

//Aciona quando o mouse solta
btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão")
})

//Aciona quando se clica duas vezes
btn2.addEventListener("dblclick", function() {
    console.log("Clicou duas vezes")
})

//Aciona o botão só com o clique do botão direito.
btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault
    console.log("Botão direito clicado")
})
