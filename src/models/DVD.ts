import Midia from './Midia';

class DVD extends Midia {
    constructor(titulo: string, ano: number, localizacao: string, duracao: number) {
        super(titulo, ano, localizacao, duracao);
    }
}

export default DVD;