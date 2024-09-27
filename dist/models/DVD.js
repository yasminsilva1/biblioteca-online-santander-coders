"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const Midia_1 = require("./Midia");
class DVD extends Midia_1.Midia {
    constructor(id, titulo, ano, localizacao, duracao, status) {
        super(id, titulo, ano, localizacao, duracao, status);
    }
    getInfo() {
        return `DVD: ${this.titulo}, Duração: ${this.duracao} minutos, Status: ${this.status}`;
    }
}
exports.DVD = DVD;
