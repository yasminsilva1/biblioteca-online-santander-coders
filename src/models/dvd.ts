import { Midia } from "./midia";

export class DVD extends Midia {
	protected diretor: string;

	constructor(
		public id: number,
		public titulo: string,
		public duracao: number,
		public localizacao: string,
		public disponivel: boolean,
		public diretorDVD: string
	) {
		super(id, titulo, duracao, localizacao, disponivel);
		this.diretor = diretorDVD;
	}

	getDetalhes(): string {
		return `DVD: ${this.titulo} (Diretor: ${this.diretor}), Duração: ${this.duracao} minutos`;
	}
}
