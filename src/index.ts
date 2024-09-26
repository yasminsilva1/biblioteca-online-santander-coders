import { Biblioteca } from './services/Biblioteca';
import { Livro } from './models/Livro';
import { Revista } from './models/Revista';
import { CD } from './models/CD';
import { DVD } from './models/DVD';
import { registrarItem } from './services/registrarItem';
import readlineSync from 'readline-sync';

const biblioteca = new Biblioteca();
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
    const choice = readlineSync.question('Escolha uma opcao: ');
    return choice;
}

function adicionarLivro() {
    const id = nextId++;
    const titulo = readlineSync.question('Título: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const editora = readlineSync.question('Editora: ');
    const isbn = readlineSync.question('ISBN: ');
    const livro = new Livro(id, titulo, ano, localizacao, editora, isbn);
    registrarItem(biblioteca, livro);
    console.log('Livro adicionado com sucesso!');
}

function adicionarRevista() {
    const id = nextId++;
    const titulo = readlineSync.question('Título: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const editora = readlineSync.question('Editora: ');
    const revista = new Revista(id, titulo, ano, localizacao, editora);
    registrarItem(biblioteca, revista);
    console.log('Revista adicionada com sucesso!');
}

function adicionarCD() {
    const id = nextId++;
    const titulo = readlineSync.question('Título: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const duracao = parseInt(readlineSync.question('Duracao (minutos): '));
    const cd = new CD(id, titulo, ano, localizacao, duracao);
    registrarItem(biblioteca, cd);
    console.log('CD adicionado com sucesso!');
}

function adicionarDVD() {
    const id = nextId++;
    const titulo = readlineSync.question('Título: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const duracao = parseInt(readlineSync.question('Duracao (minutos): '));
    const dvd = new DVD(id, titulo, ano, localizacao, duracao);
    registrarItem(biblioteca, dvd);
    console.log('DVD adicionado com sucesso!');
}

function listarItens() {
    biblioteca.listarItens();
}

function removerItem() {
    const id = parseInt(readlineSync.question('ID do item a ser removido: '));
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