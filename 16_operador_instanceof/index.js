function Robo(nome, arma) {
    this.nome = nome;
    this.arma = arma;
}

function Humano(nome){
    this.nome = nome;
}

let android = new Robo('Xyz', 'Punhos');

console.log(android instanceof Robo);
console.log(android instanceof Humano);
