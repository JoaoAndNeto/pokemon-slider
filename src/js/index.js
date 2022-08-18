
//DEIXEI O CÓDIGO COM ALGUNS REGISTROS DO DESENVOLVIMENTO!

/*
Objetivo 1:
quando clicar na seta avançar, mostrar a próxima carta
Passo 1 - pegar o elemento html da seta 'avançar'; ok
Passo 2 - identificar o click do usuário na seta avançar
Passo 3 - fazer aparecer o próximo cartao da lista
Passo 4 - identificar  ocartão selecionado e esconder

Objetivo 2:
Fazer as coisas acima com a seta 'voltar'
*/

// btnAvancar = document.getElementById('btn-avancar').addEventListener('click', function () {
//     console.log('oi!')
// });

// const btnAvancar = document.getElementById('btn-avancar');
// const btnVoltar = document.getElementById('btn-voltar');
// const cartoes = document.querySelectorAll(".cartao");
// let cartaoAtual = 0;

// btnAvancar.addEventListener('click', function () {
//     /* Uma guard code que para a execução quando chega no último */
//     if (cartaoAtual === cartoes.length - 1) return;

//     const cartaoSelecionado = document.querySelector('.selecionado');
//     cartaoSelecionado.classList.remove('selecionado');

//     cartaoAtual++;
//     cartoes[cartaoAtual].classList.add('selecionado');
// });

// btnVoltar.addEventListener('click', function () {
//     if(cartaoAtual === 0) return;
//     /* Acima a gente tem outra guard*/

//     const cartaoSelecionado = document.querySelector('.selecionado');
//     cartaoSelecionado.classList.remove('selecionado');

//     cartaoAtual--;
//     cartoes[cartaoAtual].classList.add('selecionado');
// });

//O CODIGO ACIMA ESTÁ DE UMA FORMA CRUA, É NECESSÁRIO MELHORAR, REFATORAR. VAMOS FAZER ISSO ABAIXO

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//A GENTE VAI COMEÇAR CRIANDO FUNÇÕES PARA AS PARTES DE CÓDIGO QUE SE REPETEM PARA O BOTÃO DE AVANÇAR E O BOTÃO DE VOLTAR
function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    /* Uma guard code que para a execução quando chega no último card */
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function () {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
