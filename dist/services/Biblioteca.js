"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    adicionarItem(item) {
        this.acervo.push(item);
    }
    listarItens() {
        return this.acervo;
    }
    atualizarItem(id, novoItem) {
        const index = this.acervo.findIndex(item => item.id === id);
        if (index !== -1) {
            this.acervo[index] = novoItem;
        }
    }
    removerItem(id) {
        this.acervo = this.acervo.filter(item => item.id !== id);
    }
    verificarDisponibilidade(id) {
        return this.acervo.some(item => item.id === id);
    }
}
exports.Biblioteca = Biblioteca;
