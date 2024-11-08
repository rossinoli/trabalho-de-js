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