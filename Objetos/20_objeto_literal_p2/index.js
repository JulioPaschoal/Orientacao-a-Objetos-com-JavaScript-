let rodas = 4;   
let portas = 4;   
let aro = 20;   
let tetosolar = true;   

let carro = {
    rodas,
    portas,
    aro,
    tetosolar,
    bancoDeCouro: true,
    ligar(){
        console.log("O carro ligou");
    },
    desligar(){
        console.log("O carro desligou");
    }
};


console.log(carro);
console.log(carro.rodas);
carro.ligar();
carro.desligar();