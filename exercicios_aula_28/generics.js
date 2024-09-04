//exercicio - generics
//função
function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    var maior = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
//mosterando
var maiorNumero = encontrarMaiorElemento([180, 181, 150]); // 30
var maiorPalavra = encontrarMaiorElemento(['Bienal', 'Setembro', 'Autografos']); // 'elefante'
console.log(maiorNumero);
console.log(maiorPalavra);
