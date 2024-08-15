let age = Number(prompt("Digite a sua idade: "))
let cnh = true

if (age >= 18 && cnh == true){
    alert("Você está apto a dirigir !")
}
else if (age >= 18 && cnh == false){
    alert("Você precisa tirar carta para dirigir !")
}
else{
    alert("Você não pode dirigir !")
}