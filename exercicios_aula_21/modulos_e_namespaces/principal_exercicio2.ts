//exercicio 2 - modulos e namespaces - modulo principal 2

//importando
import { Financeiro } from "./financeiro";

//mostrando
const orcamento1 = new Financeiro.Orcamento(150, ['Livro: Cutelo e Corvo','Livro: Dangerous Volume 2', 'Livro: Vespera']);
console.log(orcamento1.exibir());

const valorImposto = Financeiro.calcularImposto(150, 0.15)
console.log(`Valor com imposto: ${valorImposto}`);

const valorDesconto = Financeiro.calcularDesconto(150, 0.10)
console.log(`Valor com o desconto: ${valorDesconto}`);