


const meuArray = [1, 2, 3, 4, 5];

        //EXERCICIO 1
function inverterArray() {
    const arrayInvertido = meuArray.slice().reverse();
    document.getElementById("invertedArray").textContent = arrayInvertido;
}
document.getElementById("originalArray").textContent = meuArray;



        //EXERCICIO 2
const maior = Math.max(...meuArray);
document.getElementById("maiorNumero").textContent = maior;



        //EXERCICIO 4
function somarNumeros(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
const resultadoSoma = somarNumeros(meuArray);
document.getElementById('resultado4').textContent = `A soma dos números é: ${resultadoSoma}`;



        //EXERCICIO 5
const elementoProcurado = 2;

function contarOcorrencias(array, elemento) {
  return array.reduce((acumulador, valorAtual) => {
    return valorAtual === elemento ? acumulador + 1 : acumulador;
  }, 0);
}

const totalOcorrencias = contarOcorrencias(meuArray, elementoProcurado);
document.getElementById('resultado5').textContent = totalOcorrencias;


