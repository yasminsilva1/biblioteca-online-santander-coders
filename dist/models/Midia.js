"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Midia extends ItemAcervo_1.ItemAcervo {
    constructor(id, titulo, ano, localizacao, duracao, status) {
        super(id, titulo, ano, localizacao, status);
        this.duracao = duracao;
        this.status = status;
    }
}
exports.Midia = Midia;
