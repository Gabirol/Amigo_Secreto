// Essa array ira receber os nomes informados pelo usuário
const listaNomes = [];

// Essa função será responsavel por coletar os nomes informados e jogar para a lista de nomes.
function coletaNome() {
    // Coletando o valor no input e retirando espaços com o trim
    const input = document.getElementById('nome-amigo');
    const nome = input.value.trim();

    // Colocando condiconais para evitar valores indesejados ou bug, como nomes repetidos.
    if (nome === '') {
        return alert('Digite um nome para adcionar!');
    }
    if(listaNomes.includes(input.value)){
        alert('Nome já existente!');
        input.value = '';
        return;
    }

    // Adiciona o nome a listaNomes e limpa o input
    listaNomes.push(nome);
    input.value = '';
}

// Essa função ira imprimir na tela o array com os nomes informados
function inclueAmigo() {
    // Seleciona a div e limpa os dados.
    const listaDiv = document.getElementById('lista-amigos');
    listaDiv.innerHTML = "";

    // Condicional que percorre a lista e faz com que o ultimo nome não tenha seja separado com " - " como os demais
    listaNomes.forEach((item, index) => {
        if (index === listaNomes.length -1){
            listaDiv.innerHTML += `${item}`;
        }else {
            listaDiv.innerHTML += `${item} - `;
        }
    });
}

// Gera uma ordem pseudoaleatória para a lista de nome, a enbaralhando e sorteando os nomes.
function sortearNomes() {
    // Criamos uma nova lista para não afetar a ordem da original que gera numeros aletorios entre -0,5 e 0,5 que serão responsaveis por enbaralhar o array
    const embaralharNome = [...listaNomes].sort(() => Math.random() - 0.5);

    // Um loop que criar uma nova lista que vai receber a nova ordem de nomes
    const dupla = [];
    for(let i = 0; i < embaralharNome.length; i +=2) {
        const nome1 = embaralharNome[i];
        // Coloquei uma condicional na qual se não ouver um numero par de nomes ele ira retorar uma mensagem "sem par" ao lado do nome sem
        const nome2 = embaralharNome[i + 1] || '(sem par)';

        dupla.push(`${nome1} ➜ ${nome2}`);
    }

    // Vai imprimir na tela os nomes
    const listaDiv = document.getElementById('lista-sorteio');
    listaDiv.innerHTML = dupla.join('<br>');
}



// Função sera executada assim que clicado o botão adicionar.
function adicionar() {
    coletaNome();
    inclueAmigo();
    console.log(listaNomes);
}

// Fução que sera executada assim que clicar em sortear
function sortear() {
    // Condicional que ira validar se não foi escrito no minimo 4 nomes para sortear.
    if(listaNomes.length < 4){
        alert('Adicone no minimo 4 amigos');
        return;
    }
    sortearNomes();
}

// Função que ira limpar os dados dos DOM e do array.
function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaNomes.length = 0;
}
