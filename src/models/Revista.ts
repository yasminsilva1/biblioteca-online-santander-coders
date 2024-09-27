import { Publicacao } from './Publicacao';

export class Revista extends Publicacao {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        editora: string,
        status: string
    ) {
        super(id, titulo, ano, localizacao, editora, status);
    }

    getInfo(): string {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Status: ${this.status}`;
    }
}