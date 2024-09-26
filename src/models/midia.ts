// import { ItemAcervo } from "./itemAcervo";

export class Midia /*extends ItemAcervo*/ {
  protected id: number;
  protected titulo: string;
	protected duracao: number;
  protected disponivel: boolean;
  protected localizacao: string;

	constructor(
    id: number,
    titulo: string,
		duracao: number,
    localizacao: string,
    disponivel: boolean
	) {
    // super() => propriedades do ItemAcervo
    this.id = id;
    this.titulo = titulo;
		this.duracao = duracao;
    this.disponivel = disponivel;
    this.localizacao = localizacao;
	}
}
