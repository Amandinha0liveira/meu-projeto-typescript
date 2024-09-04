"use strict";
//exercicio 2 - modulos e namespaces - modulo principal 2
Object.defineProperty(exports, "__esModule", { value: true });
//importando
var financeiro_1 = require("./financeiro");
//mostrando
var orcamento1 = new financeiro_1.Financeiro.Orcamento(150, ['Livro: Cutelo e Corvo', 'Livro: Dangerous Volume 2', 'Livro: Vespera']);
console.log(orcamento1.exibir());
var valorImposto = financeiro_1.Financeiro.calcularImposto(150, 0.15);
console.log("Valor com imposto: ".concat(valorImposto));
var valorDesconto = financeiro_1.Financeiro.calcularDesconto(150, 0.10);
console.log("Valor com o desconto: ".concat(valorDesconto));
