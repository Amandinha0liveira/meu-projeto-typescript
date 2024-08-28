//exercicio 1 - interface e tipos avançados

//criando e defindo a interface
interface Produto {
    nome: string;
    preco: number;
    categoria: string
}

//criando a união
type Formapagemento = 'dinheiro' | 'cartão' | 'pix';

//função
function produtocomPagamento(produto: Produto, pagamento: Formapagemento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: ${produto.preco}, Metodo de pagamento: ${pagamento}`
}

//exemplo de uso
const ExemploP: Produto = { nome: 'Trono de vidro: Volume 1', preco: 45, categoria: 'Livros' };
const ExemploPagamento: Formapagemento = 'pix'

//mostrando exemplo
console.log(produtocomPagamento(ExemploP, ExemploPagamento));