export abstract class ItemAcervo {
    constructor(
        public id: number,
        public titulo: string,
        public ano: number,
        public localizacao: string,
        public status: string
    ) {
        if (!titulo) {
            throw new Error("O título não pode ser vazio.");
        }
        if (ano <= 0) {
            throw new Error("O ano deve ser um valor positivo.");
        }
        if (!localizacao) {
            throw new Error("A localização não pode ser vazia.");
        }
        if (!status) {
            throw new Error("O status não pode ser vazio.");
        }
    }

    abstract getInfo(): string;
}