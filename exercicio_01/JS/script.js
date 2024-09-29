function filtrar() {
  // Solicita a entrada do usuário e verifica se foi fornecido algum valor
  const inputNumeros = prompt("Digite os números separados por vírgula:");
  if (!inputNumeros) {
    alert("Por favor, digite alguns números.");
    return;
  }

  // Converte a entrada em um array de números
  const numeros = inputNumeros.split(',').map(Number);

  // Filtra os números pares
  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  // Exibe o resultado no elemento com o ID "resultado"
  document.getElementById('resultado').textContent = `Os números pares são: ${numerosPares.join(', ')}`;
}
