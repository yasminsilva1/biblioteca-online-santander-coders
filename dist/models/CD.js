"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class CD extends ItemAcervo_1.ItemAcervo {
    constructor(id, titulo, ano, localizacao, duracao, status) {
        if (duracao <= 0) {
            throw new Error("A duração deve ser um valor positivo.");
        }
        super(id, titulo, ano, localizacao, status);
        this.duracao = duracao;
    }
    getInfo() {
        return `ID: ${this.id}, CD: ${this.titulo}, Duração: ${this.duracao} minutos, Status: ${this.status}`;
    }
}
exports.CD = CD;
