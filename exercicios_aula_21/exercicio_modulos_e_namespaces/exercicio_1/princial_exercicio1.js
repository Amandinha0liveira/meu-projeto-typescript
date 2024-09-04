"use strict";
//exercicio 1 - modulos e namespaces - modulo principal
Object.defineProperty(exports, "__esModule", { value: true });
//importando 
var Pedido_1 = require("./Pedido");
var Cliente_1 = require("./Cliente");
//mostrando
var cliente1 = new Cliente_1.Cliente('Amanda', 'amandalinda@gmail.com');
var pedido1 = new Pedido_1.Pedido(cliente1, 'Ingresso Bienal', 20);
console.log(pedido1.exibir());
