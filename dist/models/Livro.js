"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Publicacao_1 = require("./Publicacao");
class Livro extends Publicacao_1.Publicacao {
    constructor(id, titulo, ano, localizacao, editora, isbn, status) {
        super(id, titulo, ano, localizacao, editora, status);
        this.editora = editora;
        this.isbn = isbn;
        this.status = status;
    }
    getInfo() {
        return `Livro: ${this.titulo}, ISBN: ${this.isbn}, Status: ${this.status}`;
    }
}
exports.Livro = Livro;
