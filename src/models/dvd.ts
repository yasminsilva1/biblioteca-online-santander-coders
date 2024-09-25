class DVD //extends Midia 
{
    protected diretor: string;

    constructor(public id: number, public titulo: string, public localizacao: string, public duracao: number, public diretorDVD: string) {
        //super(id, titulo, localizacao, duracao);
        this.diretor = diretorDVD;
    }

    getDetalhes(): string {
        return `DVD: ${this.titulo} (Diretor: ${this.diretor}), Duração: ${this.duracao} minutos`;
    }
}