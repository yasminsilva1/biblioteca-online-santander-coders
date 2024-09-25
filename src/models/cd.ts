class CD // vai extender de Mida//
{
      protected artista: string = "";

    constructor(
        public id: number, 
        public titulo: string, 
        public localizacao: string,
        public duracao: number,
        public artistaCD: string){
            //super(id, titulo, localizacao, duracao); extensao da classe Midia

        this.artista = artistaCD;
    }

    getDetalhe(): string{
        return `CD: ${this.titulo} (Artista: ${this.artista}), Duração: ${this.duracao} minutos`;
    }
}
