import { ItemAcervo } from './ItemAcervo';

export abstract class Midia extends ItemAcervo {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        public duracao: number,
        status: string
    ) {
        if (duracao <= 0) {
            throw new Error("A duração deve ser um valor positivo.");
        }

        super(id, titulo, ano, localizacao, status);
    }
}