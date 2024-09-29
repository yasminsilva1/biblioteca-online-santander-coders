"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentId = 0;
class ItemAcervo {
    constructor(titulo, ano, localizacao, disponibilidade = 'Disponivel') {
        if (!titulo || !ano || !localizacao) {
            throw new Error("Todos os campos são obrigatórios");
        }
        this.id = ++currentId;
        this.titulo = titulo;
        this.ano = ano;
        this.localizacao = localizacao;
        this.disponibilidade = disponibilidade;
    }
}
exports.default = ItemAcervo;
