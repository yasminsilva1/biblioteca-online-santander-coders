"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = require("./services/Biblioteca");
const Livro_1 = require("./models/Livro");
const Revista_1 = require("./models/Revista");
const CD_1 = require("./models/CD");
const DVD_1 = require("./models/DVD");
const registrarItem_1 = require("./services/registrarItem");
const readline_sync_1 = __importDefault(require("readline-sync"));
const biblioteca = new Biblioteca_1.Biblioteca();
let nextId = 1;
function menu() {
    console.log('\n--- Biblioteca Online ---');
    console.log('1. Adicionar Item');
    console.log('2. Listar Itens');
    console.log('3. Remover Item');
    console.log('4. Editar Item');
    console.log('5. Sair');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function menuAdicionar() {
    console.log('\n--- Adicionar Item ---');
    console.log('1. Adicionar Livro');
    console.log('2. Adicionar Revista');
    console.log('3. Adicionar CD');
    console.log('4. Adicionar DVD');
    console.log('5. Voltar');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function menuListar() {
    console.log('\n--- Listar Itens ---');
    console.log('1. Listar Livros');
    console.log('2. Listar Revistas');
    console.log('3. Listar CDs');
    console.log('4. Listar DVDs');
    console.log('5. Listar Todos os Itens');
    console.log('6. Voltar');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function menuRemover() {
    console.log('\n--- Remover Item ---');
    console.log('1. Remover Livro');
    console.log('2. Remover Revista');
    console.log('3. Remover CD');
    console.log('4. Remover DVD');
    console.log('5. Remover Todos os Itens');
    console.log('6. Voltar');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function menuEditar() {
    console.log('\n--- Editar Item ---');
    console.log('1. Editar Livro');
    console.log('2. Editar Revista');
    console.log('3. Editar CD');
    console.log('4. Editar DVD');
    console.log('5. Voltar');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function adicionarLivro() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Titulo: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const editora = readline_sync_1.default.question('Editora: ');
    const isbn = readline_sync_1.default.question('ISBN: ');
    const status = 'disponível';
    const livro = new Livro_1.Livro(id, titulo, ano, localizacao, editora, isbn, status);
    (0, registrarItem_1.registrarItem)(biblioteca, livro);
    console.log('Livro adicionado com sucesso!');
}
function adicionarRevista() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Titulo: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const editora = readline_sync_1.default.question('Editora: ');
    const status = 'disponível';
    const revista = new Revista_1.Revista(id, titulo, ano, localizacao, editora, status);
    (0, registrarItem_1.registrarItem)(biblioteca, revista);
    console.log('Revista adicionada com sucesso!');
}
function adicionarCD() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Titulo: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const duracao = parseInt(readline_sync_1.default.question('Duracao (minutos): '));
    const status = 'disponível';
    const cd = new CD_1.CD(id, titulo, ano, localizacao, duracao, status);
    (0, registrarItem_1.registrarItem)(biblioteca, cd);
    console.log('CD adicionado com sucesso!');
}
function adicionarDVD() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Titulo: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const duracao = parseInt(readline_sync_1.default.question('Duracao (minutos): '));
    const status = 'disponível';
    const dvd = new DVD_1.DVD(id, titulo, ano, localizacao, duracao, status);
    (0, registrarItem_1.registrarItem)(biblioteca, dvd);
    console.log('DVD adicionado com sucesso!');
}
function listarLivros() {
    biblioteca.listarItens().filter((item) => item instanceof Livro_1.Livro).forEach((item) => console.log(item.getInfo()));
}
function listarRevistas() {
    biblioteca.listarItens().filter((item) => item instanceof Revista_1.Revista).forEach((item) => console.log(item.getInfo()));
}
function listarCDs() {
    biblioteca.listarItens().filter((item) => item instanceof CD_1.CD).forEach((item) => console.log(item.getInfo()));
}
function listarDVDs() {
    biblioteca.listarItens().filter((item) => item instanceof DVD_1.DVD).forEach((item) => console.log(item.getInfo()));
}
function listarTodosItens() {
    biblioteca.listarItens().forEach((item) => console.log(item.getInfo()));
}
function removerLivro() {
    const id = parseInt(readline_sync_1.default.question('ID do livro a ser removido: '));
    biblioteca.removerItem(id);
    console.log('Livro removido com sucesso!');
}
function removerRevista() {
    const id = parseInt(readline_sync_1.default.question('ID da revista a ser removida: '));
    biblioteca.removerItem(id);
    console.log('Revista removida com sucesso!');
}
function removerCD() {
    const id = parseInt(readline_sync_1.default.question('ID do CD a ser removido: '));
    biblioteca.removerItem(id);
    console.log('CD removido com sucesso!');
}
function removerDVD() {
    const id = parseInt(readline_sync_1.default.question('ID do DVD a ser removido: '));
    biblioteca.removerItem(id);
    console.log('DVD removido com sucesso!');
}
function removerTodosItens() {
    biblioteca.listarItens().forEach((item) => biblioteca.removerItem(item.id));
    console.log('Todos os itens foram removidos com sucesso!');
}
function editarLivro() {
    const id = parseInt(readline_sync_1.default.question('ID do livro a ser editado: '));
    const livro = biblioteca.listarItens().find((item) => item.id === id && item instanceof Livro_1.Livro);
    if (livro) {
        const titulo = readline_sync_1.default.question(`Titulo (${livro.titulo}): `, { defaultInput: livro.titulo });
        const ano = parseInt(readline_sync_1.default.question(`Ano (${livro.ano}): `, { defaultInput: livro.ano.toString() }));
        const localizacao = readline_sync_1.default.question(`Localizacao (${livro.localizacao}): `, { defaultInput: livro.localizacao });
        const editora = readline_sync_1.default.question(`Editora (${livro.editora}): `, { defaultInput: livro.editora });
        const status = readline_sync_1.default.question(`Status (${livro.status}): `, { defaultInput: livro.status });
        const novoLivro = new Livro_1.Livro(id, titulo, ano, localizacao, editora, livro.isbn, status);
        biblioteca.atualizarItem(id, novoLivro);
        console.log('Livro editado com sucesso!');
    }
    else {
        console.log('Livro não encontrado!');
    }
}
function editarRevista() {
    const id = parseInt(readline_sync_1.default.question('ID da revista a ser editada: '));
    const revista = biblioteca.listarItens().find((item) => item.id === id && item instanceof Revista_1.Revista);
    if (revista) {
        const titulo = readline_sync_1.default.question(`Titulo (${revista.titulo}): `, { defaultInput: revista.titulo });
        const ano = parseInt(readline_sync_1.default.question(`Ano (${revista.ano}): `, { defaultInput: revista.ano.toString() }));
        const localizacao = readline_sync_1.default.question(`Localizacao (${revista.localizacao}): `, { defaultInput: revista.localizacao });
        const editora = readline_sync_1.default.question(`Editora (${revista.editora}): `, { defaultInput: revista.editora });
        const status = readline_sync_1.default.question(`Status (${revista.status}): `, { defaultInput: revista.status });
        const novaRevista = new Revista_1.Revista(id, titulo, ano, localizacao, editora, status);
        biblioteca.atualizarItem(id, novaRevista);
        console.log('Revista editada com sucesso!');
    }
    else {
        console.log('Revista não encontrada!');
    }
}
function editarCD() {
    const id = parseInt(readline_sync_1.default.question('ID do CD a ser editado: '));
    const cd = biblioteca.listarItens().find((item) => item.id === id && item instanceof CD_1.CD);
    if (cd) {
        const titulo = readline_sync_1.default.question(`Titulo (${cd.titulo}): `, { defaultInput: cd.titulo });
        const ano = parseInt(readline_sync_1.default.question(`Ano (${cd.ano}): `, { defaultInput: cd.ano.toString() }));
        const localizacao = readline_sync_1.default.question(`Localizacao (${cd.localizacao}): `, { defaultInput: cd.localizacao });
        const duracao = parseInt(readline_sync_1.default.question(`Duracao (${cd.duracao}): `, { defaultInput: cd.duracao.toString() }));
        const status = readline_sync_1.default.question(`Status (${cd.status}): `, { defaultInput: cd.status });
        const novoCD = new CD_1.CD(id, titulo, ano, localizacao, duracao, status);
        biblioteca.atualizarItem(id, novoCD);
        console.log('CD editado com sucesso!');
    }
    else {
        console.log('CD não encontrado!');
    }
}
function editarDVD() {
    const id = parseInt(readline_sync_1.default.question('ID do DVD a ser editado: '));
    const dvd = biblioteca.listarItens().find((item) => item.id === id && item instanceof DVD_1.DVD);
    if (dvd) {
        const titulo = readline_sync_1.default.question(`Titulo (${dvd.titulo}): `, { defaultInput: dvd.titulo });
        const ano = parseInt(readline_sync_1.default.question(`Ano (${dvd.ano}): `, { defaultInput: dvd.ano.toString() }));
        const localizacao = readline_sync_1.default.question(`Localizacao (${dvd.localizacao}): `, { defaultInput: dvd.localizacao });
        const duracao = parseInt(readline_sync_1.default.question(`Duracao (${dvd.duracao}): `, { defaultInput: dvd.duracao.toString() }));
        const status = readline_sync_1.default.question(`Status (${dvd.status}): `, { defaultInput: dvd.status });
        const novoDVD = new DVD_1.DVD(id, titulo, ano, localizacao, duracao, status);
        biblioteca.atualizarItem(id, novoDVD);
        console.log('DVD editado com sucesso!');
    }
    else {
        console.log('DVD não encontrado!');
    }
}
while (true) {
    const choice = menu();
    switch (choice) {
        case '1':
            while (true) {
                const addChoice = menuAdicionar();
                if (addChoice === '5')
                    break;
                switch (addChoice) {
                    case '1':
                        adicionarLivro();
                        break;
                    case '2':
                        adicionarRevista();
                        break;
                    case '3':
                        adicionarCD();
                        break;
                    case '4':
                        adicionarDVD();
                        break;
                    default:
                        console.log('Opcao invalida!');
                }
            }
            break;
        case '2':
            while (true) {
                const listChoice = menuListar();
                if (listChoice === '6')
                    break;
                switch (listChoice) {
                    case '1':
                        listarLivros();
                        break;
                    case '2':
                        listarRevistas();
                        break;
                    case '3':
                        listarCDs();
                        break;
                    case '4':
                        listarDVDs();
                        break;
                    case '5':
                        listarTodosItens();
                        break;
                    default:
                        console.log('Opcao invalida!');
                }
            }
            break;
        case '3':
            while (true) {
                const removeChoice = menuRemover();
                if (removeChoice === '6')
                    break;
                switch (removeChoice) {
                    case '1':
                        removerLivro();
                        break;
                    case '2':
                        removerRevista();
                        break;
                    case '3':
                        removerCD();
                        break;
                    case '4':
                        removerDVD();
                        break;
                    case '5':
                        removerTodosItens();
                        break;
                    default:
                        console.log('Opcao invalida!');
                }
            }
            break;
        case '4':
            while (true) {
                const editChoice = menuEditar();
                if (editChoice === '5')
                    break;
                switch (editChoice) {
                    case '1':
                        editarLivro();
                        break;
                    case '2':
                        editarRevista();
                        break;
                    case '3':
                        editarCD();
                        break;
                    case '4':
                        editarDVD();
                        break;
                    default:
                        console.log('Opcao invalida!');
                }
            }
            break;
        case '5':
            console.log('Saindo...');
            process.exit(0);
        default:
            console.log('Opcao invalida!');
    }
}
