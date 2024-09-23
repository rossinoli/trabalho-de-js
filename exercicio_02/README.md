
# Exercicío 02

* **Descrição:**
- Este projeto JavaScript tem como objetivo calcular a média de notas de um conjunto de alunos e identificar qual aluno possui a maior média. Ele utiliza estruturas de dados como arrays e objetos para representar os alunos e suas respectivas notas.

* **Funcionalidades:**
- Armazenamento de dados: Os dados dos alunos (nome, nota 1 e nota 2) são armazenados em um array de objetos.
- Cálculo da média: A função encontrarMelhorAluno calcula a média das notas de cada aluno e adiciona essa informação ao objeto do aluno.
- Identificação do melhor aluno: A mesma função utiliza o método reduce para encontrar o aluno com a maior média.
- Exibição do resultado: O nome do aluno com a maior média é exibido em um elemento HTML com o ID "resultado".

* **Como usar:**
 1. Dados: Os dados dos alunos são definidos em um array de objetos no início do código JavaScript.
 2. Cálculo da média: A função encontrarMelhorAluno itera sobre cada aluno, calcula a média e armazena o resultado no objeto do aluno.
 3. Identificação do melhor aluno: A função utiliza o método reduce para comparar as médias dos alunos e encontrar o aluno com a maior média.
 4. Exibição: O resultado é exibido na página HTML, no elemento com o ID "resultado".

* **Estrutura dos arquivos:**
- index.html: Contém a estrutura HTML da página, incluindo o elemento onde o resultado será exibido.
- script.js: Contém o código JavaScript com a lógica para calcular as médias e encontrar o melhor aluno.

* **Tecnologias utilizadas:**
- HTML: Estrutura da página.
- JavaScript: Lógica de programação e manipulação do DOM.

* **Conceitos utilizados:**
- **Arrays:** Estrutura de dados para armazenar uma coleção de elementos.
- **Objetos:** Estrutura de dados para armazenar pares chave-valor.
- **Métodos de array:** forEach, reduce (para iterar e reduzir arrays).
- **DOM:** Document Object Model, utilizado para manipular elementos HTML.

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

## Contribuição

Se você deseja contribuir com o projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## Autor

Rossinoli thaina

## Licença

Este projeto é licenciado sob a licença MIT.