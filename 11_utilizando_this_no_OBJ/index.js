
let pessoa = {
    nome: 'Julio Paschoal',
}

pessoa.idade = 36;

pessoa.falar = function () {
    console.log('Olá, eu me chamo ' + this.nome + ' e tenho ' + this.idade + ' anos');
}

pessoa.falar();