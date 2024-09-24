function contagemRegressiva() {
  const contador = document.getElementById('contador');
  let numero = 10;

  const intervalo = setInterval(() => {
    contador.textContent = numero;
    numero--;

    if (numero < 1) {
      clearInterval(intervalo);
      contador.textContent = "Feliz Páscoa!";
    }
  }, 1000); // A cada 1000 milissegundos (1 segundo)
}

contagemRegressiva();