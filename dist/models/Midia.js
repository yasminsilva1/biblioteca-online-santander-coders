"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Midia extends ItemAcervo_1.ItemAcervo {
    constructor(id, titulo, ano, localizacao, duracao) {
        super(id, titulo, ano, localizacao);
        this.duracao = duracao;
    }
}
exports.Midia = Midia;
