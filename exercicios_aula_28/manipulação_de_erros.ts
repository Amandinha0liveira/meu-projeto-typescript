//exercicios - Manipulação de Erros

//classe
class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';  
    }
}

//função
function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}

//vendo
try {
    verificarEmail('usuario.com'); 
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  
    }
}