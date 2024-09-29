"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemAcervo_1 = __importDefault(require("./ItemAcervo"));
class Revista extends ItemAcervo_1.default {
    constructor(titulo, editora, ano, localizacao) {
        super(titulo, ano, localizacao);
        if (!editora) {
            throw new Error("Editora e obrigatória");
        }
        this.editora = editora;
    }
}
exports.default = Revista;
