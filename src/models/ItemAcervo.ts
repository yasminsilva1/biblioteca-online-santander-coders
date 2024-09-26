import { Localizavel } from '../interfaces/Localizavel';

export abstract class ItemAcervo implements Localizavel {
    constructor(
        public id: number,
        public titulo: string,
        public ano: number,
        public localizacao: string
    ) {}

    abstract getInfo(): string;
}