function calcularMDC(num1, num2) {
    // Algoritmo de Euclides
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }

  function obterNumerosEcalcular() {
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));

    const mdc = calcularMDC(num1, num2);

    // Exibir o resultado em um elemento HTML
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `O MDC de ${num1} e ${num2} é: ${mdc}`;
  }

  // Chamar a função para iniciar o processo
  obterNumerosEcalcular();