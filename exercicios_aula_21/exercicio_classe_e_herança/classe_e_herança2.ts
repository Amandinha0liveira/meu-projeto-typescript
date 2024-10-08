//exercicio 2 - classe e heranças

//classe
class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `O titular ${this.titular} com o saldo ${this.saldo}`
    }
}

//subclasse
class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
    }

    //sobrescrevendo
    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `Saldo: ${super.exibirSaldo()} e o saldo total com credito ${saldoTotal}`
    }
}

//testando
const ContaCorrenteExemplo = new ContaCorrente('Hermione', 10000, 150);
console.log(ContaCorrenteExemplo.exibirSaldo());