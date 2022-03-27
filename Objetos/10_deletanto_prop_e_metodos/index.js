
let pessoa = {
    nome: 'Julio Paschoal',
}

pessoa.idade = 36;

pessoa.falar = function () {
    console.log('Olá');
}

delete pessoa.idade;
delete pessoa.falar;

console.log(pessoa);