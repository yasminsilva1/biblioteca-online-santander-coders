import { Biblioteca } from './services/Biblioteca';
import { Livro } from './models/Livro';
import { Revista } from './models/Revista';
import { CD } from './models/CD';
import { DVD } from './models/DVD';
import { ItemAcervo } from './models/ItemAcervo';
import { registrarItem } from './services/registrarItem';
import readlineSync from 'readline-sync';

const biblioteca = new Biblioteca();
let nextId = 1;

function menu() {
    console.log('\n--- Biblioteca Online ---');
    console.log('1. Adicionar Item');
    console.log('2. Listar Itens');
    console.log('3. Remover Item');
    console.log('4. Editar Item');
    console.log('5. Sair');
    const choice = readlineSync.question('Escolha uma opcao: ');
    return choice;
}

function menuAdicionar() {
    console.log('\n--- Adicionar Item ---');
    console.log('1. Adicionar Livro');
    console.log('2. Adicionar Revista');
    console.log('3. Adicionar CD');
    console.log('4. Adicionar DVD');
    console.log('5. Voltar');
    const choice = readlineSync.question('Escolha uma opcao: ');
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
    const choice = readlineSync.question('Escolha uma opcao: ');
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
    const choice = readlineSync.question('Escolha uma opcao: ');
    return choice;
}

function menuEditar() {
    console.log('\n--- Editar Item ---');
    console.log('1. Editar Livro');
    console.log('2. Editar Revista');
    console.log('3. Editar CD');
    console.log('4. Editar DVD');
    console.log('5. Voltar');
    const choice = readlineSync.question('Escolha uma opcao: ');
    return choice;
}

function adicionarLivro() {
    const id = nextId++;
    const titulo = readlineSync.question('Titulo: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const editora = readlineSync.question('Editora: ');
    const isbn = readlineSync.question('ISBN: ');
    const status = 'disponível';
    const livro = new Livro(id, titulo, ano, localizacao, editora, isbn, status);
    registrarItem(biblioteca, livro);
    console.log('Livro adicionado com sucesso!');
}

function adicionarRevista() {
    const id = nextId++;
    const titulo = readlineSync.question('Titulo: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const editora = readlineSync.question('Editora: ');
    const status = 'disponível';
    const revista = new Revista(id, titulo, ano, localizacao, editora, status);
    registrarItem(biblioteca, revista);
    console.log('Revista adicionada com sucesso!');
}

function adicionarCD() {
    const id = nextId++;
    const titulo = readlineSync.question('Titulo: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const duracao = parseInt(readlineSync.question('Duracao (minutos): '));
    const status = 'disponível';
    const cd = new CD(id, titulo, ano, localizacao, duracao, status);
    registrarItem(biblioteca, cd);
    console.log('CD adicionado com sucesso!');
}

function adicionarDVD() {
    const id = nextId++;
    const titulo = readlineSync.question('Titulo: ');
    const ano = parseInt(readlineSync.question('Ano: '));
    const localizacao = readlineSync.question('Localizacao: ');
    const duracao = parseInt(readlineSync.question('Duracao (minutos): '));
    const status = 'disponível';
    const dvd = new DVD(id, titulo, ano, localizacao, duracao, status);
    registrarItem(biblioteca, dvd);
    console.log('DVD adicionado com sucesso!');
}

function listarLivros() {
    biblioteca.listarItens().filter((item: ItemAcervo) => item instanceof Livro).forEach((item: ItemAcervo) => console.log(item.getInfo()));
}

function listarRevistas() {
    biblioteca.listarItens().filter((item: ItemAcervo) => item instanceof Revista).forEach((item: ItemAcervo) => console.log(item.getInfo()));
}

function listarCDs() {
    biblioteca.listarItens().filter((item: ItemAcervo) => item instanceof CD).forEach((item: ItemAcervo) => console.log(item.getInfo()));
}

function listarDVDs() {
    biblioteca.listarItens().filter((item: ItemAcervo) => item instanceof DVD).forEach((item: ItemAcervo) => console.log(item.getInfo()));
}

function listarTodosItens() {
    biblioteca.listarItens().forEach((item: ItemAcervo) => console.log(item.getInfo()));
}

function removerLivro() {
    const id = parseInt(readlineSync.question('ID do livro a ser removido: '));
    biblioteca.removerItem(id);
    console.log('Livro removido com sucesso!');
}

function removerRevista() {
    const id = parseInt(readlineSync.question('ID da revista a ser removida: '));
    biblioteca.removerItem(id);
    console.log('Revista removida com sucesso!');
}

function removerCD() {
    const id = parseInt(readlineSync.question('ID do CD a ser removido: '));
    biblioteca.removerItem(id);
    console.log('CD removido com sucesso!');
}

function removerDVD() {
    const id = parseInt(readlineSync.question('ID do DVD a ser removido: '));
    biblioteca.removerItem(id);
    console.log('DVD removido com sucesso!');
}

function removerTodosItens() {
    biblioteca.listarItens().forEach((item: ItemAcervo) => biblioteca.removerItem(item.id));
    console.log('Todos os itens foram removidos com sucesso!');
}

function editarLivro() {
    const id = parseInt(readlineSync.question('ID do livro a ser editado: '));
    const livro = biblioteca.listarItens().find((item: ItemAcervo) => item.id === id && item instanceof Livro) as Livro;
    if (livro) {
        const titulo = readlineSync.question(`Titulo (${livro.titulo}): `, { defaultInput: livro.titulo });
        const ano = parseInt(readlineSync.question(`Ano (${livro.ano}): `, { defaultInput: livro.ano.toString() }));
        const localizacao = readlineSync.question(`Localizacao (${livro.localizacao}): `, { defaultInput: livro.localizacao });
        const editora = readlineSync.question(`Editora (${livro.editora}): `, { defaultInput: livro.editora });
        const status = readlineSync.question(`Status (${livro.status}): `, { defaultInput: livro.status });
        const novoLivro = new Livro(id, titulo, ano, localizacao, editora, livro.isbn, status);
        biblioteca.atualizarItem(id, novoLivro);
        console.log('Livro editado com sucesso!');
    } else {
        console.log('Livro não encontrado!');
    }
}

function editarRevista() {
    const id = parseInt(readlineSync.question('ID da revista a ser editada: '));
    const revista = biblioteca.listarItens().find((item: ItemAcervo) => item.id === id && item instanceof Revista) as Revista;
    if (revista) {
        const titulo = readlineSync.question(`Titulo (${revista.titulo}): `, { defaultInput: revista.titulo });
        const ano = parseInt(readlineSync.question(`Ano (${revista.ano}): `, { defaultInput: revista.ano.toString() }));
        const localizacao = readlineSync.question(`Localizacao (${revista.localizacao}): `, { defaultInput: revista.localizacao });
        const editora = readlineSync.question(`Editora (${revista.editora}): `, { defaultInput: revista.editora });
        const status = readlineSync.question(`Status (${revista.status}): `, { defaultInput: revista.status });
        const novaRevista = new Revista(id, titulo, ano, localizacao, editora, status);
        biblioteca.atualizarItem(id, novaRevista);
        console.log('Revista editada com sucesso!');
    } else {
        console.log('Revista não encontrada!');
    }
}

function editarCD() {
    const id = parseInt(readlineSync.question('ID do CD a ser editado: '));
    const cd = biblioteca.listarItens().find((item: ItemAcervo) => item.id === id && item instanceof CD) as CD;
    if (cd) {
        const titulo = readlineSync.question(`Titulo (${cd.titulo}): `, { defaultInput: cd.titulo });
        const ano = parseInt(readlineSync.question(`Ano (${cd.ano}): `, { defaultInput: cd.ano.toString() }));
        const localizacao = readlineSync.question(`Localizacao (${cd.localizacao}): `, { defaultInput: cd.localizacao });
        const duracao = parseInt(readlineSync.question(`Duracao (${cd.duracao}): `, { defaultInput: cd.duracao.toString() }));
        const status = readlineSync.question(`Status (${cd.status}): `, { defaultInput: cd.status });
        const novoCD = new CD(id, titulo, ano, localizacao, duracao, status);
        biblioteca.atualizarItem(id, novoCD);
        console.log('CD editado com sucesso!');
    } else {
        console.log('CD não encontrado!');
    }
}

function editarDVD() {
    const id = parseInt(readlineSync.question('ID do DVD a ser editado: '));
    const dvd = biblioteca.listarItens().find((item: ItemAcervo) => item.id === id && item instanceof DVD) as DVD;
    if (dvd) {
        const titulo = readlineSync.question(`Titulo (${dvd.titulo}): `, { defaultInput: dvd.titulo });
        const ano = parseInt(readlineSync.question(`Ano (${dvd.ano}): `, { defaultInput: dvd.ano.toString() }));
        const localizacao = readlineSync.question(`Localizacao (${dvd.localizacao}): `, { defaultInput: dvd.localizacao });
        const duracao = parseInt(readlineSync.question(`Duracao (${dvd.duracao}): `, { defaultInput: dvd.duracao.toString() }));
        const status = readlineSync.question(`Status (${dvd.status}): `, { defaultInput: dvd.status });
        const novoDVD = new DVD(id, titulo, ano, localizacao, duracao, status);
        biblioteca.atualizarItem(id, novoDVD);
        console.log('DVD editado com sucesso!');
    } else {
        console.log('DVD não encontrado!');
    }
}

while (true) {
    const choice = menu();
    switch (choice) {
        case '1':
            while (true) {
                const addChoice = menuAdicionar();
                if (addChoice === '5') break;
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
                if (listChoice === '6') break;
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
                if (removeChoice === '6') break;
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
                if (editChoice === '5') break;
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