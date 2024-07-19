class Carro {
    constructor(marca, cor, gasolinaRest, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRest = gasolinaRest
        this.consumo = consumo
    }

    dirigir(km){

        let litrosConsumidos = km / this.consumo

        this.gasolinaRest -= litrosConsumidos

    }

    abastecer(l){

        this.gasolinaRest += 1

    }

}

let carro = new Carro("Mitsubishi", "Chumbo", 100, 14)
console.log(carro)

carro.dirigir(100)
console.log(carro)

carro.abastecer(10)