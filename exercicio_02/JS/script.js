const alunos = [
    { nome: 'Gabriel', nota1: 3, nota2: 6 },
    { nome: 'Thaina', nota1: 9, nota2: 10 },
    { nome: 'Suelen', nota1: 6, nota2: 8 }
];

// Função para calcular a média e encontrar o aluno com a maior média
function encontrarMelhorAluno(alunos) {
    // Itera sobre cada aluno e calcula a média
    alunos.forEach(aluno => {
        aluno.media = (aluno.nota1 + aluno.nota2) / 2;
    });

    // Encontra o aluno com a maior média usando reduce
    const melhorAluno = alunos.reduce((melhor, atual) => {
        return atual.media > melhor.media ? atual : melhor;
    });

    return melhorAluno.nome;
}

// Chama a função e exibe o resultado em um elemento HTML
const melhorAluno = encontrarMelhorAluno(alunos);
const resultadoElement = document.getElementById('resultado');
resultadoElement.textContent = `O aluno com a maior média é: ${melhorAluno}`;