import { Publicacao } from "./publicacao";

export class Revista extends Publicacao {
	protected edicao: number;

	constructor(
		id: number,
		titulo: string,
		ano: number,
		localizacao: string,
		disponivel: boolean,
		editora: string,
		edicao: number
	) {
		super(id, titulo, ano, localizacao, disponivel, editora);
		this.edicao = edicao;
	}

	getDetalhes(): void {
		console.log(
			`Revista "${this.titulo}" (Edição: ${this.edicao}º), publicado em ${this.ano} pela editora: ${this.editora}.`
		);
	}
}
