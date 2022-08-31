// VARIÁVEIS GLOBAIS

let main = document.querySelector('main');
let numTarefas = 0;


// FUNÇÕES

const addTarefa = async () => {
    let novoTitulo = document.querySelector('.novoTitulo');
    if(!(novoTitulo.value)){
        alert('É necessário preencher o título!');
        return;
    }
    let novaTarefa = '';
    let novoLink = document.querySelector('.novoLink');
    let novaDescricao = document.querySelector('.novaDescricao');

    numTarefas++;
    console.log(numTarefas);

    novaTarefa += `
        \n    <section class="tarefa" id="${'tarefa'+numTarefas}">
        \n            <button onclick="removeTarefa(\'#tarefa${numTarefas}\');">x</button>
        \n            <div class="titulo">
        \n                <input type="checkbox" class="checkbox" id="${'checkbox'+numTarefas}" onclick="checkTarefa(\'#tarefa${numTarefas}\', \'#checkbox${numTarefas}\');">
        \n                <h1>${novoTitulo.value}</h1>
        \n            </div>`;
    if(novoLink.value){
        novaTarefa += `
        \n            <div class="link">
        \n                <a href="${novoLink.value}" target="_blank">${novoLink.value}</a>
        \n            </div>`;
    }
    if(novaDescricao.value){
        novaTarefa += `
        \n            <div class="descricao">
        \n                <h2>${novaDescricao.value}</h2>
        \n            </div>`;
    }

    main.innerHTML += novaTarefa + '\n     </section>';
    novoTitulo.value = '';
    novoLink.value =  '';
    novaDescricao.value = '';
}

const removeTarefa = async (tarefa) => {
    numTarefas--;
    const tarefaHTML = document.querySelector(tarefa);
    tarefaHTML.remove();
}

const checkTarefa = async (tarefa, checkbox) => {
    const tarefaHTML = document.querySelector(tarefa);
    const checkboxHTML = document.querySelector(checkbox);
    if(checkboxHTML.checked)
        tarefaHTML.classList.add('checked');
    else
        tarefaHTML.classList.remove('checked');
}