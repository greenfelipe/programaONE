/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

// Fazer um HTML para exibir na tela
//let altura = document.getElementById('altura');
//let peso = document.getElementById('peso');

// Função pedida no exercício
function calculaIMC(altura, peso){
    
    let imc = peso / (altura * altura);
    return imc;
}

console.log(calculaIMC(87,1.72));