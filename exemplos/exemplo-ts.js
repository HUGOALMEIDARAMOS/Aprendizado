"use strict";
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('button');
function adcionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
var frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', function () {
        console.log(adcionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    });
}
