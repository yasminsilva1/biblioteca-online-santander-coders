"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Midia_1 = __importDefault(require("./Midia"));
class CD extends Midia_1.default {
    constructor(titulo, ano, localizacao, duracao) {
        super(titulo, ano, localizacao, duracao);
    }
}
exports.default = CD;
