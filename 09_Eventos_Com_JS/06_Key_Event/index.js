window.addEventListener("keydown", function(e) {

    if(e.key == 'q'){
        console.log("Apertou a tecla q")  //Se segurar a tecla, fica contabilizando até soltar
    } else if(e.key == "Enter"){
        console.log("Apertou a tecla Enter")  //Se segurar a tecla, fica contabilizando até soltar
    }

})

window.addEventListener("keyup", function(e) {

    if(e.key == "Enter"){
        console.log("Soltou a tecla Enter") //Contabiliza o clica apenas após soltar a tecla, ou seja, o mais indicado.
    }                                       //Para testar, comentar o else if do Enter.

})