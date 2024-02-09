let pontuacao = prompt('Quantos pontos você fez?');

if (pontuacao == 100 && pontuacao > 100){
    alert('Parabéns, você venceu!');
    console.log('Este corresponde ao if', pontuacao);
} else {
    alert('Tente novamente para ganhar!');
    console.log(pontuacao);
}