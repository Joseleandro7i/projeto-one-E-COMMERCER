var btnFormulario = document.querySelector(".formulario__btn");
btnFormulario.addEventListener("click", function (event) {
    event.preventDefault();
});


const inputs = document.querySelectorAll("input");
console.log(inputs)

inputs.forEach(input => {

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
        console.log(evento)

        console.log(evento.validity)

    })
});

var span = document.querySelector(".span__erro");
console.log(span);

var inputNome = document.querySelector("[data-tipo='nome']");
var lableNome = document.querySelector(".lable__nome");

var inputPreco = document.querySelector("[data-tipo='preco']");
var lablePreco = document.querySelector(".lable__preco");

var inputCategoria = document.querySelector("[data-tipo='categoria']");
var lableCategoria = document.querySelector(".lable__categoria");

var inputDescricao = document.querySelector("[data-tipo='descricao']");
var lableDescricao = document.querySelector(".lable__descricao");


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)

    if (input.validity.valid) {

        span.innerHTML = " ";

        inputNome.classList.remove("erro__nome");
        inputPreco.classList.remove("erro__preco");
        inputCategoria.classList.remove("erro__categoria");
        inputDescricao.classList.remove("erro__descricao");

        lableNome.classList.remove("lable__nome--color");
        lablePreco.classList.remove("lable__preco--color");
        lableCategoria.classList.remove("lable__categoria--color");
        lableDescricao.classList.remove("lable__descricao--color");

    } else {
        if (input == inputNome) {
            inputNome.classList.add("erro__nome");
            lableNome.classList.add("lable__nome--color");
        }
        if (input == inputPreco) {
            inputPreco.classList.add("erro__preco");
            lablePreco.classList.add("lable__preco--color");
        }
        if (input == inputCategoria) {
            inputCategoria.classList.add("erro__categoria");
            lableCategoria.classList.add("lable__categoria--color");
        }
        if (input == inputDescricao) {
            inputDescricao.classList.add("erro__descricao");
            lableDescricao.classList.add("lable__descricao--color");
        }

        span.style.visibility = "visible";
        span.innerHTML = mostraMensagemDeErro(tipoDeInput, input);

    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome n??o pode estar vazio.',
        typeMismatch: 'O nome digitado n??o ?? correspondente ao um nome de um produto',
        patternMismatch: "O nome do produto n??o ?? v??lido, talvez tenha digitado algo que n??o corresponderia ao um nome"
    },
    preco: {
        valueMissing: 'O campo de pre??o n??o pode estar vazio.',
        typeMismatch: 'O valor do pre??o digitada n??o corresponde, a uma pre??o ver??dico',
        patternMismatch: "O pre??o n??o ?? valido, talvez haja algo erro que foi digitado"
    },
    categoria: {
        valueMissing: 'O campo de categoria n??o pode estar vazio.',
        typeMismatch: 'O nome da categoria digitada n??o corresponde, a uma categoria ver??dica',
        patternMismatch: "A categoria n??o ?? valida, talvez haja algo erro que foi digitado"
    },
    descricao: {
        valueMissing: 'O campo de descri????o n??o pode estar vazio.',
        typeMismatch: 'A descri????o n??o corresponde, a uma descri????o ver??dica',
        patternMismatch: "A descri????o n??o ?? valida, talvez haja algo erro que foi digitado"
    }

}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })
    console.log(mensagem)
    return mensagem;
}

function validandoInputNome() {
    var inputNome = document.querySelector("[data-tipo='nome']");

    valida(inputNome);
}

function validandoInputMensagem() {
    var inputMensagem = document.querySelector("[data-tipo='mensagem']");

    valida(inputMensagem);
}
function validandoInputLocalizacao() {
    var inputLocalizacao = document.querySelector("[data-tipo='localizacao']");

    valida(inputLocalizacao);
}

function validandoInputEmail() {
    var inputEmail = document.querySelector("[data-tipo='email']");

    valida(inputEmail);
}

function validandoInputMensagem() {
    var inputMensagem = document.querySelector("[data-tipo='mensagem']");

    valida(inputMensagem);
}


function validandoInputPreco() {
    var inputPreco = document.querySelector("[data-tipo='preco']");

    valida(inputPreco);
}

function validandoInputCategoria() {
    var inputCategoria = document.querySelector("[data-tipo='categoria']");

    valida(inputCategoria);
}


function validandoInputDescricao() {
    var inputDescricao = document.querySelector("[data-tipo='descricao']");

    valida(inputDescricao);
}






