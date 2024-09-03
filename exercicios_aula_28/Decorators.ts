//exercicio - Decorators 

//função
function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);  
        const resultado = metodoOriginal.apply(this, args);  
        console.timeEnd(propertyKey);  
        return resultado;
    };
    
    return descriptor;
}

//classe
class Calculadora {
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0); 
    }
}

//mostrando
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);