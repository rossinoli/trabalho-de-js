
## Observação
- projeto pode ser feito em vez do reduce por for ficaria assim
   ```
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    aluno.media = (aluno.nota1 + aluno.nota2) / 2;

    if (aluno.media > melhorAluno.media) {
      melhorAluno = aluno;
    }
  }
    ```
