import { Publicacao } from './Publicacao';

export class Livro extends Publicacao {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        localizacao: string,
        editora: string,
        public isbn: string,
        status: string
    ) {
        if (!isbn) {
            throw new Error("O ISBN não pode ser vazio.");
        }

        super(id, titulo, ano, localizacao, editora, status);
    }

    getInfo(): string {
        return `Livro: ${this.titulo}, ISBN: ${this.isbn}, Status: ${this.status}`;
    }
}