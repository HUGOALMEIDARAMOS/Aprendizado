const pessoa ={
  nome:'hugo',
  idade: 38,
  proffisao: 'desenvolvedora'
}

pessoa.idade = 29;

const andre:{nome:string, idade:number, proffisao:string} = {
  nome: 'andre',
  idade:25,
  proffisao: 'pitor'
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  Jogador
}

interface Pessoa {
  nome:string,
  idade:number,
  profissao?: Profissao
}

const vanessa :Pessoa = {
  nome:'vanesa',
  idade: 32,
  profissao:Profissao.Atriz
}

interface Estudante extends Pessoa{
  materiais: string[]
}

const gessica : Estudante ={
  nome:'gessica',
  idade:28,
  materiais: ['matmaica', 'programacao', 'historia']
}


function listar(lista:string[]){
  for(const item of lista){
      console.log('- ', item)
  }
}

listar(gessica.materiais);