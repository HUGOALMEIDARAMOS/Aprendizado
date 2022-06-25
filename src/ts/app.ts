// desafio 1

interface Employee {
  name:string,
  code:number,
}

let employee:Employee = {
  name:"Hugo",
  code: 10
};

employee.code = 10;
employee.name = "John";

//desafio 2 

enum Profissao {
  Padeiro,
  Atriz,
  Desenvolvedora,
  Jogador
}

interface Pessoa {
  nome:string,
  idade:number,
  profissao?: Profissao
}



let pessoa1:Pessoa= {
  nome : "maria",
  idade : 29,
  profissao : Profissao.Atriz
};

let pessoa2:Pessoa= {
  nome : "roberto",
  idade : 19,
  profissao : Profissao.Padeiro
};

let pessoa3:Pessoa= {
  nome : "laura",
  idade : 32,
  profissao : Profissao.Atriz
};


let pessoa4:Pessoa= {
  nome : "carlos",
  idade : 19,
  profissao : Profissao.Padeiro
};

//desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = '0'

function somarAoSaldo(soma: any): void {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

//desafio 4

