/* Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
Para isso, considere a cotação do dólar igual a R$4,80.*/

function conversorMoedaBR(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

console.log(conversorMoedaBR(1));
