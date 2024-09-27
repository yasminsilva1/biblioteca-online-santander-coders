export abstract class ItemAcervo {
    constructor(
        public id: number,
        public titulo: string,
        public ano: number,
        public localizacao: string,
        public status: string
    ) {}

    abstract getInfo(): string;
}