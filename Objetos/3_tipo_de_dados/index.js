let maquina = {
    material: "aço inox",
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    NumeroDeMotores: 1,
};


console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos);

for (let i = 0; i < maquina.equipamentos.length; i++) {
    console.log(maquina.equipamentos[i]);
}

if(maquina.vaiMontada == false){
    console.log("O comprador precisa montar a máquina");
}