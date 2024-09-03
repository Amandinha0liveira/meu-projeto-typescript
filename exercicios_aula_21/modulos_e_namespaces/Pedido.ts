// exercicio 1 - modulos e namespaces - modulo pedido

//import
import { Cliente } from './Cliente';

//classe
export class Pedido{
    constructor(public cliente:Cliente, public produto: string, public valor:number){}

    exibir(): string{
        return`Cliente: ${this.cliente.nome} comprou o porduto ${this.produto} pelo valor de ${this.valor}`;
    }
}