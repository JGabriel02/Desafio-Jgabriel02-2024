# Documentação da Classe `RecintosZoo`

A classe `RecintosZoo` é responsável pela gestão de recintos e a análise de adequação para diferentes espécies de animais em um zoológico. A seguir, descrevemos as principais funcionalidades e métodos da classe.

## Métodos

### `constructor()`

Construtor da classe que inicializa os recintos e os dados dos animais.

- **Recintos**: 
  - Cada recinto possui um número, um bioma, um tamanho total e uma lista de animais já presentes.
- **Animais**:
  - Cada animal possui informações como tamanho, biomas compatíveis e se é carnívoro ou não.

### `analisaRecintos(animal, quantidade)`

Analisa os recintos disponíveis para verificar quais podem acomodar a quantidade especificada de um determinado animal.

#### Parâmetros:
- `animal` (string): Nome da espécie do animal a ser alocado.
- `quantidade` (number): Número de animais a serem alocados.

#### Retorno:
- **Objeto**:
  - Se o animal ou a quantidade forem inválidos, retorna um objeto com um campo `erro` contendo a mensagem de erro apropriada.
  - Se houver recintos viáveis, retorna um objeto com um campo `recintosViaveis`, que é um array de strings descrevendo os recintos disponíveis e o espaço livre restante.

#### Detalhamento do Funcionamento:
1. **Validação de Animal**:
   - Verifica se o animal especificado existe na lista de animais. Se não existir, retorna um erro indicando "Animal inválido".

2. **Validação de Quantidade**:
   - Verifica se a quantidade fornecida é válida (maior que zero). Se não for, retorna um erro indicando "Quantidade inválida".

3. **Obtenção de Informações do Animal**:
   - Recupera as informações sobre o animal (tamanho, biomas compatíveis, etc.).

4. **Análise dos Recintos**:
   - Para cada recinto, verifica se o animal pode habitar o recinto usando o método `podeHabitar`.

5. **Cálculo do Espaço Ocupado**:
   - Calcula o espaço total ocupado pelos animais já presentes no recinto utilizando o método `reduce`.
   - Subtrai o espaço necessário para o novo animal e o espaço ocupado pelos animais existentes para determinar o espaço livre.

6. **Adição de Recintos Viáveis**:
   - Se o espaço livre após adicionar o novo animal for suficiente (não negativo), adiciona o recinto à lista de recintos viáveis.

7. **Resultado Final**:
   - Se nenhum recinto for viável, retorna um erro indicando "Não há recinto viável".
   - Caso contrário, retorna a lista de recintos viáveis.

### `podeHabitar(recinto, infoAnimal, quantidade)`

Verifica se o animal pode habitar um determinado recinto, levando em consideração as restrições de bioma e compatibilidade com outros animais.

#### Parâmetros:
- `recinto` (objeto): O recinto a ser analisado.
- `infoAnimal` (objeto): Informações sobre o animal a ser alocado.
- `quantidade` (number): Número de animais a serem alocados.

#### Retorno:
- **Booleano**:
  - Retorna `true` se o animal pode habitar o recinto, caso contrário, retorna `false`.

#### Detalhamento do Funcionamento:
1. **Verificação de Bioma**:
   - Checa se o bioma do recinto é compatível com os biomas permitidos para o animal.

2. **Verificação de Carnivorismo**:
   - Se o animal for carnívoro e já houver outros animais no recinto, verifica se esses animais são da mesma espécie.

3. **Verificação de Hipopótamos**:
   - Se o animal for um hipopótamo, verifica se o recinto possui o bioma 'rio'.

### Exemplos

#### Exemplo de Uso

```javascript
const zoo = new RecintosZoo();

// Encontrar recintos viáveis para 2 macacos
const resultado = zoo.analisaRecintos('MACACO', 2);

console.log(resultado.recintosViaveis);
// Saída esperada: [
//   "Recinto 1 (espaço livre: 5 total: 10)",
//   "Recinto 2 (espaço livre: 3 total: 5)",
//   "Recinto 3 (espaço livre: 2 total: 7)"
// ]
