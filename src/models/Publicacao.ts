import { ItemAcervo } from './ItemAcervo';

export abstract class Publicacao extends ItemAcervo {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        public editora: string
    ) {
        super(id, titulo, ano, localizacao);
    }
}