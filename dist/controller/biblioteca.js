"use strict";
// Classe Biblioteca que gerencia o acervo de itens
class Biblioteca {
    // private acervo: ItemAcervo[] = [];
    // Atualiza um item existente
    atualizarItem(id /*, novosDados: Partial<ItemAcervo>*/) {
        /*const item = this.acervo.find(item => item.id === id);
        if (item) {
            Object.assign(item, novosDados);
            console.log(`Item ID ${id} atualizado com sucesso.`);
        } else {
            console.log(`Item ID ${id} não encontrado.`);
        }*/
    }
    removerItem(id) {
        // const itemDoArray = this.acervo.find((item) => item.getId === id);
        // try {
        // 	if (!itemDoArray) {
        // 		throw new Error("Item não encontrado.");
        // 	}
        // 	if (itemDoArray.getDisponivel !== true) {
        // 		throw new Error("Item não disponível.");
        // 	}
        // 	const index = this.acervo.findIndex((item) => itemDoArray === item);
        // 	this.acervo.splice(index, 1);
        // 	console.log(`"${itemDoArray.getTitulo}" foi removido.`);
        // } catch (error: unknown) {
        // 	if (error instanceof Error) {
        // 		console.error(
        // 			"Ocorreu um erro ao tentar remover o item:",
        // 			error.message
        // 		);
        // 	} else {
        // 		console.error("Ocorreu um erro inesperado:", error);
        // 	}
        // }
    }
}
