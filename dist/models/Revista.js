"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Publicacao_1 = require("./Publicacao");
class Revista extends Publicacao_1.Publicacao {
    constructor(id, titulo, ano, localizacao, editora) {
        super(id, titulo, ano, localizacao, editora);
    }
    getInfo() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}`;
    }
}
exports.Revista = Revista;
