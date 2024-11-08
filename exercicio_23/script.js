


const meuArray = [1, 2, 3, 4, 5, 5,];

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



        //EXERCICIO 6
const uniqueArray = [...new Set(meuArray)];
document.getElementById('resultado6').textContent = uniqueArray.join(', ');



        //EXERCICIO 7
function ordenarPorComprimento(array) {
        return array.sort((a, b) => a.length - b.length);
        }

        const palavras = ['banana', 'maçã', 'abacate', 'melancia'];
        const palavrasOrdenadas = ordenarPorComprimento(palavras);

        document.getElementById('resultado7').textContent = palavrasOrdenadas.join(', ');



        //EXERCICIO 8
function multiplicarPorDois(array) {
        return array.map(numero => numero * 2);
        }
        const novoArray = multiplicarPorDois(meuArray);
        document.getElementById('resultado8').textContent = novoArray;
