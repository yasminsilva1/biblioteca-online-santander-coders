"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemAcervo_1 = __importDefault(require("./ItemAcervo"));
class Publicacao extends ItemAcervo_1.default {
    constructor(titulo, ano, localizacao, editora) {
        super(titulo, ano, localizacao);
        this.editora = editora;
    }
}
exports.default = Publicacao;
