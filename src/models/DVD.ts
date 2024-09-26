import { Midia } from './Midia';

export class DVD extends Midia {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        duracao: number
    ) {
        super(id, titulo, ano, localizacao, duracao);
    }

    getInfo(): string {
        return `DVD: ${this.titulo}, Duração: ${this.duracao} minutos`;
    }
}