class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir () {
        console.log("Au Au")
    }
}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 4, 'Amarelo')

console.log(labrador)
labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)