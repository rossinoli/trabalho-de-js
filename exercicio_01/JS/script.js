    // Solicita a entrada do usuário
    const inputNumeros = prompt ("Digite os números separados por vírgula:");
function filtrar() {

    // Verifica se o usuário inseriu algum valor
    if (!inputNumeros) {
        alert("Por favor, digite alguns números.");
        return;
    }

    // Separa os números em um array
    const numeros = inputNumeros.split(',').map(Number);

    // Filtra os números pares
    const numerosPares = numeros.filter(numero => numero % 2 === 0);

    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Os números pares são: ${numerosPares.join(', ')}`;
}