//exercicio - Async/Await e Promises

async function buscarDadosDaAPI(): Promise<string> {
    // Simulamos uma chamada a uma API com um atraso usando setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;
            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject('Falha ao buscar dados da API');
            }
        }, 2000);  
    });
}

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI(); 
        console.log(dados);  
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca(); 