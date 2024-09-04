//exercicio 1 - modulos e namespaces - modulo principal

//importando 
import { Cliente } from "./exercicio_1/Cliente";
import { Pedido } from './exercicio_1/Pedido';

//mostrando
const cliente1 = new Cliente('Amanda', 'amandalinda@gmail.com');
const pedido1 = new Pedido(cliente1, 'Ingresso Bienal', 20);

console.log(pedido1.exibir());