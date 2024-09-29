// Calcula o Máximo Divisor Comum (MDC) de dois números usando o algoritmo de Euclides.
function calcularMDC(num1, num2) {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

// Obtém dois números do usuário e exibe o MDC.
function obterNumerosEcalcular() {
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));

  const mdc = calcularMDC(num1, num2);

  document.getElementById('resultado').textContent = `O MDC de ${num1} e ${num2} é: ${mdc}`;
}

// Inicia o processo de cálculo do MDC.
obterNumerosEcalcular();
