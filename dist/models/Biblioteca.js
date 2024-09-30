"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    adicionarItem(item) {
        this.acervo.push(item);
    }
    removerItem(id) {
        const index = this.acervo.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error("Item não encontrado");
        }
        this.acervo.splice(index, 1);
    }
    listarItens() {
        return this.acervo;
    }
    verificarDisponibilidade(id) {
        const item = this.acervo.find(item => item.id === id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        return item.disponibilidade;
    }
}
exports.default = Biblioteca;
