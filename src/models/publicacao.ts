// import { ItemAcervo } from "./itemAcervo";

export class Publicacao /* extends ItemAcervo */ {
	protected id: number;
	protected titulo: string;
	protected ano: number;
	protected disponivel: boolean;
	protected localizacao: string;
	protected editora: string;

	constructor(
		id: number,
		titulo: string,
		ano: number,
		localizacao: string,
		disponivel: boolean,
		editora: string
	) {
		// super() => propriedades do ItemAcervo
		this.id = id;
		this.titulo = titulo;
		this.ano = ano;
		this.disponivel = disponivel;
		this.localizacao = localizacao;
		this.editora = editora;
	}
}
