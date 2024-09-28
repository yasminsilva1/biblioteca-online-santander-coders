import { ItemAcervo } from './ItemAcervo';

export class DVD extends ItemAcervo {
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

    getInfo(): string {
        return `ID: ${this.id}, DVD: ${this.titulo}, Duração: ${this.duracao} minutos, Status: ${this.status}`;
    }
}