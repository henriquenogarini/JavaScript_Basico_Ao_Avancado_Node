let nomes = ["Aline", "Henrique", "João", "Carlos"]

let nomes02 = ["Aline", "Henrique", "João", "Carlos", "Isabella", "Cristina", "Luciana", "Alberto"]

function verificaTamanho(arr) {
    if (arr.length <=4) {
        console.log("Poucos elementos")
    } else {
        console.log("Muitos elementos")
    }
}

verificaTamanho(nomes)
verificaTamanho(nomes02)