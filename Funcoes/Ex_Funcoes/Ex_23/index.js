function tamanhoString(text){
    if (text.length > 10){
        return "Texto muito longo"
    } else {
        return "Texto dentro do limite"
    }
}

console.log(tamanhoString("Meu nome é Henrique Nogarini"))
console.log(tamanhoString("Sim"))