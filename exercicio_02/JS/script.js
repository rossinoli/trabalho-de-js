// Array de objetos contendo informações de alunos, como nome, nota1 e nota2.
const alunos = [
  { nome: 'Gabriel', nota1: 3, nota2: 6 },
  { nome: 'Thaina', nota1: 9, nota2: 10 },
  { nome: 'Suelen', nota1: 6, nota2: 8 }
];

// Função que calcula a média de cada aluno e retorna o nome do aluno com a maior média.
function encontrarMelhorAluno(alunos) {
  // Calcula a média para cada aluno.
  alunos.forEach(aluno => {
    aluno.media = (aluno.nota1 + aluno.nota2) / 2;
  });

  // Encontra o aluno com a maior média. 
  // Usando reduce para melhor concisão e legibilidade.
  // Uma alternativa com laço 'for' seria menos eficiente e legível nesse caso.
  const melhorAluno = alunos.reduce((melhor, atual) => {
    return atual.media > melhor.media ? atual : melhor;
  });

  // Retorna o nome do aluno com a maior média.
  return melhorAluno.nome;
}

// Encontra o nome do aluno com a maior média.
const melhorAluno = encontrarMelhorAluno(alunos);

// Exibe o nome do aluno com a maior média no elemento com o ID "resultado".
document.getElementById('resultado').textContent = `O aluno com a maior média é: ${melhorAluno}`;
