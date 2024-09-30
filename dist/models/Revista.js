"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Publicacao_1 = __importDefault(require("./Publicacao"));
class Revista extends Publicacao_1.default {
    constructor(titulo, ano, localizacao, editora) {
        super(titulo, ano, localizacao, editora);
    }
}
exports.default = Revista;
