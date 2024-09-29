// Função que verifica se um número é primo.
function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Função que solicita um número ao usuário, verifica se é primo e exibe o resultado.
function verificarEExibirPrimo() {
  const numero = parseInt(prompt("Digite um número:"));
  const resultado = isPrimo(numero);
  document.getElementById("resultado").textContent = resultado;
}

verificarEExibirPrimo();
