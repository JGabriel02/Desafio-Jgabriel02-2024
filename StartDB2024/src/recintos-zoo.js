class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: ['savana'], tamanhoTotal: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: ['floresta'], tamanhoTotal: 5, animais: [] },
            { numero: 3, bioma: ['savana', 'rio'], tamanhoTotal: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: ['rio'], tamanhoTotal: 8, animais: [] },
            { numero: 5, bioma: ['savana'], tamanhoTotal: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
        ];

        this.animais = {
            LEAO: { tamanho: 3, biomas: ['savana'], carnivoro: true },
            LEOPARDO: { tamanho: 2, biomas: ['savana'], carnivoro: true },
            CROCODILO: { tamanho: 3, biomas: ['rio'], carnivoro: true },
            MACACO: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, biomas: ['savana'], carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animais[animal]) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const infoAnimal = this.animais[animal];
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            if (this.podeHabitar(recinto, infoAnimal, quantidade)) {
                const espacoOcupado = recinto.animais.reduce((acc, animal) => {
                    return acc + (animal.quantidade * this.animais[animal.especie].tamanho);
                }, 0);

                
                const espacoNecessario = infoAnimal.tamanho * quantidade;
                const espacoLivre = recinto.tamanhoTotal - espacoOcupado - espacoNecessario;

                
                if (espacoLivre >= 0) {
                    recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`);
                }
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis };
    }

    podeHabitar(recinto, infoAnimal, quantidade) {
       
        if (!infoAnimal.biomas.some(bioma => recinto.bioma.includes(bioma))) {
            return false;
        }

        
        if (infoAnimal.carnivoro && recinto.animais.length > 0 && recinto.animais[0].especie !== infoAnimal.especie) {
            return false;
        }

        
        if (infoAnimal.especie === 'HIPOPOTAMO' && !recinto.bioma.includes('rio')) {
            return false;
        }

        return true;
    }
}

export { RecintosZoo as RecintosZoo };
