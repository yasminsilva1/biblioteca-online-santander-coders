"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Publicacao_1 = __importDefault(require("./Publicacao"));
class Livro extends Publicacao_1.default {
    constructor(titulo, ano, localizacao, isbn, autor, editora) {
        super(titulo, ano, localizacao, editora);
        const isbnStr = isbn.toString();
        if (!isbn || isbnStr.length !== 13) {
            throw new Error("ISBN é obrigatório e deve ter 13 caracteres");
        }
        this.isbn = isbn;
        this.autor = autor;
    }
}
exports.default = Livro;
