import { ItemAcervo } from './ItemAcervo';

export abstract class Midia extends ItemAcervo {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        public duracao: number,
        public status: string
    ) {
        super(id, titulo, ano, localizacao, status);
    }
}