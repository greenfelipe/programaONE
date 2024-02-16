/* Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro. */

function calcularRetangulo(base,altura) {
    let area = base * altura;
    let perimetro = (base + altura) * 2;
    return [
        area, perimetro];
}

alert(`A área e o perímetro da sala são respectivamente ${calcularRetangulo(6, 9)}`);