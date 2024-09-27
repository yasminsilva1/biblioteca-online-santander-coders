import { Publicacao } from './Publicacao';

export class Livro extends Publicacao {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        public editora: string,
        public isbn: string,
        public status: string
    ) {
        super(id, titulo, ano, localizacao, editora, status);
    }

    getInfo(): string {
        return `Livro: ${this.titulo}, ISBN: ${this.isbn}, Status: ${this.status}`;
    }
}