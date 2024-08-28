//exercicio 2 - interface e tipos avançados

//criando tipos
type Pessoa = {
    nome: string;
    idade: number
}

type Empregado = {
    empresa: string;
    salario: number,
}

//interseção
type Funcionario = Pessoa & Empregado

//funçaõ
function CLT(pessoa: Pessoa, empregado: Empregado): string {
    return `Nome funcionario: ${pessoa.nome}, Idade: ${pessoa.idade}, Nome Empresa: ${empregado.empresa}, Salario: ${empregado.salario}`
}

//exemplo de uso
const ExemploPessoa: Pessoa = { nome: 'Steve', idade: 25 };
const ExemploEmpresa: Empregado = { empresa: 'Hospital Alemão Osvaldo Cruz', salario: 2500 }

console.log(CLT(ExemploPessoa, ExemploEmpresa));