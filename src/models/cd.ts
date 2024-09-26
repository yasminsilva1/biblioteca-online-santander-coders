import { Midia } from "./midia";

export class CD extends Midia {
	protected artista: string = "";
	protected numeroFaixas: number = 0;

	constructor(
		public id: number,
		public titulo: string,
		public duracao: number,
		public localizacao: string,
		public disponivel: boolean,
		public artistaCD: string,
		public numeroDeFaixas: number
	) {
		super(id, titulo, duracao, localizacao, disponivel);
		this.artista = artistaCD;
		this.numeroFaixas = numeroDeFaixas;
	}

	getDetalhes(): string {
		return `CD: ${this.titulo} (Artista: ${this.artista}), Duração: ${this.duracao} minutos`;
	}
}
