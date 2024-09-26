import { Publicacao } from './Publicacao';

export class Livro extends Publicacao {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        editora: string,
        public isbn: string
    ) {
        super(id, titulo, ano, localizacao, editora);
    }

    getInfo(): string {
        return `Livro: ${this.titulo}, ISBN: ${this.isbn}`;
    }
}