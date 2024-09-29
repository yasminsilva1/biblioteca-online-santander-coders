"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemAcervo_1 = __importDefault(require("./ItemAcervo"));
class Livro extends ItemAcervo_1.default {
    constructor(titulo, isbn, autor, editora, ano, localizacao) {
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
exports.default = Livro;
