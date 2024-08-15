class contaBancaria {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros = juros
    }

    deposito(qtd){
        this.saldoCC += qtd
    }

    saque(qtd){
        this.saldoCC -= qtd
    }

    transferenciaCP(qtd){
        this.saldoCC -= qtd
        this.saldoCP += qtd
    }

    transferenciaCC(qtd){
        this.saldoCP -= qtd
        this.saldoCC += qtd
    }

    jurosAniversario(){
        let juros = (this.saldoCP * this.juros) / 100
        this.saldoCP += juros
    }

}

class ContaEspecial extends contaBancaria {
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }
    

}


let conta = new contaBancaria(1000, 5000, 1)
console.log(conta)

conta.saque(500)
console.log(conta)

conta.deposito(5000)
console.log(conta)

conta.transferenciaCP(3000)
console.log(conta)

conta.jurosAniversario()
console.log(conta)

let conta2 = new ContaEspecial(10000, 50000, 1)
console.log(conta2)

conta2.saque(5000)
console.log(conta2)

conta2.jurosAniversario()
console.log(conta2)
