# 📚 Resumo Desafio do Calculadora de partidas Rankeadas:

Este desafio propõe a criação de uma função, na linguagem de programação que desejar, onde calcula o saldo de vitórias e o nível de um jogador em um jogo ranqueado. A função recebe como parâmetros a quantidade de vitórias e derrotas do jogador e retorna o saldo de vitórias e o nível.

## 📣Funcionalidades, Entrada e Saída:

### Funcionalidades:

- **Variáveis:** Armazenam dados como número de vitórias, derrotas, saldo de vitórias e nível.
- **Operadores:** Realizam cálculos como subtração e comparação.
- **Laços de repetição:** Não são utilizados neste caso.
- **Estruturas de decisões:** Usadas para determinar o nível do jogador com base no saldo de vitórias.
- **Funções:** Definem a função que calcula o saldo de vitórias e o nível do jogador.

### Entrada:

- **Vitórias:** Número de vitórias do jogador.
- **Derrotas:** Número de derrotas do jogador.

### Saída:

- **saldoVitorias:** Saldo de vitórias (vitórias - derrotas).
- **nivel:** Nível do jogador, de acordo com a seguinte tabela:

| Vitórias | Nível |
|----------|-------|
|<= 10|Ferro|
|>= 11 e <= 20|Bronze|
|>= 21 e <= 50|Prata|
|>= 51 e <= 80|Ouro|
|>= 81 e <= 90|Diamante|
|>= 91 e <= 100|Lendário|
|>= 101|Imortal|

## 💬Mensagem:

- "O Herói tem de saldo {saldoVitorias} está no nível de {nivel}"

**Exemplo:**
- Se o jogador tiver 30 vitórias e 15 derrotas, o saldo de vitórias será 15 e o nível será Prata. A mensagem exibida será:

- "O Herói tem de saldo de 15 está no nível de Prata"

## 🥷Desafio:

- Curso Lógica programação [DIO](https://www.dio.me/)
