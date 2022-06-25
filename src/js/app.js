"use strict";
// desafio 1
var employee = {
    name: "Hugo",
    code: 10
};
employee.code = 10;
employee.name = "John";
//desafio 2 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
//desafio 3
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
//desafio 4
