"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publicacao = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Publicacao extends ItemAcervo_1.ItemAcervo {
    constructor(id, titulo, ano, localizacao, editora, status) {
        super(id, titulo, ano, localizacao, status);
        this.editora = editora;
        this.status = status;
    }
}
exports.Publicacao = Publicacao;
