function verificarPrimo(numero) {
  if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false; 
  }
  return true; // Se passou por todos os testes sem encontrar divisores, é primo
}

function verificarNumero() {
  const numero = parseInt(prompt("Digite um número:"));
  const resultado = verificarPrimo(numero);
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.textContent = resultado; 
}


verificarNumero();
