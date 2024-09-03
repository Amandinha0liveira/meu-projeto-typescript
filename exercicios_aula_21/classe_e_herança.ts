//exercico 1 - classe e heranças

//criando classe
class funcionarios {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string {
        return `Olá, meu nome é ${this.nome}, trabalho no cargo ${this.cargo} e recebo ${this.salario}`
    }
}

//criando subclasse
class gerente extends funcionarios {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

//apresentação
    apresentacao(): string {
        return `${super.descricao()} Atualmente estou no departamento de ${this.departamento}`;
    }
}

//exemplo de uso
const funcionarios1 = new gerente('Amanda','Gerente de Auditoria Interna', 20000, 'Auditoria');
console.log(funcionarios1.apresentacao());