import ItemAcervo from './ItemAcervo';

abstract class Midia extends ItemAcervo {
    duracao: number;

    constructor(titulo: string, ano: number, localizacao: string, duracao: number) {
        super(titulo, ano, localizacao);
        if (!duracao) {
            throw new Error("Duração é obrigatória");
        }
        this.duracao = duracao;
    }
}

export default Midia;