
import readlineSync from 'readline-sync';
import Biblioteca from './models/Biblioteca';
import Livro from './models/Livro';
import Revista from './models/Revista';
import CD from './models/CD';
import DVD from './models/DVD';
import registrarItem from './utils/RegistrarItem';
import { Disponibilidade } from './models/ItemAcervo';
import Midia from './models/Midia';

const biblioteca = new Biblioteca();

function mostrarMenu() {
    console.log(`
    [1]. Adicionar Item
    [2]. Editar Item
    [3]. Remover Item
    [4]. Verificar Disponibilidade
    [5]. Listar Itens
    [6]. Sair
    `);
    const opcao = readlineSync.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            menuAdicionar();
            break;
        case '2':
            menuEditar();
            break;
        case '3':
            menuRemover();
            break;
        case '4':
            verificarDisponibilidade();
            break;
        case '5':
            menuListar();
            break;
        case '6':
            console.log('Saindo...');
            process.exit(0);
        default:
            console.log('Opcao invalida!');
            mostrarMenu();
            break;
    }
}

function menuAdicionar() {
    console.log(`
    [1]. Cadastrar Livro
    [2]. Cadastrar Revista
    [3]. Cadastrar CD
    [4]. Cadastrar DVD
    [5]. Voltar
    `);
    const opcao = readlineSync.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            cadastrarLivro();
            break;
        case '2':
            cadastrarRevista();
            break;
        case '3':
            cadastrarCD();
            break;
        case '4':
            cadastrarDVD();
            break;
        case '5':
            mostrarMenu();
            break;
        default:
            console.log('Opcao invalida!');
            menuAdicionar();
            break;
    }
}

function menuEditar() {
    console.log(`
    [1]. Editar Livro
    [2]. Editar Revista
    [3]. Editar CD
    [4]. Editar DVD
    [5]. Voltar
    `);
    const opcao = readlineSync.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            editarItem('Livro');
            break;
        case '2':
            editarItem('Revista');
            break;
        case '3':
            editarItem('CD');
            break;
        case '4':
            editarItem('DVD');
            break;
        case '5':
            mostrarMenu();
            break;
        default:
            console.log('Opcao invalida!');
            menuEditar();
            break;
    }
}

function menuRemover() {
    console.log(`
    [1]. Remover Livro
    [2]. Remover Revista
    [3]. Remover CD
    [4]. Remover DVD
    [5]. Remover Todos
    [6]. Voltar
    `);
    const opcao = readlineSync.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            removerItem('Livro');
            break;
        case '2':
            removerItem('Revista');
            break;
        case '3':
            removerItem('CD');
            break;
        case '4':
            removerItem('DVD');
            break;
        case '5':
            removerTodos();
            break;
        case '6':
            mostrarMenu();
            break;
        default:
            console.log('Opcao invalida!');
            menuRemover();
            break;
    }
}

function menuListar() {
    console.log(`
    [1]. Listar Livros
    [2]. Listar Revistas
    [3]. Listar CDs
    [4]. Listar DVDs
    [5]. Listar Todos
    [6]. Voltar
    `);
    const opcao = readlineSync.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            listarItens('Livro');
            break;
        case '2':
            listarItens('Revista');
            break;
        case '3':
            listarItens('CD');
            break;
        case '4':
            listarItens('DVD');
            break;
        case '5':
            listarItens();
            break;
        case '6':
            mostrarMenu();
            break;
        default:
            console.log('Opcao invalida!');
            menuListar();
            break;
    }
}

function validarCampoObrigatorio(campo: string): string {
    let valor: string;
    do {
        valor = readlineSync.question(`${campo}: `);
        if (!valor) {
            console.log(`O campo ${campo} e obrigatorio.`);
        }
    } while (!valor);
    return valor;
}

function validarCampoNumerico(campo: string, tamanho: number): number {
    let valor: number;
    do {
        valor = readlineSync.questionInt(`${campo}: `);
        const valorStr = valor.toString();
        if (!valor || valorStr.length !== tamanho) {
            console.log(`O campo ${campo} e obrigatorio e deve ter ${tamanho} caracteres.`);
        }
    } while (!valor || valor.toString().length !== tamanho);
    return valor;
}

function validarAno(campo: string): number {
    const anoAtual = new Date().getFullYear();
    let valor: number;
    do {
        valor = readlineSync.questionInt(`${campo}: `);
        if (valor < 1000 || valor > anoAtual) {
            console.log(`O campo ${campo} deve ser um ano válido entre 1000 e ${anoAtual}.`);
        }
    } while (valor < 1000 || valor > anoAtual);
    return valor;
}


function validarDuracao(campo: string): number {
    let minutos: number;
    do {
        minutos = readlineSync.questionInt(`${campo} (em minutos): `);
        if (minutos < 0) {
            console.log(`O campo ${campo} deve ser um número inteiro positivo.`);
        }
    } while (minutos < 0);
    return minutos;
}

function cadastrarLivro() {
    const titulo = validarCampoObrigatorio('Titulo');
    const autor = validarCampoObrigatorio('Autor');
    const editora = validarCampoObrigatorio('Editora');
    const isbn = validarCampoNumerico('ISBN', 13);
    const ano = validarAno('Ano');
    const localizacao = validarCampoObrigatorio('Localizacao');

    const livro = new Livro(titulo, ano, localizacao, isbn, autor, editora);
    registrarItem(biblioteca, livro);
    console.log(`Livro cadastrado com sucesso! ID: ${livro.id}, Titulo: ${livro.titulo}, Autor: ${livro.autor}, Editora: ${livro.editora}, ISBN: ${livro.isbn}, Ano: ${livro.ano}, Localizacao: ${livro.localizacao}`);
    mostrarMenu();
}

function cadastrarRevista() {
    const titulo = validarCampoObrigatorio('Titulo');
    const editora = validarCampoObrigatorio('Editora');
    const ano = validarAno('Ano');
    const localizacao = validarCampoObrigatorio('Localizacao');

    const revista = new Revista(titulo, ano, localizacao, editora);
    registrarItem(biblioteca, revista);
    console.log(`Revista cadastrada com sucesso! ID: ${revista.id}, Titulo: ${revista.titulo}, Editora: ${revista.editora}, Ano: ${revista.ano}, Localizacao: ${revista.localizacao}`);
    mostrarMenu();
}


function cadastrarCD() {
    const titulo = validarCampoObrigatorio('Titulo');
    const ano = validarAno('Ano');
    const localizacao = validarCampoObrigatorio('Localizacao');
    const duracao = validarDuracao('Duracao');

    const cd = new CD(titulo, ano, localizacao, duracao);
    registrarItem(biblioteca, cd);
    console.log(`CD cadastrado com sucesso! ID: ${cd.id}, Titulo: ${cd.titulo}, Ano: ${cd.ano}, Localizacao: ${cd.localizacao}, Duracao: ${cd.duracao}`);
    mostrarMenu();
}

function cadastrarDVD() {
    const titulo = validarCampoObrigatorio('Titulo');
    const ano = validarAno('Ano');
    const localizacao = validarCampoObrigatorio('Localizacao');
    const duracao = validarDuracao('Duracao');

    const dvd = new DVD(titulo, ano, localizacao, duracao);
    registrarItem(biblioteca, dvd);
    console.log(`DVD cadastrado com sucesso! ID: ${dvd.id}, Titulo: ${dvd.titulo}, Ano: ${dvd.ano}, Localizacao: ${dvd.localizacao}, Duracao: ${dvd.duracao}`);
    mostrarMenu();
}

function editarItem(tipo: string) {
    const id = readlineSync.questionInt(`ID do ${tipo} a ser editado: `);
    const item = biblioteca.listarItens().find(item => item.id === id && item.constructor.name === tipo);
    if (!item) {
        console.log(`${tipo} não encontrado!`);
        mostrarMenu();
        return;
    }
    const titulo = readlineSync.question('Novo Titulo (deixe em branco para manter o atual): ');
    const anoStr = readlineSync.question('Novo Ano (deixe em branco para manter o atual): ', { defaultInput: item.ano.toString() });
    const localizacao = readlineSync.question('Nova Localizacao (deixe em branco para manter o atual): ');
    const disponibilidade = readlineSync.question('Nova Disponibilidade (Disponivel, Indisponivel, Alugado, Reservado): ') as Disponibilidade;

    if (titulo) item.titulo = titulo;
    if (anoStr) item.ano = parseInt(anoStr, 10);
    if (localizacao) item.localizacao = localizacao;
    if (disponibilidade) item.disponibilidade = disponibilidade;

    if (item instanceof Livro) {
        const autor = readlineSync.question('Novo Autor (deixe em branco para manter o atual): ');
        const editora = readlineSync.question('Nova Editora (deixe em branco para manter o atual): ');
        const isbnStr = readlineSync.question('Novo ISBN (deixe em branco para manter o atual): ', { defaultInput: item.isbn.toString() });

        if (autor) item.autor = autor;
        if (editora) item.editora = editora;
        if (isbnStr) item.isbn = parseInt(isbnStr, 10);
    }

    if (item instanceof Midia) {
        const duracaoStr = readlineSync.question('Nova Duracao (em minutos, deixe em branco para manter o atual): ', { defaultInput: item.duracao.toString() });
        if (duracaoStr) item.duracao = parseInt(duracaoStr, 10);
    }

    console.log(`${tipo} editado com sucesso! ID: ${item.id}, Titulo: ${item.titulo}, Ano: ${item.ano}, Localizacao: ${item.localizacao}, Disponibilidade: ${item.disponibilidade}`);
    if (item instanceof Livro) {
        console.log(`ISBN: ${item.isbn}, Autor: ${item.autor}, Editora: ${item.editora}`);
    }
    if (item instanceof Midia) {
        console.log(`Duracao: ${item.duracao}`);
    }
    mostrarMenu();
}

function removerItem(tipo: string) {
    const id = readlineSync.questionInt(`ID do ${tipo} a ser removido: `);
    try {
        const item = biblioteca.listarItens().find(item => item.id === id && item.constructor.name === tipo);
        if (!item) {
            throw new Error(`${tipo} não encontrado!`);
        }
        biblioteca.removerItem(id);
        console.log(`${tipo} removido com sucesso! ID: ${item.id}, Titulo: ${item.titulo}`);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log('Erro desconhecido ao remover item.');
        }
    }
    mostrarMenu();
}

function removerTodos() {
    biblioteca.listarItens().forEach(item => {
        biblioteca.removerItem(item.id);
        console.log(`Item removido com sucesso! ID: ${item.id}, Titulo: ${item.titulo}`);
    });
    console.log('Todos os itens foram removidos com sucesso!');
    mostrarMenu();
}

function verificarDisponibilidade() {
    const id = readlineSync.questionInt('ID do item: ');
    try {
        const disponibilidade = biblioteca.verificarDisponibilidade(id);
        console.log(`Disponibilidade: ${disponibilidade}`);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log('Erro desconhecido ao verificar disponibilidade.');
        }
    }
    mostrarMenu();
}

function listarItens(tipo?: string) {
    const itens = tipo ? biblioteca.listarItens().filter(item => item.constructor.name === tipo) : biblioteca.listarItens();
    console.log(itens);
    mostrarMenu();
}

mostrarMenu();