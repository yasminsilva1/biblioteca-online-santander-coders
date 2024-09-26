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
let nextId = 0;
function menu() {
    console.log('\n--- Biblioteca Online ---');
    console.log('1. Adicionar Livro');
    console.log('2. Adicionar Revista');
    console.log('3. Adicionar CD');
    console.log('4. Adicionar DVD');
    console.log('5. Listar Itens');
    console.log('6. Remover Item');
    console.log('7. Sair');
    const choice = readline_sync_1.default.question('Escolha uma opcao: ');
    return choice;
}
function adicionarLivro() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Título: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const editora = readline_sync_1.default.question('Editora: ');
    const isbn = readline_sync_1.default.question('ISBN: ');
    const livro = new Livro_1.Livro(id, titulo, ano, localizacao, editora, isbn);
    (0, registrarItem_1.registrarItem)(biblioteca, livro);
    console.log('Livro adicionado com sucesso!');
}
function adicionarRevista() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Título: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const editora = readline_sync_1.default.question('Editora: ');
    const revista = new Revista_1.Revista(id, titulo, ano, localizacao, editora);
    (0, registrarItem_1.registrarItem)(biblioteca, revista);
    console.log('Revista adicionada com sucesso!');
}
function adicionarCD() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Título: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const duracao = parseInt(readline_sync_1.default.question('Duracao (minutos): '));
    const cd = new CD_1.CD(id, titulo, ano, localizacao, duracao);
    (0, registrarItem_1.registrarItem)(biblioteca, cd);
    console.log('CD adicionado com sucesso!');
}
function adicionarDVD() {
    const id = nextId++;
    const titulo = readline_sync_1.default.question('Título: ');
    const ano = parseInt(readline_sync_1.default.question('Ano: '));
    const localizacao = readline_sync_1.default.question('Localizacao: ');
    const duracao = parseInt(readline_sync_1.default.question('Duracao (minutos): '));
    const dvd = new DVD_1.DVD(id, titulo, ano, localizacao, duracao);
    (0, registrarItem_1.registrarItem)(biblioteca, dvd);
    console.log('DVD adicionado com sucesso!');
}
function listarItens() {
    biblioteca.listarItens();
}
function removerItem() {
    const id = parseInt(readline_sync_1.default.question('ID do item a ser removido: '));
    biblioteca.removerItem(id);
    console.log('Item removido com sucesso!');
}
while (true) {
    const choice = menu();
    switch (choice) {
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
        case '5':
            listarItens();
            break;
        case '6':
            removerItem();
            break;
        case '7':
            console.log('Saindo...');
            process.exit(0);
        default:
            console.log('Opcao invalida!');
    }
}
