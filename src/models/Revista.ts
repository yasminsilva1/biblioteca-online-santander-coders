import ItemAcervo from './ItemAcervo';

class Revista extends ItemAcervo {
    editora: string;

    constructor(titulo: string, editora: string, ano: number, localizacao: string) {
        super(titulo, ano, localizacao);
        if (!editora) {
            throw new Error("Editora e obrigatória");
        }
        this.editora = editora;
    }
}

export default Revista;