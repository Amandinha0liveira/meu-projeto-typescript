"use strict";
//exercicio 2 - modulos e namespace - modulo financeiro
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
//namespace
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        //calculo do imposto
        return valor * taxa;
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor - (valor * taxa);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        Orcamento.prototype.exibir = function () {
            return "Itens selecionados: ".concat(this.itens.join(','), " e o valor total de ").concat(this.valorTotal);
        };
        return Orcamento;
    }());
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
