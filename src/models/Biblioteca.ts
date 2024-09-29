import ItemAcervo, { Disponibilidade } from './ItemAcervo';

class Biblioteca {
    private acervo: ItemAcervo[] = [];

    adicionarItem(item: ItemAcervo) {
        this.acervo.push(item);
    }

    removerItem(id: number) {
        const index = this.acervo.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error("Item não encontrado");
        }
        this.acervo.splice(index, 1);
    }

    listarItens() {
        return this.acervo;
    }

    verificarDisponibilidade(id: number): Disponibilidade {
        const item = this.acervo.find(item => item.id === id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        return item.disponibilidade;
    }
}

export default Biblioteca;