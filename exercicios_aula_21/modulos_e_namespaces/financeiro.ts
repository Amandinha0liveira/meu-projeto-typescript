//exercicio 2 - modulos e namespace - modulo financeiro

//namespace
export namespace Financeiro{
    export function calcularImposto(valor: number, taxa: number): number{
        //calculo do imposto
        return valor * taxa;
    }

    export function calcularDesconto(valor:number, taxa: number): number{
        return valor - (valor * taxa);
    }

    export class Orcamento{
        constructor(public valorTotal: number, public itens:string[]){}

        exibir(): string{
            return `Itens selecionados: ${this.itens.join(',')} e o valor total de ${this.valorTotal}`;
        }
    }
}