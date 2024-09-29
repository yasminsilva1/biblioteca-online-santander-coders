import Localizavel from '../interface/Localizavel';

let currentId = 0;

type Disponibilidade = 'Disponivel' | 'Indisponivel' | 'Alugado' | 'Reservado';

abstract class ItemAcervo implements Localizavel {
    id: number;
    titulo: string;
    ano: number;
    localizacao: string;
    disponibilidade: Disponibilidade;

    constructor(titulo: string, ano: number, localizacao: string, disponibilidade: Disponibilidade = 'Disponivel') {
        if (!titulo || !ano || !localizacao) {
            throw new Error("Todos os campos são obrigatórios");
        }
        this.id = ++currentId;
        this.titulo = titulo;
        this.ano = ano;
        this.localizacao = localizacao;
        this.disponibilidade = disponibilidade;
    }
}

export default ItemAcervo;
export type { Disponibilidade };