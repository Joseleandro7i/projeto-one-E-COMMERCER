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

var inputLocalizacao = document.querySelector("[data-tipo='localizacao']");
var lableLocalizacao = document.querySelector(".lable__localizacao");

var inputEmail = document.querySelector("[data-tipo='email']");
var lableEmail = document.querySelector(".lable__email");

var inputSenha = document.querySelector("[data-tipo='senha']");
var lableSenha = document.querySelector(".lable__senha");


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)

    if (input.validity.valid) {

        span.innerHTML = " ";

        inputNome.classList.remove("erro__nome");
        inputLocalizacao.classList.remove("erro__localizacao");
        inputEmail.classList.remove("erro__email");
        inputSenha.classList.remove("erro__senha");

        lableNome.classList.remove("lable__nome--color");
        lableLocalizacao.classList.remove("lable__localizacao--color");
        lableEmail.classList.remove("lable__email--color");
        lableSenha.classList.remove("lable__senha--color");

    } else {
        if (input == inputNome) {
            inputNome.classList.add("erro__nome");
            lableNome.classList.add("lable__nome--color");
        }
        if (input == inputLocalizacao) {
            inputLocalizacao.classList.add("erro__localizacao");
            lableLocalizacao.classList.add("lable__localizacao--color");
        }
        if (input == inputEmail) {
            inputEmail.classList.add("erro__email");
            lableEmail.classList.add("lable__email--color");
        }
        if (input == inputSenha) {
            inputSenha.classList.add("erro__senha");
            lableSenha.classList.add("lable__senha--color");
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
        typeMismatch: 'O nome digitado n??o ?? correspondente ao um nome',
        patternMismatch: "O seu nome n??o ?? v??lido, talvez tenha digitado algo que n??o corresponderia ao um nome"
    },
    localizacao: {
        valueMissing: 'O campo de localiza????o n??o pode estar vazio.',
        typeMismatch: 'A localiza????o digitada n??o corresponde ?? ver??dica',
        patternMismatch: "A localiza????o n??o ?? valida, talvez haja algo erro que foi digitado"
    },
    email: {
        valueMissing: 'O campo de email n??o pode estar vazio.',
        typeMismatch: 'O email digitada n??o corresponde a um email ver??dico',
        patternMismatch: "O seu email n??o ?? valido, talvez haja algo erro que foi digitado"
    },
    senha: {
        valueMissing: 'O campo de senha n??o pode estar vazio.',
        typeMismatch: 'A senha digitada n??o corresponde, a uma senha ver??dica',
        patternMismatch: "A sua senha n??o ?? valida, talvez haja algo erro que foi digitado"
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

function validandoInputLocalizacao() {
    var inputLocalizacao = document.querySelector("[data-tipo='localizacao']");

    valida(inputLocalizacao);
}

function validandoInputEmail() {
    var inputEmail = document.querySelector("[data-tipo='email']");

    valida(inputEmail);
}

function validandoInputSenha() {
    var inputSenha = document.querySelector("[data-tipo='senha']");

    valida(inputSenha);
}







