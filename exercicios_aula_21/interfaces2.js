//exercicio 2 - interface e tipos avançados
//funçaõ
function CLT(pessoa, empregado) {
    return "Nome funcionario: ".concat(pessoa.nome, ", Idade: ").concat(pessoa.idade, ", Nome Empresa: ").concat(empregado.empresa, ", Salario: ").concat(empregado.salario);
}
//exemplo de uso
var ExemploPessoa = { nome: 'Steve', idade: 25 };
var ExemploEmpresa = { empresa: 'Hospital Alemão Osvaldo Cruz', salario: 2500 };
console.log(CLT(ExemploPessoa, ExemploEmpresa));
