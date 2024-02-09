// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
// Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt("Digite um número"));

if(numero > 0){
    console.log(`${numero} é um número positivo`);
} else {
    if(numero == 0) {
        console.log(`${numero} é zero.`);
    } else {
        console.log(`${numero} é um número negativo.`);
    }
}