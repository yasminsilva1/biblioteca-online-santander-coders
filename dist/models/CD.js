"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const Midia_1 = require("./Midia");
class CD extends Midia_1.Midia {
    constructor(id, titulo, ano, localizacao, duracao, status) {
        super(id, titulo, ano, localizacao, duracao, status);
    }
    getInfo() {
        return `CD: ${this.titulo}, Duração: ${this.duracao} minutos, Status: ${this.status}`;
    }
}
exports.CD = CD;
