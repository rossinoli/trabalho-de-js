const nomes = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Ana Paula', 'Carlos'];

function filtrarNomes() {
    const letraInicial = document.getElementById('letraInicial').value;
    const nomesFiltrados = nomes.filter(nome => nome[0].toUpperCase() === letraInicial.toUpperCase());

    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    nomesFiltrados.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaResultado.appendChild(itemLista);
    });
}