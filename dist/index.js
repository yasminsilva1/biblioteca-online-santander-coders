"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Biblioteca_1 = require("./services/Biblioteca");
const livro_1 = require("./models/livro");
const revista_1 = require("./models/revista");
const cd_1 = require("./models/cd");
const dvd_1 = require("./models/dvd");
const registrarItem_1 = require("./services/registrarItem");
class Menu {
    constructor() {
        this.biblioteca = new Biblioteca_1.Biblioteca();
        this.nextId = 1;
    }
    iniciar() {
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
    menuPrincipal() {
        console.log("\n--- Biblioteca Online ---");
        console.log("[1]. Adicionar Item");
        console.log("[2]. Listar Itens");
        console.log("[3]. Remover Item");
        console.log("[4]. Editar Item");
        console.log("[5]. Sair");
        return readline_sync_1.default.question("Escolha uma opcao: ");
    }
    menuAdicionar() {
        while (true) {
            console.log("\n--- Adicionar Item ---");
            console.log("[1]. Adicionar Livro");
            console.log("[2]. Adicionar Revista");
            console.log("[3]. Adicionar CD");
            console.log("[4]. Adicionar DVD");
            console.log("[5]. Voltar");
            const choice = readline_sync_1.default.question("Escolha uma opcao: ");
            if (choice === "5")
                break;
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
    menuListar() {
        while (true) {
            console.log("\n--- Listar Itens ---");
            console.log("[1]. Listar Livros");
            console.log("[2]. Listar Revistas");
            console.log("[3]. Listar CDs");
            console.log("[4]. Listar DVDs");
            console.log("[5]. Listar Todos os Itens");
            console.log("[6]. Voltar");
            const choice = readline_sync_1.default.question("Escolha uma opcao: ");
            if (choice === "6")
                break;
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
    menuRemover() {
        while (true) {
            console.log("\n--- Remover Item ---");
            console.log("[1]. Remover Livro");
            console.log("[2]. Remover Revista");
            console.log("[3]. Remover CD");
            console.log("[4]. Remover DVD");
            console.log("[5]. Remover Todos os Itens");
            console.log("[6]. Voltar");
            const choice = readline_sync_1.default.question("Escolha uma opcao: ");
            if (choice === "6")
                break;
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
    menuEditar() {
        while (true) {
            console.log("\n--- Editar Item ---");
            console.log("[1]. Editar Livro");
            console.log("[2]. Editar Revista");
            console.log("[3]. Editar CD");
            console.log("[4]. Editar DVD");
            console.log("[5]. Voltar");
            const choice = readline_sync_1.default.question("Escolha uma opcao: ");
            if (choice === "5")
                break;
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
    obterEntradaValida(pergunta) {
        let entrada = "";
        while (!entrada) {
            entrada = readline_sync_1.default.question(pergunta);
            if (!entrada) {
                console.error(`${pergunta}não pode ser vazio. Por favor, tente novamente.`);
            }
        }
        return entrada;
    }
    adicionarLivro() {
        const id = this.nextId++;
        const titulo = this.obterEntradaValida("\nTitulo: ");
        const ano = parseInt(this.obterEntradaValida("Ano: "));
        const localizacao = this.obterEntradaValida("Localizacao: ");
        const editora = this.obterEntradaValida("Editora: ");
        const isbn = this.obterEntradaValida("ISBN: ");
        const status = "disponível";
        const livro = new livro_1.Livro(id, titulo, ano, localizacao, editora, isbn, status);
        (0, registrarItem_1.registrarItem)(this.biblioteca, livro);
        console.log(`\nLivro "${livro.titulo}" adicionado com sucesso!`);
    }
    adicionarRevista() {
        const id = this.nextId++;
        const titulo = this.obterEntradaValida("\nTitulo: ");
        const ano = parseInt(this.obterEntradaValida("Ano: "));
        const localizacao = this.obterEntradaValida("Localizacao: ");
        const editora = this.obterEntradaValida("Editora: ");
        const status = "disponível";
        const revista = new revista_1.Revista(id, titulo, ano, localizacao, editora, status);
        (0, registrarItem_1.registrarItem)(this.biblioteca, revista);
        console.log(`\nRevista "${revista.titulo}" adicionada com sucesso!`);
    }
    adicionarCD() {
        const id = this.nextId++;
        const titulo = this.obterEntradaValida("\nTitulo: ");
        const ano = parseInt(this.obterEntradaValida("Ano: "));
        const localizacao = this.obterEntradaValida("Localizacao: ");
        const duracao = parseInt(this.obterEntradaValida("Duracao (minutos): "));
        const status = "disponível";
        const cd = new cd_1.CD(id, titulo, ano, localizacao, duracao, status);
        (0, registrarItem_1.registrarItem)(this.biblioteca, cd);
        console.log(`\nCD "${cd.titulo}" adicionado com sucesso!`);
    }
    adicionarDVD() {
        const id = this.nextId++;
        const titulo = this.obterEntradaValida("\nTitulo: ");
        const ano = parseInt(this.obterEntradaValida("Ano: "));
        const localizacao = this.obterEntradaValida("Localizacao: ");
        const duracao = parseInt(this.obterEntradaValida("Duracao (minutos): "));
        const status = "disponível";
        const dvd = new dvd_1.DVD(id, titulo, ano, localizacao, duracao, status);
        (0, registrarItem_1.registrarItem)(this.biblioteca, dvd);
        console.log(`\nDVD "${dvd.titulo}" adicionado com sucesso!`);
    }
    listarLivros() {
        this.biblioteca
            .listarItens()
            .filter((item) => item instanceof livro_1.Livro)
            .forEach((item) => console.log(item.getInfo()));
    }
    listarRevistas() {
        this.biblioteca
            .listarItens()
            .filter((item) => item instanceof revista_1.Revista)
            .forEach((item) => console.log(item.getInfo()));
    }
    listarCDs() {
        this.biblioteca
            .listarItens()
            .filter((item) => item instanceof cd_1.CD)
            .forEach((item) => console.log(item.getInfo()));
    }
    listarDVDs() {
        this.biblioteca
            .listarItens()
            .filter((item) => item instanceof dvd_1.DVD)
            .forEach((item) => console.log(item.getInfo()));
    }
    listarTodosItens() {
        this.biblioteca
            .listarItens()
            .forEach((item) => console.log(item.getInfo()));
    }
    removerLivro() {
        const id = parseInt(readline_sync_1.default.question("ID do livro a ser removido: "));
        this.biblioteca.removerItem(id);
        console.log("Livro removido com sucesso!");
    }
    removerRevista() {
        const id = parseInt(readline_sync_1.default.question("ID da revista a ser removida: "));
        this.biblioteca.removerItem(id);
        console.log("Revista removida com sucesso!");
    }
    removerCD() {
        const id = parseInt(readline_sync_1.default.question("ID do CD a ser removido: "));
        this.biblioteca.removerItem(id);
        console.log("CD removido com sucesso!");
    }
    removerDVD() {
        const id = parseInt(readline_sync_1.default.question("ID do DVD a ser removido: "));
        this.biblioteca.removerItem(id);
        console.log("DVD removido com sucesso!");
    }
    removerTodosItens() {
        this.biblioteca
            .listarItens()
            .forEach((item) => this.biblioteca.removerItem(item.id));
        console.log("Todos os itens foram removidos com sucesso!");
    }
    editarLivro() {
        const id = parseInt(readline_sync_1.default.question("ID do livro a ser editado: "));
        const livro = this.biblioteca
            .listarItens()
            .find((item) => item.id === id && item instanceof livro_1.Livro);
        if (livro) {
            const titulo = readline_sync_1.default.question(`Titulo (${livro.titulo}): `, {
                defaultInput: livro.titulo,
            });
            const ano = parseInt(readline_sync_1.default.question(`Ano (${livro.ano}): `, {
                defaultInput: livro.ano.toString(),
            }));
            const localizacao = readline_sync_1.default.question(`Localizacao (${livro.localizacao}): `, { defaultInput: livro.localizacao });
            const editora = readline_sync_1.default.question(`Editora (${livro.editora}): `, {
                defaultInput: livro.editora,
            });
            const status = readline_sync_1.default.question(`Status (${livro.status}): `, {
                defaultInput: livro.status,
            });
            const novoLivro = new livro_1.Livro(id, titulo, ano, localizacao, editora, livro.isbn, status);
            this.biblioteca.atualizarItem(id, novoLivro);
            console.log("Livro editado com sucesso!");
        }
        else {
            console.log("Livro não encontrado!");
        }
    }
    editarRevista() {
        const id = parseInt(readline_sync_1.default.question("ID da revista a ser editada: "));
        const revista = this.biblioteca
            .listarItens()
            .find((item) => item.id === id && item instanceof revista_1.Revista);
        if (revista) {
            const titulo = readline_sync_1.default.question(`Titulo (${revista.titulo}): `, {
                defaultInput: revista.titulo,
            });
            const ano = parseInt(readline_sync_1.default.question(`Ano (${revista.ano}): `, {
                defaultInput: revista.ano.toString(),
            }));
            const localizacao = readline_sync_1.default.question(`Localizacao (${revista.localizacao}): `, { defaultInput: revista.localizacao });
            const editora = readline_sync_1.default.question(`Editora (${revista.editora}): `, {
                defaultInput: revista.editora,
            });
            const status = readline_sync_1.default.question(`Status (${revista.status}): `, {
                defaultInput: revista.status,
            });
            const novaRevista = new revista_1.Revista(id, titulo, ano, localizacao, editora, status);
            this.biblioteca.atualizarItem(id, novaRevista);
            console.log("Revista editada com sucesso!");
        }
        else {
            console.log("Revista não encontrada!");
        }
    }
    editarCD() {
        const id = parseInt(readline_sync_1.default.question("ID do CD a ser editado: "));
        const cd = this.biblioteca
            .listarItens()
            .find((item) => item.id === id && item instanceof cd_1.CD);
        if (cd) {
            const titulo = readline_sync_1.default.question(`Titulo (${cd.titulo}): `, {
                defaultInput: cd.titulo,
            });
            const ano = parseInt(readline_sync_1.default.question(`Ano (${cd.ano}): `, {
                defaultInput: cd.ano.toString(),
            }));
            const localizacao = readline_sync_1.default.question(`Localizacao (${cd.localizacao}): `, { defaultInput: cd.localizacao });
            const duracao = parseInt(readline_sync_1.default.question(`Duracao (${cd.duracao}): `, {
                defaultInput: cd.duracao.toString(),
            }));
            const status = readline_sync_1.default.question(`Status (${cd.status}): `, {
                defaultInput: cd.status,
            });
            const novoCD = new cd_1.CD(id, titulo, ano, localizacao, duracao, status);
            this.biblioteca.atualizarItem(id, novoCD);
            console.log("CD editado com sucesso!");
        }
        else {
            console.log("CD não encontrado!");
        }
    }
    editarDVD() {
        const id = parseInt(readline_sync_1.default.question("ID do DVD a ser editado: "));
        const dvd = this.biblioteca
            .listarItens()
            .find((item) => item.id === id && item instanceof dvd_1.DVD);
        if (dvd) {
            const titulo = readline_sync_1.default.question(`Titulo (${dvd.titulo}): `, {
                defaultInput: dvd.titulo,
            });
            const ano = parseInt(readline_sync_1.default.question(`Ano (${dvd.ano}): `, {
                defaultInput: dvd.ano.toString(),
            }));
            const localizacao = readline_sync_1.default.question(`Localizacao (${dvd.localizacao}): `, { defaultInput: dvd.localizacao });
            const duracao = parseInt(readline_sync_1.default.question(`Duracao (${dvd.duracao}): `, {
                defaultInput: dvd.duracao.toString(),
            }));
            const status = readline_sync_1.default.question(`Status (${dvd.status}): `, {
                defaultInput: dvd.status,
            });
            const novoDVD = new dvd_1.DVD(id, titulo, ano, localizacao, duracao, status);
            this.biblioteca.atualizarItem(id, novoDVD);
            console.log("DVD editado com sucesso!");
        }
        else {
            console.log("DVD não encontrado!");
        }
    }
}
const menu = new Menu();
menu.iniciar();
