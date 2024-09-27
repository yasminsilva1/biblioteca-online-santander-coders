"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Publicacao_1 = require("./Publicacao");
class Revista extends Publicacao_1.Publicacao {
    constructor(id, titulo, ano, localizacao, editora, status) {
        super(id, titulo, ano, localizacao, editora, status);
    }
    getInfo() {
        return `Revista: ${this.titulo}, Editora: ${this.editora}, Status: ${this.status}`;
    }
}
exports.Revista = Revista;
