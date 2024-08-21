//exercicio 1 - interface e tipos avançados

//criando e defindo a interface
interface Produto {
    nome: string;
    preco: number;
    categoria: string
}

//criando a união
type Formapagemento = 'dinheiro' | 'cartão' | 'pix';

//juntando
type Juncao = Produto & Formapagemento

