import Midia from './Midia';

class CD extends Midia {
    constructor(titulo: string, ano: number, localizacao: string, duracao: number) {
        super(titulo, ano, localizacao, duracao);
    }
}

export default CD;