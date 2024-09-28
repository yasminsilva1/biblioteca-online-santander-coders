export abstract class ItemAcervo {
	constructor(
		public id: number,
		public titulo: string,
		public ano: number,
		public localizacao: string,
		public status: string
	) {
		if (!titulo) {
			throw new Error("O título não pode ser vazio.");
		}
		if (ano <= 0) {
			throw new Error("O ano deve ser um valor positivo.");
		}
		if (!localizacao) {
			throw new Error("A localização não pode ser vazia.");
		}
		if (!status) {
			throw new Error("O status não pode ser vazio.");
		}
	}

	// get getTitulo(): string {
	// 	return this.titulo;
	// }

	// set setTitulo(titulo: string) {
	// 	try {
	// 		if (!titulo) {
	// 			throw new Error("O título não pode ser vazio.");
	// 		}
	// 	} catch (error) {
    //         console.error(error)
    //     }
	// }

	// get getAno(): number {
	// 	return this.ano;
	// }

	// get getLocalizacao(): string {
	// 	return this.localizacao;
	// }

	// get getStatus(): string {
	// 	return this.status;
	// }

	abstract getInfo(): string;
}
