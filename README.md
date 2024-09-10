# Jgabriel02-Desafio-Jgabriel02-2024-

A classe RecintosZoo é responsável por gerenciar e analisar a alocação de animais em diferentes recintos de um zoológico. A seguir, é apresentada uma visão geral das funções e métodos dessa classe, com exemplos de uso e detalhes sobre a lógica implementada.

Estrutura da Classe
Construtor constructor()
Inicializa a classe com uma lista de recintos e informações sobre diferentes espécies de animais.

javascript
Copiar código
constructor() {
    this.recintos = [
        // Lista de recintos com informações sobre o número, bioma, tamanho total e animais presentes
    ];

    this.animais = {
        // Informações sobre cada espécie de animal, incluindo tamanho, biomas e se são carnívoros
    };
}
Método analisaRecintos(animal, quantidade)
Analisa quais recintos são viáveis para acomodar uma quantidade específica de um determinado animal.

Parâmetros:

animal (string): Nome da espécie do animal a ser alocado.
quantidade (number): Quantidade de animais a serem alocados.
Retorno: Um objeto que pode ter duas propriedades:

erro (string): Mensagem de erro se a análise falhar.
recintosViaveis (array): Lista de recintos viáveis para o animal especificado, com detalhes sobre o espaço livre e o tamanho total.
Exemplo:

javascript
Copiar código
const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
console.log(resultado);
Detalhes: O método verifica se o animal e a quantidade são válidos e, em seguida, avalia quais recintos atendem aos critérios, incluindo compatibilidade de bioma e espaço disponível.

Método podeHabitar(recinto, infoAnimal, quantidade)
Verifica se um animal pode habitar um recinto específico com base em suas características e a ocupação atual do recinto.

Parâmetros:

recinto (object): Objeto representando um recinto.
infoAnimal (object): Informações sobre o animal a ser alocado.
quantidade (number): Quantidade de animais a serem alocados.
Retorno:

boolean: Retorna true se o animal pode habitar o recinto, false caso contrário.
Detalhes: O método verifica a compatibilidade de bioma e regras específicas, como a restrição de carnívoros não poderem dividir recinto com outras espécies.

Exemplo de Código
Aqui está um exemplo de uso da classe RecintosZoo:

javascript
Copiar código
const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos('MACACO', 2);

if (resultado.erro) {
    console.log(`Erro: ${resultado.erro}`);
} else {
    console.log('Recintos viáveis:');
    resultado.recintosViaveis.forEach(recinto => console.log(recinto));
}
Essa documentação pode ser incluída no README do seu projeto no GitHub para ajudar outros desenvolvedores a entender e utilizar a classe RecintosZoo. Se precisar de mais alguma coisa, é só me avisar!
