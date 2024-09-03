//exercicio 1 - modulos e namespaces - modulo principal

//importando 
import { Pedido } from './Pedido';
import { Cliente } from "./Cliente";

//mostrando
const cliente1 = new Cliente('Amanda', 'amandalinda@gmail.com');
const pedido1 = new Pedido(cliente1, 'Ingresso Bienal', 20);

console.log(pedido1.exibir());