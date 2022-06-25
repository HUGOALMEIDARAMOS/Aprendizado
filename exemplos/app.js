"use strict";
var pessoa = {
    nome: 'hugo',
    idade: 38,
    proffisao: 'desenvolvedora'
};
pessoa.idade = 29;
var andre = {
    nome: 'andre',
    idade: 25,
    proffisao: 'pitor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'vanesa',
    idade: 32,
    profissao: Profissao.Atriz
};
var gessica = {
    nome: 'gessica',
    idade: 28,
    materiais: ['matmaica', 'programacao', 'historia']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(gessica.materiais);
