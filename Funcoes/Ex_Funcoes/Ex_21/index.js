function tipoDeDado(dado){
    if (typeof dado === "number"){
        return Number
    }
    else if  (typeof dado === "string") {
       return String
    }
    else{
        return Boolean
    }
}

console.log(tipoDeDado(25))
console.log(tipoDeDado("Henrique"))
console.log(tipoDeDado(true))
console.log(tipoDeDado("25"))
console.log(tipoDeDado(8 > 15))