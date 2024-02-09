alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);
// se chute for igual numero secreto

if (chute == numeroSecreto) {
    alert('Acertou');
    console.log(`Isso ai! Você descobriu o número secreto ${numeroSecreto}` );
} else {
    console.log('Valor do número secreto:', numeroSecreto);
    alert('Voce errou :(' + ' ' + 'O numero secreto era ' + numeroSecreto);
}
