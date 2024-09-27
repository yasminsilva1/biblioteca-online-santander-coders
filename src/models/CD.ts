import { Midia } from './Midia';

export class CD extends Midia {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        duracao: number,
        status: string
    ) {
        super(id, titulo, ano, localizacao, duracao, status);
    }

    getInfo(): string {
        return `CD: ${this.titulo}, Duração: ${this.duracao} minutos, Status: ${this.status}`;
    }
}