"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAcervo = void 0;
class ItemAcervo {
    constructor(id, titulo, ano, localizacao, status) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.localizacao = localizacao;
        this.status = status;
        if (!titulo) {
            throw new Error("O título não pode ser vazio.");
        }
        if (ano <= 0) {
            throw new Error("O ano deve ser um valor positivo.");
        }
        if (!localizacao) {
            throw new Error("A localização não pode ser vazia.");
        }
        if (!status) {
            throw new Error("O status não pode ser vazio.");
        }
    }
}
exports.ItemAcervo = ItemAcervo;
