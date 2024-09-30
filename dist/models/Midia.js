"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemAcervo_1 = __importDefault(require("./ItemAcervo"));
class Midia extends ItemAcervo_1.default {
    constructor(titulo, ano, localizacao, duracao) {
        super(titulo, ano, localizacao);
        if (!duracao) {
            throw new Error("Duração é obrigatória");
        }
        this.duracao = duracao;
    }
}
exports.default = Midia;
