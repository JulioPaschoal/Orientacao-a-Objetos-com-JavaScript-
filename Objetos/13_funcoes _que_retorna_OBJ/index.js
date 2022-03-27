function Pessoa(nome) {
    return {
        nome: nome
    }
}

let pessoa1 = new Pessoa('Julio Paschoal');
let pessoa2 = new Pessoa('Jeise Mantovani');


console.log(pessoa1.nome);
console.log(pessoa2.nome);