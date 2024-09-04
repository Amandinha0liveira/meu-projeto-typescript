//exercicio 1 - interface e tipos avançados
//função
function produtocomPagamento(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: ").concat(produto.preco, ", Metodo de pagamento: ").concat(pagamento);
}
//exemplo de uso
var ExemploP = { nome: 'Trono de vidro: Volume 1', preco: 45, categoria: 'Livros' };
var ExemploPagamento = 'pix';
//mostrando exemplo
console.log(produtocomPagamento(ExemploP, ExemploPagamento));