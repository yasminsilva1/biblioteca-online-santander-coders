import { ItemAcervo } from '../models/ItemAcervo';

export class Biblioteca {
    private acervo: ItemAcervo[] = [];

    adicionarItem(item: ItemAcervo): void {
        this.acervo.push(item);
    }

    listarItens(): ItemAcervo[] {
        return this.acervo;
    }

    atualizarItem(id: number, novoItem: ItemAcervo): void {
        const index = this.acervo.findIndex(item => item.id === id);
        if (index !== -1) {
            this.acervo[index] = novoItem;
        }
    }

    removerItem(id: number): void {
        this.acervo = this.acervo.filter(item => item.id !== id);
    }

    verificarDisponibilidade(id: number): boolean {
        return this.acervo.some(item => item.id === id);
    }
}