import ItemAcervo from './ItemAcervo';

class Publicacao extends ItemAcervo {
    editora: string;

    constructor(titulo: string, ano: number, localizacao: string, editora: string) {
        super(titulo, ano, localizacao);
        this.editora = editora;
    }
}

export default Publicacao;