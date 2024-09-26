"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const Midia_1 = require("./Midia");
class DVD extends Midia_1.Midia {
    constructor(id, titulo, ano, localizacao, duracao) {
        super(id, titulo, ano, localizacao, duracao);
    }
    getInfo() {
        return `DVD: ${this.titulo}, Duração: ${this.duracao} minutos`;
    }
}
exports.DVD = DVD;
