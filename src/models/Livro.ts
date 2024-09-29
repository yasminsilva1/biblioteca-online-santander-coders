import ItemAcervo from './ItemAcervo';

class Livro extends ItemAcervo {
    isbn: number;
    autor: string;
    editora: string;

    constructor(titulo: string, isbn: number, autor: string, editora: string, ano: number, localizacao: string) {
        super(titulo, ano, localizacao);
        const isbnStr = isbn.toString();
        if (!isbn || isbnStr.length !== 13) {
            throw new Error("ISBN é obrigatório e deve ter 13 caracteres");
        }
        this.isbn = isbn;
        this.autor = autor;
        this.editora = editora;
    }
}

export default Livro;