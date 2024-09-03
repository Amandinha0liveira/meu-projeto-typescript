//exercicio - generics

//função
function encontrarMaiorElemento <T extends number | string>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; 
        }
    }

    return maior;
}

//mosterando
const maiorNumero = encontrarMaiorElemento([180, 181, 150]);  // 30
const maiorPalavra = encontrarMaiorElemento(['Bienal', 'Setembro', 'Autografos']);  // 'elefante'

console.log(maiorNumero);
console.log(maiorPalavra);