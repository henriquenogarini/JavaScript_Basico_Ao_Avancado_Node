function Cachorro(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuu")
}

Cachorro.prototype.latir = function() {
    console.log("Au Au AU")
}

let husky = new Cachorro("husky", 4, "cinza")

husky.uivar()
husky.latir()