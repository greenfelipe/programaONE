/* Crie uma função que mostre na tela a área e o perímetro de uma sala circular,
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. */

function calcularAreaPerimetroSalaCircular(raio) {
    let pi = parseFloat(3,14);
    let area = (raio * raio) * pi;
    let perimetro = (2 * pi) * raio;

    console.log(`A área da sala é ${area.toFixed(2)} metros quadrados.`);
    console.log(`O perímetro  da sala: ${perimetro.toFixed(2)} metros.`)
}

let raio = 8;
calcularAreaPerimetroSalaCircular(8);

