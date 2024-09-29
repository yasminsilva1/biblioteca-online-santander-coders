import Publicacao from './Publicacao';

class Livro extends Publicacao {
    isbn: number;
    autor: string;

    constructor(titulo: string, ano: number, localizacao: string, isbn: number, autor: string, editora: string) {
        super(titulo, ano, localizacao, editora);
        const isbnStr = isbn.toString();
        if (!isbn || isbnStr.length !== 13) {
            throw new Error("ISBN é obrigatório e deve ter 13 caracteres");
        }
        this.isbn = isbn;
        this.autor = autor;
    }
}

export default Livro;