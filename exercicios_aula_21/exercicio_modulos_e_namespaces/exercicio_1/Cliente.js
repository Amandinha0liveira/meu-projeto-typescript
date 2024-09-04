"use strict";
//exercicio 1 - modulos e namespaces - modulo cliente
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
//classe
var Cliente = /** @class */ (function () {
    function Cliente(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
