"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const Midia_1 = require("./Midia");
class CD extends Midia_1.Midia {
    constructor(id, titulo, ano, localizacao, duracao) {
        super(id, titulo, ano, localizacao, duracao);
    }
    getInfo() {
        return `CD: ${this.titulo}, Duração: ${this.duracao} minutos`;
    }
}
exports.CD = CD;
