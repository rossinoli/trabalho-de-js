// Array original (substitua pelos seus valores)
const meuArray = [1, 2, 3, 4, 5];

// Função para inverter o array
function inverterArray() {
    // Cria uma cópia do array original usando o método slice()
    const arrayInvertido = meuArray.slice().reverse();

    // Atualiza o HTML com o resultado
    document.getElementById("invertedArray").textContent = arrayInvertido;
}

// Exibe o array original na página
document.getElementById("originalArray").textContent = meuArray;

// Encontrar o maior número e exibir
const maior = Math.max(...meuArray);
document.getElementById("maiorNumero").textContent = maior;


// Função para somar os números
function somarNumeros(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

// Chama a função e exibe o resultado
const resultadoSoma = somarNumeros(meuArray);
document.getElementById('resultado').textContent = `A soma dos números é: ${resultadoSoma}`;