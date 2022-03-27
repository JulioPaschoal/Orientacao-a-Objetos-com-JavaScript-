let carro = {
    portas: 4,
    cor: "Vermelha"
}
let pessoa = {
    nome: "Julio Paschoal",
    idade: 36
}

console.log(carro.portas);
console.log(carro.cor);

console.log(pessoa['nome']);
console.log(pessoa['idade']);

let nomePessoa = pessoa['nome'];
console.log(nomePessoa.length);