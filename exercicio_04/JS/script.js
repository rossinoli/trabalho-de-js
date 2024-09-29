// Função para exibir uma contagem regressiva de 10 segundos até "Feliz Páscoa!".
function contagemRegressiva() {
  const contador = document.getElementById('contador');
  let numero = 10;

  // Atualiza o contador a cada segundo.
  const intervalo = setInterval(() => {
    contador.textContent = numero;
    numero--;

    if (numero < 1) {
      clearInterval(intervalo);
      contador.textContent = "Feliz Páscoa!";
    }
  }, 1000); 
}
// Inicia a contagem regressiva.
contagemRegressiva();
