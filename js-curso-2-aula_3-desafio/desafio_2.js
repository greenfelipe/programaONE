// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function valorFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let num = 5;
let resultado = valorFatorial(num);
console.log(`O fatorial de ${num} é ${resultado}`);
