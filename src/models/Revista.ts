import Publicacao from './Publicacao';

class Revista extends Publicacao {
    constructor(titulo: string, ano: number, localizacao: string, editora: string) {
        super(titulo, ano, localizacao, editora);
    }
}

export default Revista;