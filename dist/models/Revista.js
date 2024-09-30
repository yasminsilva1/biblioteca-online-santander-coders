"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const publicacao_1 = require("./publicacao");
class Revista extends publicacao_1.Publicacao {
    constructor(id, titulo, ano, localizacao, editora, status) {
        super(id, titulo, ano, localizacao, editora, status);
    }
    getInfo() {
        return `ID: ${this.id}, Revista: ${this.titulo}, Editora: ${this.editora}, Status: ${this.status}`;
    }
}
exports.Revista = Revista;
