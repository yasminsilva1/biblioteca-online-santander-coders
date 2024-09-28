import readlineSync from "readline-sync";
import { ItemAcervo } from "./models/ItemAcervo";
import { Biblioteca } from "./services/Biblioteca";
import { Livro } from "./models/livro";
import { Revista } from "./models/revista";
import { CD } from "./models/cd";
import { DVD } from "./models/dvd";
import { registrarItem } from "./services/registrarItem";

class Menu {
	private biblioteca: Biblioteca;
	private nextId: number;

	constructor() {
		this.biblioteca = new Biblioteca();
		this.nextId = 1;
	}

	public iniciar() {
		while (true) {
			const choice = this.menuPrincipal();
			switch (choice) {
				case "1":
					this.menuAdicionar();
					break;
				case "2":
					this.menuListar();
					break;
				case "3":
					this.menuRemover();
					break;
				case "4":
					this.menuEditar();
					break;
				case "5":
					console.log("Saindo...");
					process.exit(0);
				default:
					console.log("Opcao invalida!");
			}
		}
	}

	private menuPrincipal() {
		console.log("\n--- Biblioteca Online ---");
		console.log("[1]. Adicionar Item");
		console.log("[2]. Listar Itens");
		console.log("[3]. Remover Item");
		console.log("[4]. Editar Item");
		console.log("[5]. Sair");
		return readlineSync.question("Escolha uma opcao: ");
	}

	private menuAdicionar() {
		while (true) {
			console.log("\n--- Adicionar Item ---");
			console.log("[1]. Adicionar Livro");
			console.log("[2]. Adicionar Revista");
			console.log("[3]. Adicionar CD");
			console.log("[4]. Adicionar DVD");
			console.log("[5]. Voltar");
			const choice = readlineSync.question("Escolha uma opcao: ");
			if (choice === "5") break;
			switch (choice) {
				case "1":
					this.adicionarLivro();
					break;
				case "2":
					this.adicionarRevista();
					break;
				case "3":
					this.adicionarCD();
					break;
				case "4":
					this.adicionarDVD();
					break;
				default:
					console.log("Opcao invalida!");
			}
		}
	}

	private menuListar() {
		while (true) {
			console.log("\n--- Listar Itens ---");
			console.log("[1]. Listar Livros");
			console.log("[2]. Listar Revistas");
			console.log("[3]. Listar CDs");
			console.log("[4]. Listar DVDs");
			console.log("[5]. Listar Todos os Itens");
			console.log("[6]. Voltar");
			const choice = readlineSync.question("Escolha uma opcao: ");
			if (choice === "6") break;
			switch (choice) {
				case "1":
					this.listarLivros();
					break;
				case "2":
					this.listarRevistas();
					break;
				case "3":
					this.listarCDs();
					break;
				case "4":
					this.listarDVDs();
					break;
				case "5":
					this.listarTodosItens();
					break;
				default:
					console.log("Opcao invalida!");
			}
		}
	}

	private menuRemover() {
		while (true) {
			console.log("\n--- Remover Item ---");
			console.log("[1]. Remover Livro");
			console.log("[2]. Remover Revista");
			console.log("[3]. Remover CD");
			console.log("[4]. Remover DVD");
			console.log("[5]. Remover Todos os Itens");
			console.log("[6]. Voltar");
			const choice = readlineSync.question("Escolha uma opcao: ");
			if (choice === "6") break;
			switch (choice) {
				case "1":
					this.removerLivro();
					break;
				case "2":
					this.removerRevista();
					break;
				case "3":
					this.removerCD();
					break;
				case "4":
					this.removerDVD();
					break;
				case "5":
					this.removerTodosItens();
					break;
				default:
					console.log("Opcao invalida!");
			}
		}
	}

	private menuEditar() {
		while (true) {
			console.log("\n--- Editar Item ---");
			console.log("[1]. Editar Livro");
			console.log("[2]. Editar Revista");
			console.log("[3]. Editar CD");
			console.log("[4]. Editar DVD");
			console.log("[5]. Voltar");
			const choice = readlineSync.question("Escolha uma opcao: ");
			if (choice === "5") break;
			switch (choice) {
				case "1":
					this.editarLivro();
					break;
				case "2":
					this.editarRevista();
					break;
				case "3":
					this.editarCD();
					break;
				case "4":
					this.editarDVD();
					break;
				default:
					console.log("Opcao invalida!");
			}
		}
	}

	private obterEntradaValida(pergunta: string): string {
		let entrada = "";
		while (!entrada) {
			entrada = readlineSync.question(pergunta);
			if (!entrada) {
				console.error(
					`${pergunta}não pode ser vazio. Por favor, tente novamente.`
				);
			}
		}
		return entrada;
	}

	private adicionarLivro() {
		const id = this.nextId++;
		const titulo = this.obterEntradaValida("\nTitulo: ");
		const ano = parseInt(this.obterEntradaValida("Ano: "));
		const localizacao = this.obterEntradaValida("Localizacao: ");
		const editora = this.obterEntradaValida("Editora: ");
		const isbn = this.obterEntradaValida("ISBN: ");
		const status = "disponível";
		const livro = new Livro(
			id,
			titulo,
			ano,
			localizacao,
			editora,
			isbn,
			status
		);
		registrarItem(this.biblioteca, livro);
		console.log(`\nLivro "${livro.titulo}" adicionado com sucesso!`);
	}

	private adicionarRevista() {
		const id = this.nextId++;
		const titulo = this.obterEntradaValida("\nTitulo: ");
		const ano = parseInt(this.obterEntradaValida("Ano: "));
		const localizacao = this.obterEntradaValida("Localizacao: ");
		const editora = this.obterEntradaValida("Editora: ");
		const status = "disponível";
		const revista = new Revista(id, titulo, ano, localizacao, editora, status);
		registrarItem(this.biblioteca, revista);
		console.log(`\nRevista "${revista.titulo}" adicionada com sucesso!`);
	}

	private adicionarCD() {
		const id = this.nextId++;
		const titulo = this.obterEntradaValida("\nTitulo: ");
		const ano = parseInt(this.obterEntradaValida("Ano: "));
		const localizacao = this.obterEntradaValida("Localizacao: ");
		const duracao = parseInt(this.obterEntradaValida("Duracao (minutos): "));
		const status = "disponível";
		const cd = new CD(id, titulo, ano, localizacao, duracao, status);
		registrarItem(this.biblioteca, cd);
		console.log(`\nCD "${cd.titulo}" adicionado com sucesso!`);
	}

	private adicionarDVD() {
		const id = this.nextId++;
		const titulo = this.obterEntradaValida("\nTitulo: ");
		const ano = parseInt(this.obterEntradaValida("Ano: "));
		const localizacao = this.obterEntradaValida("Localizacao: ");
		const duracao = parseInt(this.obterEntradaValida("Duracao (minutos): "));
		const status = "disponível";
		const dvd = new DVD(id, titulo, ano, localizacao, duracao, status);
		registrarItem(this.biblioteca, dvd);
		console.log(`\nDVD "${dvd.titulo}" adicionado com sucesso!`);
	}

	private listarLivros() {
		this.biblioteca
			.listarItens()
			.filter((item: ItemAcervo) => item instanceof Livro)
			.forEach((item: ItemAcervo) => console.log(item.getInfo()));
	}

	private listarRevistas() {
		this.biblioteca
			.listarItens()
			.filter((item: ItemAcervo) => item instanceof Revista)
			.forEach((item: ItemAcervo) => console.log(item.getInfo()));
	}

	private listarCDs() {
		this.biblioteca
			.listarItens()
			.filter((item: ItemAcervo) => item instanceof CD)
			.forEach((item: ItemAcervo) => console.log(item.getInfo()));
	}

	private listarDVDs() {
		this.biblioteca
			.listarItens()
			.filter((item: ItemAcervo) => item instanceof DVD)
			.forEach((item: ItemAcervo) => console.log(item.getInfo()));
	}

	private listarTodosItens() {
		this.biblioteca
			.listarItens()
			.forEach((item: ItemAcervo) => console.log(item.getInfo()));
	}

	private removerLivro() {
		const id = parseInt(readlineSync.question("ID do livro a ser removido: "));
		this.biblioteca.removerItem(id);
		console.log("Livro removido com sucesso!");
	}

	private removerRevista() {
		const id = parseInt(
			readlineSync.question("ID da revista a ser removida: ")
		);
		this.biblioteca.removerItem(id);
		console.log("Revista removida com sucesso!");
	}

	private removerCD() {
		const id = parseInt(readlineSync.question("ID do CD a ser removido: "));
		this.biblioteca.removerItem(id);
		console.log("CD removido com sucesso!");
	}

	private removerDVD() {
		const id = parseInt(readlineSync.question("ID do DVD a ser removido: "));
		this.biblioteca.removerItem(id);
		console.log("DVD removido com sucesso!");
	}

	private removerTodosItens() {
		this.biblioteca
			.listarItens()
			.forEach((item: ItemAcervo) => this.biblioteca.removerItem(item.id));
		console.log("Todos os itens foram removidos com sucesso!");
	}

	private editarLivro() {
		const id = parseInt(readlineSync.question("ID do livro a ser editado: "));
		const livro = this.biblioteca
			.listarItens()
			.find(
				(item: ItemAcervo) => item.id === id && item instanceof Livro
			) as Livro;
		if (livro) {
			const titulo = readlineSync.question(`Titulo (${livro.titulo}): `, {
				defaultInput: livro.titulo,
			});
			const ano = parseInt(
				readlineSync.question(`Ano (${livro.ano}): `, {
					defaultInput: livro.ano.toString(),
				})
			);
			const localizacao = readlineSync.question(
				`Localizacao (${livro.localizacao}): `,
				{ defaultInput: livro.localizacao }
			);
			const editora = readlineSync.question(`Editora (${livro.editora}): `, {
				defaultInput: livro.editora,
			});
			const status = readlineSync.question(`Status (${livro.status}): `, {
				defaultInput: livro.status,
			});
			const novoLivro = new Livro(
				id,
				titulo,
				ano,
				localizacao,
				editora,
				livro.isbn,
				status
			);
			this.biblioteca.atualizarItem(id, novoLivro);
			console.log("Livro editado com sucesso!");
		} else {
			console.log("Livro não encontrado!");
		}
	}

	private editarRevista() {
		const id = parseInt(readlineSync.question("ID da revista a ser editada: "));
		const revista = this.biblioteca
			.listarItens()
			.find(
				(item: ItemAcervo) => item.id === id && item instanceof Revista
			) as Revista;
		if (revista) {
			const titulo = readlineSync.question(`Titulo (${revista.titulo}): `, {
				defaultInput: revista.titulo,
			});
			const ano = parseInt(
				readlineSync.question(`Ano (${revista.ano}): `, {
					defaultInput: revista.ano.toString(),
				})
			);
			const localizacao = readlineSync.question(
				`Localizacao (${revista.localizacao}): `,
				{ defaultInput: revista.localizacao }
			);
			const editora = readlineSync.question(`Editora (${revista.editora}): `, {
				defaultInput: revista.editora,
			});
			const status = readlineSync.question(`Status (${revista.status}): `, {
				defaultInput: revista.status,
			});
			const novaRevista = new Revista(
				id,
				titulo,
				ano,
				localizacao,
				editora,
				status
			);
			this.biblioteca.atualizarItem(id, novaRevista);
			console.log("Revista editada com sucesso!");
		} else {
			console.log("Revista não encontrada!");
		}
	}

	private editarCD() {
		const id = parseInt(readlineSync.question("ID do CD a ser editado: "));
		const cd = this.biblioteca
			.listarItens()
			.find((item: ItemAcervo) => item.id === id && item instanceof CD) as CD;
		if (cd) {
			const titulo = readlineSync.question(`Titulo (${cd.titulo}): `, {
				defaultInput: cd.titulo,
			});
			const ano = parseInt(
				readlineSync.question(`Ano (${cd.ano}): `, {
					defaultInput: cd.ano.toString(),
				})
			);
			const localizacao = readlineSync.question(
				`Localizacao (${cd.localizacao}): `,
				{ defaultInput: cd.localizacao }
			);
			const duracao = parseInt(
				readlineSync.question(`Duracao (${cd.duracao}): `, {
					defaultInput: cd.duracao.toString(),
				})
			);
			const status = readlineSync.question(`Status (${cd.status}): `, {
				defaultInput: cd.status,
			});
			const novoCD = new CD(id, titulo, ano, localizacao, duracao, status);
			this.biblioteca.atualizarItem(id, novoCD);
			console.log("CD editado com sucesso!");
		} else {
			console.log("CD não encontrado!");
		}
	}

	private editarDVD() {
		const id = parseInt(readlineSync.question("ID do DVD a ser editado: "));
		const dvd = this.biblioteca
			.listarItens()
			.find((item: ItemAcervo) => item.id === id && item instanceof DVD) as DVD;
		if (dvd) {
			const titulo = readlineSync.question(`Titulo (${dvd.titulo}): `, {
				defaultInput: dvd.titulo,
			});
			const ano = parseInt(
				readlineSync.question(`Ano (${dvd.ano}): `, {
					defaultInput: dvd.ano.toString(),
				})
			);
			const localizacao = readlineSync.question(
				`Localizacao (${dvd.localizacao}): `,
				{ defaultInput: dvd.localizacao }
			);
			const duracao = parseInt(
				readlineSync.question(`Duracao (${dvd.duracao}): `, {
					defaultInput: dvd.duracao.toString(),
				})
			);
			const status = readlineSync.question(`Status (${dvd.status}): `, {
				defaultInput: dvd.status,
			});
			const novoDVD = new DVD(id, titulo, ano, localizacao, duracao, status);
			this.biblioteca.atualizarItem(id, novoDVD);
			console.log("DVD editado com sucesso!");
		} else {
			console.log("DVD não encontrado!");
		}
	}
}

const menu = new Menu();
menu.iniciar();
